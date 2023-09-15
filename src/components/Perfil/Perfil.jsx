import './Perfil.css';
import Eco from '../../imagens/eco.jpg';

function Perfil(){
    return(
        <div className='Card'>
            <div className='Img'> <a href="https://www.google.com.br"> <img src={Eco} alt='imagens'/></a></div>
            <h3 className='Titulo'>Quero Doar</h3>
            <p className='Texto'>tesyutgjdkfklfjlf</p>            
        </div>
    );
}
export default Perfil;