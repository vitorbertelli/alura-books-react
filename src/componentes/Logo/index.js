import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const DivLogo = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoStyled = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return(
      <DivLogo>
        <LogoStyled src={logo} alt='logo' className='logo-img'/>
        <p><strong>Alura</strong>Books</p>
      </DivLogo>
  );
}

export default Logo;