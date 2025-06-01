import React from 'react';
import styles from './Footer.module.css';

function Footer({ year }) {
  return <footer className={styles.footer}>© {year} My React Site</footer>;
}

export default Footer;
