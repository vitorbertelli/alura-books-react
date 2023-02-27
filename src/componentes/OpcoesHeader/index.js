import styled from "styled-components";

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul`
  display: flex;
`

const opcoesHeader = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return (
    <Opcoes>
      { opcoesHeader.map( (opcao) => (
        <Opcao><p>{ opcao }</p></Opcao>
      ) ) }
    </Opcoes>
  );
};

export default OpcoesHeader;