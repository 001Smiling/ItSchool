import React from "react";
import Network from "./Network/Network";
import Infa from "./Infa/Infa";



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__datablok sizeblock">
                <div className="footer__data">
                    <Network />
                    <Infa />
                </div>
                <div className="footer__law">
                    &copy;2022 ytyt — Все права защищены
                    <div className="footer__privacy">
                        <p>Пользовательское соглашение</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;