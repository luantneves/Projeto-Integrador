import { useState } from 'react';
import './Contact.css';

export default function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    const [cep, setCep] = useState("");
    const [descricao, setDescricao] = useState("");
    const [material, setMaterial] = useState("");
    const [image, setImage] = useState("");  
    

    function sendform(e){
        e.preventDefault();
        alert("Solicitação enviada com sucesso!");
        console.log({name, email, fone, cep, descricao, material, image})
    }

    return (
        <div className='Contact'>
            
            <div className="Form">
                <form onSubmit={sendform}>
                   <fieldset>
                        <legend>Contato</legend>
                        <input type="text"
                        placeholder='Nome'
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        />

                        <input type="text"
                        placeholder='E-mail'
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />

                        <input type="text"
                        placeholder='Telefone'
                        required
                        value={fone}
                        onChange={(event) => setFone(event.target.value)}
                        />

                        <input type="text"
                        placeholder='CEP'
                        required
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                        />
                        
                        <textarea name="" id="" cols="30" rows="10"
                        placeholder='Descreva os materiais que deseja doar e anexe imagens.
                        Podemos entrar em contato para entender melhor e agendar o melhor horário e local para retirada.'
                        required
                        value={descricao}
                        onChange={(event) => setDescricao(event.target.value)}
                        />

                       

                        <div>Selecione o tipo do material:</div>
                        <select name="materiais" id="" onChange={(e)=> {
                            const selectMaterial = e.target.value;
                            setMaterial(selectMaterial);
                            
                        }}>
                            <option value="Eletrônicos">Eletrônicos</option>
                            <option value="Móveis">Móveis</option>
                            <option value="Papel / Papelão">Papel / Papelão</option>
                            <option value="Plástico">Plástico</option>
                            <option value="Vidro">Vidro</option>
                            <option value="Óleo de cozinha">Óleo de cozinha</option>
                            <option value="Pneus">Pneus</option>                            
                        </select>
                        <div>
                            <label>Fotos: (Opcional)</label>
                            <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
                        </div>                 
                            
                        <button>Enviar</button>
                    
                    </fieldset>          
                </form>
               
               
            </div>      
        </div>
    )
}