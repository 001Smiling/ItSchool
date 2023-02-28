import React from "react";
import { CloseOutlined } from "@ant-design/icons";



function RegistrationForm({ closeTest }) {


    return (
        <section className="registration">
            <div className="registration-block">
                <div className="registration-block__header">
                    <p className="registration-block__header-text">Форма Регистрации</p>
                    <span className="registration-block__close close__button">
                        <CloseOutlined onClick={() => closeTest(false)} />
                    </span>
                </div>
                <form className="registration-form">
                    <p className="registration-form__point">
                        <span className="registration-form__span">Имя:</span>
                        <input className="registration-form__input" type="username" id="username" name="username" />
                    </p>
                    <p className="registration-form__point">
                        <span className="registration-form__span">Email:</span>
                        <input className="registration-form__input" type="email" id="email" name="email" />
                    </p>
                    <p className="registration-form__point">
                        <span className="registration-form__span">Пароль:</span>
                        <input className="registration-form__input" type="password" id="password" name="password" />
                    </p>
                    <p className="registration-form__point">
                        <span className="registration-form__span">Повторите пароль:</span>
                        <input className="registration-form__input" type="password" id="password2" name="password2" />
                    </p>
                    <div className="registration-form__button">Зарегистрироваться</div>
                </form>
            </div>
        </section>
    )
}
export default RegistrationForm;