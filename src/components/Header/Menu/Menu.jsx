import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import logo from '../../Assets/Image/Header/logo.png'
import BurgerMenu from "./BurgerMenu";


const Menu = () => {
    const [menuActive, setmenuActive] = useState(false)
    return (
        <div className="header-menu">
            <img src={logo} className="header-menu__logo" alt="logo" />
            <div className="header-menu__withburger">
                <nav className="header-menu__option">
                    <div className="header-menu__variant">Чему вы научитесь</div>
                    <div className="header-menu__variant">Процесс обучения</div>
                    <div className="header-menu__variant">Стоимость</div>
                    <div className="header-menu__variant">Контакты</div>
                    <div className='header-menu__burget-btn burgermenu-state' onClick={() => setmenuActive(!menuActive)}>
                        <span />
                    </div>
                </nav>
                <div className="header-menu__group-button">
                    <div className="header-menu__regist">Регистрация</div>
                    <div className="header-menu__login">
                        <span className="header-menu__login-arrow"><ArrowRightOutlined /></span>
                        Войти
                    </div>
                </div>
            </div>
            <BurgerMenu active={menuActive} setActive={setmenuActive} />
        </div>
    );
}

export default Menu;