package main

import(
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
 _ "github.com/lib/pq" 
)

type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func main(){
	db, err := sql.Open("postgres", "host=localhost user=postgres password=postgres dbname=user_db sslmode=disable")

	if err != nil{
		log.Fatal(err)
	}
	defer db.Close()

	if err := db.Ping(); err!=nil{
		log.Fatal("Failed to ping database:", err)
	}

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS "user" (
		id SERIAL PRIMARY KEY,
		username VARCHAR(255) NOT NULL,
		"password" VARCHAR(255) NOT NULL
	)`)
	
	if err!= nil{
		log.Fatal(err)
	}

	router := gin.Default()

	router.GET("/users", getUsers(db))
	router.POST("/users", createUser(db))

	log.Fatal(router.Run(":8080"))
}


func getUsers(db *sql.DB) gin.HandlerFunc{
	return func(c *gin.Context){
		rows, err := db.Query(`SELECT * FROM "user"`)

		if err != nil{
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
	
		defer rows.Close()
		var users []User
		
		for rows.Next(){
			var user User
			err := rows.Scan(&user.ID, &user.Username, &user.Password )
			if err != nil{
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			users = append(users, user)
		}

		c.JSON(http.StatusOK, users)

	}
}

func createUser(db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
			var user User
			err := c.ShouldBindJSON(&user)
		
			if err != nil {
					c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
					return
			}

			stmt, err := db.Prepare(`INSERT INTO "user" (username, "password") VALUES ($1, $2)`)
			if err != nil {
					c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
					return
			}
			defer stmt.Close()

			_, err = stmt.Exec(user.Username, user.Password)
			if err != nil {
					c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
					return
			}
			c.JSON(http.StatusCreated, gin.H{"message": "usuário cadastrado com sucesso"})
	}
}