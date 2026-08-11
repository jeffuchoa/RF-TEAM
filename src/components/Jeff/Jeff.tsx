import './CSS.css';
import ReactPlayer from 'react-player'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import jeffAntes from '../../Images/Jeff_Antes.jpg';
import jeffDepois from '../../Images/Jeff_Depois.png';
import video from '../../Images/Depoimento Jefferson_1.mp4';

function Jeff() {

    return (
        <div className="SessaoJeff" data-aos="fade-up">
            <div className="backgroundJeff"></div>
            <div className="filtrotextoMensagem">
                <div className="MensagemJeff">
                    <h1>Jefferson Andrade Foi meu Cliente!</h1>
                    <p className='textoJeffPequeno'>Jefferson ou Jeff Andrade é um dançarino que participou de programas de TV como o Dancing Brasil, ele tinha objetivos de conquistar o seu novo corpo, mas estava com muitas dificuldades até encontrar o meu serviço de consultoria, isso trouxe a ele resultados rápidos e relevantes fazendo outros artistas e celebridades como a Xuxa reconhecer meu trabalho! Confira o vídeo e seu Antes e Depois! </p>
                </div>
            </div>

            <div className="VideoBodyJeff">
                <ReactPlayer className="VideoBodyMidiaJeff" controls={true} url={video} />
                <div className="item2">
                    <div className="filtro">
                        <div className="filtroAntes"> <p className='textoAntes'>Depois</p></div>
                        <div className="filtroDepois"> <p className='textoDepois'>Antes</p></div>
                    </div>
                    <div style={{ touchAction: "pan-y", height: "100%", width:"100%" }}>
                        <ReactCompareSlider onlyHandleDraggable={false} className="imageSlider"
                            itemOne={<ReactCompareSliderImage srcSet={jeffDepois} alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage srcSet={jeffAntes} alt="Image two" />}
                        />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Jeff