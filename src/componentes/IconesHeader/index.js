import './style.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const iconesHeader = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className='icones'>
      { iconesHeader.map( (icone) => (
        <li className='opcao'><img src={icone} alt='icones'></img></li>
      ) ) }
    </ul>
  );
};

export default IconesHeader;