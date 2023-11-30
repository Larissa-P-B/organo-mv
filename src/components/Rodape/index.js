import './Rodape.css'


const Rodape = ()=>{
    return(
        <footer className='footer'>

            <section>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/' target='_blank' >
                        <img src='/img/inst2.jpg' alt='Instagram'/></a>

                    </li>
                    <li>
                        <a href='https://www.facebook.com/' target='_blank' >
                        <img src='/img/facebook2.jpg' alt='Facebook'/></a>
                    </li>
                    <li>
                        <a href='https://www.twitter.com/' target='_blank' >
                        <img src='/img/twitter2.jpg' alt='Twitter'/></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/' target='_blank' >
                        <img src='/img/youtube2.jpg' alt='YouTube'/></a>
                    </li>
                </ul>

            </section>
            <section className='logo'>
                <img src='/img/tft.png' alt='O Rodapé'/>

            </section>
            <section>
                <p>Desenvolvido por Larissa-P-B</p>

            </section>
            
            

        </footer>
    )

}

export default Rodape