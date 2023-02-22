import './style.css';

const opcoesHeader = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return (
    <ul className='opcoes'>
      { opcoesHeader.map( (opcao) => (
        <li className='opcao'><p>{ opcao }</p></li>
      ) ) }
    </ul>
  );
};

export default OpcoesHeader;