import React from 'react';

import logo from '../../img/logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.Header}>
      <img
        className={styles.HeaderLogo}
        src={logo}
        alt="Логотип компании с самолетом"
      />
    </header>
  );
}

export default Header;
