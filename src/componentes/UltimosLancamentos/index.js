import styled from 'styled-components';
import { livros } from './dadosLancamentos';
import { Titulo } from '../Titulo';
import imagemLivro from '../../imagens/livro2.png';
import CardRecomendado from '../CardRecomendado';

const LancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const LivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
` 

function UltimosLancamentos () {
  return (
    <LancamentosContainer>
      <Titulo cor="#000">ÚLTIMOS LANÇAMENTOS</Titulo>
      <LivrosContainer>
        {livros.map( livro => (
          <img src={livro.src} alt='capa livro'/>
        ) )}
      </LivrosContainer>
      <CardRecomendado
          titulo="Talvez você se interesse por"
          subtitulo="Angular 11"
          descricao="Construindo uma aplicação com a plataforma Google"
          img={imagemLivro}
      />
    </LancamentosContainer>
  )
}

export default UltimosLancamentos;