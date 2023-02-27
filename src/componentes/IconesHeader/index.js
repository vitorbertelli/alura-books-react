import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.img`
  margin-right: 40px;
  width: 25px;
`

const iconesHeader = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
      { iconesHeader.map( (icone) => (
        <li className='opcao'><Icone src={icone} alt='icones'/></li>
      ) ) }
    </Icones>
  );
};

export default IconesHeader;