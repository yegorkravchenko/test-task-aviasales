import React from 'react';

import logo from '../../img/logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.Header}>
      <img
        className={styles.Header__logo}
        src={logo}
        alt="Логотип с самолетом"
      />
    </header>
  );
}

export default Header;
