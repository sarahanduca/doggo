import { Header } from "../../components/header";

import img1 from "../../assets/image1.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import img7 from "../../assets/image7.png";
import img8 from "../../assets/image8.png";

import styles from "./home.module.css";
import { Footer } from "../../components/footer";

function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className={styles.bentoLayout}>
          <img src={img1} alt="Cachorro" className={styles.img1} />
          <img src={img4} alt="Cachorro" className={styles.img4} />
          <img src={img3} alt="Cachorro" className={styles.img3} />
          <img src={img5} alt="Cachorro" className={styles.img5} />
          <img src={img6} alt="Cachorro" className={styles.img6} />
          <img src={img7} alt="Cachorro" className={styles.img7} />
          <img src={img8} alt="Cachorro" className={styles.img8} />
        </section>

        <section className={styles.info}>
          <section>
            <h3>About us</h3>
            <p> I like dogs and I can not lie</p>
          </section>

          <section>
            <h3>FAQ</h3>
            <p>Who let the dogs out</p>
          </section>

          <section>
            <h3>Terms and conditions</h3>
            <p>Just pet them</p>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
