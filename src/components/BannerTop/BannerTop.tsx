import './CSS.css';
import banner from '../../Images/BannerTop.png';
import Richard from '../../Images/Richard.png';
import ItemPromocao from '../Promocoes/ItemPromocao';
import { Element } from 'react-scroll';
import promocoes from '../Promocoes/promocoes.json';



function BannerTop() {

  return (
    <Element name="Banner">
      <div className="BannerMensagem">
        <img className="banner" src={banner} alt="Imagem de pessoa feliz ao doar" />
        <div className="organizacaoBanner">
          <img className="richardBanner" data-aos="fade-right" src={Richard} alt="Imagem do Profissional Richard França" />
          <div className="mensagem">
            <h2 className='textoBanner' >Conquiste seu novo</h2>
            <h1 className='textoBannerDestaque'>CORPO!</h1>
            <p className='textoBannerMenor'>junte-se ao melhor time do brasil #TEAMRF</p>
          </div>
          <div className="PromocoesBanner">
            <div className="containerPromocoesBanner">
              <h1 className="TextoPromocoesBanner TextoPromocoesBanner2">R$ 100,00 <br></br>a hora aula</h1>
              <div className="LinhaBanner">
                <div className="sliderpromocoesbanner">
                  {promocoes.promocoes.map((promocao) => (
                    <ItemPromocao
                      tempo={promocao.tempo}
                      valor={promocao.valor}
                      valorCentavos={promocao.valorCentavos}
                      descricao={promocao.descricao}
                      className="ItemPrecoBannerTop"
                      parcela={promocao.parcela}
                      zap = {promocao.zap}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>



  )
}

export default BannerTop
