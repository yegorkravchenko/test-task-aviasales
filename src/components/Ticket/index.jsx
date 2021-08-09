import React from 'react';
import s from './Ticket.module.scss';

function Ticket() {
  return (
    <div className={s.ticket}>
      <div className={s.header}>
        <p className={s.price}>13 400 P</p>
        <img
          className={s.companyLogo}
          src="https://pics.avs.io/99/36/W6.png"
          alt="Логотип авиакомпании"
        />
      </div>
      <div className={s.footer}>
        <div className={s.infoBlock}>
          <p className={s.infoLabel}>MOW - HKT</p>
          <p className={s.info}>10:45 - 08:00</p>
          <p className={s.infoLabel}>HKT - MOW</p>
          <p className={s.info}>11:20 - 00:50</p>
        </div>
        <div className={s.infoBlock}>
          <p className={s.infoLabel}>В пути</p>
          <p className={s.info}>21ч 15м</p>
          <p className={s.infoLabel}>В пути</p>
          <p className={s.info}>13ч 30м</p>
        </div>
        <div className={s.infoBlock}>
          <p className={s.infoLabel}>2 пересадки</p>
          <p className={s.info}>HKG, JNB</p>
          <p className={s.infoLabel}>1 пересадка</p>
          <p className={s.info}>HKG</p>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
