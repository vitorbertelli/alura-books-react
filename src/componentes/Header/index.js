import './style.css';
import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import IconesHeader from '../IconesHeader/index.js';

function Header() {
  return (
    <header className="header">
    <Logo />
    <OpcoesHeader />
    <IconesHeader />
  </header>
  );
};

export default Header;