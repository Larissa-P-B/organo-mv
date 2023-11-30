import Botao from "../Botao"
import Campo from "../Campo"

import ListaSuspensa from "../ListaSuspensa"
import { useState } from "react"
import './Formulario.css'

const Formulario = (props) =>{



    const [nome,setNome] = useState('')
   
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')

    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.jogadorCadastrado({
            nome,
        
            imagem,
            time
        })
        setNome('')
      
        setImagem('')
        setTime('')
        
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Campo 
                obg={true} 
                label = "Nome" 
                place = "Digite seu nome..."
                valor={nome}
                alterar={valor => setNome(valor)}/>
               
                <Campo  
                label = "Imagem" 
                place = "Digite o endereço da imagem..."
                valor={imagem}
                alterar={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obg={true} 
                label='Time' 
                itens={props.times}
                valor={time}
                alterar={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>

            </form>
        </section>
    )

}

export default Formulario