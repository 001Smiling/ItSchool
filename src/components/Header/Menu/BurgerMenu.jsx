function BurgerMenu({ active, setActive }) {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur' onClick={() => setActive(false)}></div>
            <div className='menu__content'>
                <ul>
                    <li onClick={e => e.stopPropagation()}>
                        <a href="/">Чему вы научитесь</a>
                        <a href="/">Процесс обучения</a>
                        <a href="/">Стоимость</a>
                        <a href="/">Контакты</a>
                        <a href="/">Регистрация</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BurgerMenu;