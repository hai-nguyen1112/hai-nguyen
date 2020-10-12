import React from 'react';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.buttonsBox}>
        <div>
          <a
            href="https://www.linkedin.com/in/hai-nguyen-106301178/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            My LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://github.com/hai-nguyen1112"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            My GitHub
          </a>
        </div>
        <div>
          <a
            href="https://medium.com/@hainguyen871112"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            My Blog
          </a>
        </div>
        <div>
          <a
            href="mailto:hainguyen871112@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            E-mail Me
          </a>
        </div>
      </div>
      <div className={styles.copyBox}>
        <span className={styles.copyRight}>
          &copy; Copyright 2020 by Hai Nguyen
        </span>
        <div className={styles.disclaimer}>
          All product names, logos and brands are property of their respective
          owners. All company, product and service names used in this website
          are for identification purposes only. Use of these names, logos and
          brands does not imply endorsement.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
