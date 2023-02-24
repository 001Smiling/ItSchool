import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { HashLink } from 'react-router-hash-link';
function BurgerMenu({ active, setActive }) {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur' onClick={() => setActive(false)}>
                <div className='menu-content'>
                    <div className='menu-content__close'>
                        <CloseOutlined onClick={() => setActive(false)} />
                    </div>
                    <div className="menu-content__position">
                        <ul className='menu-content__block'>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="../../Main/Programma/Programma#main-programma" className='menu-content__point'>Чему вы научитесь</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="/../../Main/Price/PriceAndRules#main-howstudy" className='menu-content__point'>Процесс обучения</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="../../Main/Price/PriceAndRules#mainprice-table" className='menu-content__point'>Стоимость</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <HashLink to="../../Footer/Footer#footer" className='menu-content__point'>Контакты</HashLink>
                            </li>
                            <li onClick={() => setActive(false)} >
                                <a href="/" className='menu-content__point'>Регистрация</a>
                            </li>
                        </ul>
                        <div className="menu-content__burgerlogin login-button">
                            <span className="enu-content__burgerspanlogin login-arrow"><ArrowRightOutlined /></span>
                            Войти
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;