import Menu from './Menu/Menu'
import About from './About/About';
import { ArrowDownOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <header className="header">
            <Menu />
            <About />
            <span className="header-span"><ArrowDownOutlined /></span>
        </header>
    );
}

export default Header;