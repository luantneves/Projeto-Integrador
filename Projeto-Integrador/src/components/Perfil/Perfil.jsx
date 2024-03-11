import './Perfil.css';


export default function Perfil(props){
    return(
        <div className='Card'>
            <div className='Img'> <a href="/contact"> <img src={props.imagem} alt='imagens'/></a></div>
            <h3 className='Titulo'>{props.titulo}</h3>
            <p className='Texto'>{props.texto}</p>            
        </div>
    );
}
