import Menu from './Menu/Menu'
import About from './About/About';
import { ArrowDownOutlined } from "@ant-design/icons";

function Header({ activeTest }) {
    return (
        <header className="header">
            <Menu />
            <About activeTest={activeTest} />
            <span className="header-span"><ArrowDownOutlined /></span>
        </header>
    );
}

export default Header;