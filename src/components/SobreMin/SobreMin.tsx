import './CSS.css';
import sobremin from "../../Images/SobreMin.png";
import trofeu from "../../Images/Trofeu.png";
import medalha from "../../Images/Medalha.png";
import lampada from "../../Images/lampada.png";
import { Element } from 'react-scroll';


function App() {

    return (
        <Element  name="SobreMin">
            <div data-aos="fade-up" className='SobreMin'>
                <img className="ImageSobremin" src={sobremin} alt="Logo da Feira da Pechincha " />
                <div className="Informacoes">
                    <h1>Sobre Min</h1>
                    <p>Sou Richard França, profissional de fitness e nutrição com vasta experiência nacional e internacional. Iniciei minha carreira aos 13 anos, treinei e dei aulas em Fortaleza, Recife e na Holanda. Atualmente, lidero a RF Consultoria Fitness, onde ajudo clientes a alcançar seus objetivos de forma eficiente, ganhando respeito de personalidades renomadas como Xuxa e Fernando Sardinha.</p>
                    <div className="plataformasSobremin">
                        <div className='BotaoContato'>
                            <img className="TrofeuMidia" src={trofeu} alt="Imagem de pessoa feliz em doação" />
                            <h3 className='TextoBotaoContato'>um dos maiores nomes do fisiculturismo no Brasil</h3>
                        </div>
                        <div className='BotaoContato'>
                            <img className="TrofeuMidia" src={lampada} alt="Imagem de pessoa feliz em doação" />
                            <h3 className='TextoBotaoContato'>Estratégias inteligentes de transformação Física</h3>
                        </div>
                        <div className='BotaoContato'>
                            <img className="TrofeuMidia" src={medalha} alt="Imagem de pessoa feliz em doação" />
                            <h3 className='TextoBotaoContato'>14 competições tendo 4 TOP 1</h3>
                        </div>
                    </div>

                </div>

            </div>

        </Element>
    )
}


export default App