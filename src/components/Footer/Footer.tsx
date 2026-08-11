import './CSS.css';
import Logo from '../../Images/Logo Branca.svg'
import Insta2 from '../../Images/Insta2.png';
import Zap2 from '../../Images/Zap2.png';
import Assinatura from '../../Images/Assinatura.png';
import { Link } from 'react-scroll';

function Footer() {

  return (
    <>
      <div className='Footer'>
        <div className="Footerinformacoes">
          <img className="LogoFooter" src={Logo} alt="Logo da Feira da Pechincha " />
          <div className="SessoesFooter">
            <Link offset={-200} to="Banner" smooth={true} duration={1000}>RFTEAM</Link>
            <Link offset={-200} to="SobreMin" smooth={true} duration={500}>Sobre Min</Link>
            <Link offset={-150} to="Transformacoes" smooth={true} duration={500}>Transformações</Link>
            <Link offset={-200} to="Precos" smooth={true} duration={500}>Preços</Link>
            <Link offset={-200} to="Contato" smooth={true} duration={500}>Contato</Link>
          </div>
          <div className="FooterContatos">
            <p className="FooterContatoTitulo">Me siga</p>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className="SessaoFooterMidia" src={Insta2} alt="Imagem de pessoa feliz em doação" /></a>
              <a target="_blank" rel="noopener noreferrer" href="http://api.whatsapp.com/send?1=pt_BR&phone=5581985504677&fbclid=PAZXh0bgNhZW0CMTEAAaY87RjRWvYX7NzN-Qo-DpzcVN6yWurmxVABfFYpXJTX-hbcNSlXBiyp-dY_aem_AYW2C0FEeqO1cgSlV4SXKA"><img className="SessaoFooterMidia" src={Zap2} alt="Imagem de pessoa feliz em doação" /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="creditos">
        <div className="conteudoCreditos">
          <p className='FooterTituloCreditos'>Desenvolvido Por</p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/JeffUchoa"><img className="SessaoFooterAssinatura" src={Assinatura} alt="Assinatura Desenvolvedor do Site" /></a>
        </div>
      </div>

    </>

  )
}

export default Footer