import Perfil from '../components/Perfil/Perfil.jsx';
import Img01 from '../imagens/img-01.png';
import Img02 from '../imagens/img-02.png';
import Img03 from '../imagens/img-03.png';
import Titulo from '../imagens/titulo.png';
import Materiais from '../imagens/materiais-aceitos.png';


import './Home.css';

export default function Home(props){
    return (
        <div className="Home">

        <img src={Titulo} alt="Acesse seu perfil" />
  
        <div className='Perfis'>
              <Perfil imagem={Img01} titulo="Quero doar materiais" texto="Separe os materiais por tipo de reciclagem. Não se preocupe que temos um guia para isso!"></Perfil>       
              <Perfil imagem={Img02} titulo="Quero receber materiais" texto="Cadastre sua empresa ou cooperativa e receba os materiais coletados próximos!"></Perfil>       
              <Perfil imagem={Img03} titulo="Quero fazer a entrega" texto=" Colete e entregue os materiais e contribua com a sustentabilidade!"></Perfil>     
        </div>
  
        <a href="/about"><img src={Materiais} alt="" /></a>
                 
      </div>
    )

}