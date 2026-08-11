import './CSS.css';
import { useState } from 'react';
import banner from '../../Images/ImagemContato.png';
import Zap2 from '../../Images/Zap2.png';
import Insta2 from '../../Images/Insta2.png';
import { Element } from 'react-scroll';

function Contato() {
    const [Image] = useState(Zap2)
    const [Image2] = useState(Insta2)

    return (
        <Element name='Contato'>
                <div data-aos="fade-up" className='SessaoContato'>
            <div className="InformacoesContato">
                <div className="TituloContato">
                    <h2>Mande uma mensagem </h2>
                    <h1 className='TextoTituloContato'>E se desenvolva Comigo!</h1>
                </div>
                <div className="ContatosContatos">
                    <button onClick={() => window.open("http://api.whatsapp.com/send?1=pt_BR&phone=5581985504677&fbclid=PAZXh0bgNhZW0CMTEAAaY87RjRWvYX7NzN-Qo-DpzcVN6yWurmxVABfFYpXJTX-hbcNSlXBiyp-dY_aem_AYW2C0FEeqO1cgSlV4SXKA")} className="BotaoSessaoContato">
                        <img className="SessaoContatoMidia" src={Image} alt="Imagem de pessoa feliz em doação" />
                        <h3 className='TextoBotaoSessaoContato'>Comunicação via WhatsApp</h3>
                    </button>
                    <button onClick={() => window.open("https://www.instagram.com/richardfrancateam/")} className="BotaoSessaoContato">
                        <img className="SessaoContatoMidia" src={Image2} alt="Imagem de pessoa feliz em doação" />
                        <h3 className='TextoBotaoSessaoContato'>Comunicação via Instagram</h3>
                    </button>
                </div>
            </div>
            <div className='coverImage'></div>
            <img className="bannerContato" src={banner} alt="Imagem de pessoa feliz ao doar" />
        </div>
        </Element>
        
    )
}


export default Contato