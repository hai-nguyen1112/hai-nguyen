import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
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
        <span>&copy; Copyright 2020 by Hai Nguyen</span>
      </div>
    </footer>
  );
};

export default Footer;
