import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";




function App() {

  const times =[
    {
      nome: 'Pentakill',
      corPrimaria: '#FF0000',
      corSecundaria:'#800000'
    },
    {
      nome: 'Heartsteel',
      corPrimaria: '#00FF7F',
      corSecundaria:'#2E8B57'
    },
    {
      nome: 'K/DA',
      corPrimaria: '#FFB6C1',
      corSecundaria:'#FF69B4'
    },
    {
      nome: 'True Damage',
      corPrimaria: '#000080',
      corSecundaria:'#0000FF'
    },
    {
      nome: 'Disconauts(Disco)',
      corPrimaria: '#4B0082',
      corSecundaria:'#8A2BE2'
    },
    {
      nome: 'Desperado(Country)',
      corPrimaria: '#FFA500',
      corSecundaria:'#FF4500'
    },
    {
      nome: 'Big Sad(Emo)',
      corPrimaria: '#7B68EE',
      corSecundaria:'#191970'
    },
    {
      nome: 'Anarchist(Punk)',
      corPrimaria: '#006400',
      corSecundaria:'#00FF00'
    },
    {
      nome: 'Freeflow(Jazz)',
      corPrimaria: '#8B7500',
      corSecundaria:'#EEB422'
    },
    {
      nome: 'Tranceformers (EDM)',
      corPrimaria: '#556B2F',
      corSecundaria:'#3CB371'
    },
    {
      nome: 'High-Score (8-Bit)',
      corPrimaria: '#00FFFF',
      corSecundaria:'#008080'
    },
    {
      nome: 'Glitterbomb (Hyperpop)',
      corPrimaria: '#8B008B',
      corSecundaria:'#FF1493'
    },
  ]


  
  const [jogadores,setJogadores] = useState([])

  const novojogadorAdd = (jogador) => {
    setJogadores([...jogadores,jogador])
  }
  
  
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} jogadorCadastrado={jogador => novojogadorAdd(jogador)}/>
    
      
      {times.map(time => <Time 
      key={time.nome} nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      jogadores= {jogadores.filter(jogador => jogador.time === time.nome)}/> )}

      <Rodape/>
    </div>
  );
}

export default App;
