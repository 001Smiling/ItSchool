import React from "react";
import { CloseOutlined } from "@ant-design/icons";



function LogIn({ closeTest }) {


    return (
        <section className="login">
            <div className="login-block">
                <span className="login-block__close close__button">
                    <CloseOutlined onClick={() => closeTest(false)} />
                </span>
                <form className="login-form">
                    <p className="login-form__point">
                        <span className="login-form__span">Email:</span>
                        <input className="login-form__input" type="email" id="email" name="email" />
                    </p>
                    <p className="login-form__point">
                        <span className="login-form__span">Пароль:</span>
                        <input className="login-form__input" type="password" id="password" name="password" />
                    </p>
                    <div className="login-form__button">Войти</div>
                </form>
            </div>
        </section>
    )
}
export default LogIn;