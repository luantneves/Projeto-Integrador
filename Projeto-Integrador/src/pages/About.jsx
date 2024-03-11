import './About.css';
import Materiais from '../imagens/materiais-que-aceitamos.png';

function About(props){
    return(
        <div className='About'>
            <header>
                <img src={Materiais} alt="" />
            </header>
            <aside>
                <p>
                    Não aceitamos lixo orgânico e nem materiais contaminados.
                    <br/>
                    Não esqueça de entregar os materiais limpos e organizados.
                </p>
                
                <p>
                    
                </p>
                <ul>
                    <li style={{backgroundColor:'#5cd0ff'}}>Equipamentos Eletrônicos</li>
                    <li style={{backgroundColor:'#ff8f50'}}>Óleo de Cozinha</li>
                    <li style={{backgroundColor:'#fab2dc'}}>Papel, papelão e plásticos</li>
                    <li style={{backgroundColor:'#9a8aec'}}>Vidro</li>
                    <li style={{backgroundColor:'#3ea69b'}}>Pneus e móveis</li>
                </ul>
                
            </aside>
            
        </div>
    );
}

export default About;