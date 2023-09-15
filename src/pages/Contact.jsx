import './Contact.css';

export default function Contact(){
    function sendform(e){
        e.preventDefault();
        alert("Solicitação enviada com sucesso!")
    }

    return (
        <div className='Contact'>
            
            <div className="Form">
                <form onSubmit={sendform}>
                   <fieldset>
                        <legend>Contato</legend>
                        <input type="text" placeholder='Nome' />
                        <input type="text" placeholder='E-mail'/>
                        <input type="text" placeholder='Telefone'/>
                        <input type="text" placeholder='CEP'/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Descreva os materiais que deseja doar e anexe imagens. Podemos entrar em contato para entender melhor e agendar o melhor horário e local para retirada.'></textarea>
                        <div>
                            <label>Anexos:</label>
                            <input type="file"/>
                        </div>                        
                        <button>Enviar</button>
                    
                    </fieldset>          
                </form>
               
               
            </div>      
        </div>
    )
}