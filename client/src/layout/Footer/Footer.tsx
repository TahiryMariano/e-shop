import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className={styles.item}>
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            veritatis nam. Non, itaque dolores accusamus, maiores id debitis
            suscipit sed expedita ratione nam laudantium doloremque quisquam hic
            inventore quis facere. Dolorum eum, explicabo autem dicta numquam
            consectetur ea quibusdam dignissimos quaerat saepe error eius
            pariatur minima fugiat libero. Culpa error quo quibusdam qui tempore
            suscipit delectus libero quas dignissimos ipsum?
          </span>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            illum fuga velit fugit porro, veniam fugiat expedita voluptatem odit
            perspiciatis voluptatibus, quod dolore vitae quibusdam a eos ratione
            repellendus assumenda. Quibusdam at ex officiis error quae fuga
            autem ratione, voluptates aspernatur est expedita modi officia
            reprehenderit. Cupiditate, molestiae, adipisci non nulla recusandae
            suscipit error unde enim illum et quaerat aliquam.
          </span>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.logo}>E-Shop</span>{" "}
        <span className={styles.copyright}>
          Copyrigth 2023. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
