import React from 'react';
import RegisterBtn from '../../Buttons/RegisterBtn/RegisterBtn';
import LoginBtn from '../../Buttons/LoginBtn/LoginBtn';
import css from './AuthNav.module.css';


const AuthNav = () => {
  return (
    <nav className={css.authNav}>
        <LoginBtn />
        <RegisterBtn />
    </nav>
  );
};

export default AuthNav;



    // <nav className={css.authNav}>
    //   <NavLink key={'login'} to={'login'} className={css.link}>
    //     <LoginBtn closeBurgerMenu={() => setMenuOpen(false)} />
    //   </NavLink>

    //   <NavLink key={'register'} to={'register'} className={css.link}>
    //     <RegisterBtn closeBurgerMenu={() => setMenuOpen(false)} />
    //   </NavLink>
    // </nav>;