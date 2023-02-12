import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
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
                            <li onClick={e => e.stopPropagation()}>
                                <a href="/" className='menu-content__point'>Чему вы научитесь</a>
                            </li>
                            <li onClick={e => e.stopPropagation()}>
                                <a href="/" className='menu-content__point'>Процесс обучения</a>
                            </li>
                            <li onClick={e => e.stopPropagation()}>
                                <a href="/" className='menu-content__point'>Стоимость</a>
                            </li>
                            <li onClick={e => e.stopPropagation()}>
                                <a href="/" className='menu-content__point'>Контакты</a>
                            </li>
                            <li onClick={e => e.stopPropagation()}>
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