import './CSS.css';
import Logo from '../../Images/Logo Branca.svg';
import {useState} from 'react';
import { Link } from 'react-scroll';
import Menu from '../../Images/MenuItem.png';
import LogoCompleta from '../../Images/LogoCompleta.png';
import Close from '../../Images/Close.png';

function App() {
    const [color,setColor] = useState(false)
    const [MobileMenu,setMobileMenu] = useState(false)

    const changeColor = () =>{
        if(window.scrollY >=90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const changeMobileMenu = () =>{
        setMobileMenu(!MobileMenu)
        console.log("aaaaaaaa")
    }

    window.addEventListener('scroll', changeColor)

  return (
        <div className={color ? 'header header-bg' : 'header'}>
            <div className="InsideHeader">
                <Link  to="Banner" smooth={true} duration={500}>
                    <img className="LogoFeira" src={Logo} alt="Logo da Feira da Pechincha " />
                </Link>
                <img src={MobileMenu ? Close : Menu} onClick={ () => changeMobileMenu()} className='BotaoMenuHeader' alt="" />
                    <div className={MobileMenu ? 'OpcoesHeader active' : 'OpcoesHeader'} >
                        <h2 className='MenuNavegacao'>Menu de Navegação</h2>
                        <Link  to="SobreMin" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Sobre Min </Link>
                        <Link  to="Transformacoes" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Transformações </Link>
                        <Link  to="Precos" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Preços </Link>
                        <Link  to="Contato" offset={-200} smooth={true} duration={500} className='OpcaoHeader'> Contato </Link>
                        <img src={LogoCompleta} className='LogoCompletaMenu' alt="" />
                </div>
            </div>
            
        </div>
    )
}


export default App