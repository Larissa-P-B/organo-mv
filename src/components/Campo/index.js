import './Campo.css'

const Campo = (props)=> {

    const placeholderM = `${props.place}...`

    const dd = (evento) =>{
        props.alterar(evento.target.value)
    }

    return(
        <div className='campo'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={dd} required={props.obg} placeholder={placeholderM}/>
        </div>
    )
}

export default Campo