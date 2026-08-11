import './CSS.css'
import banner from '../../Images/PrecosFixos.png'
import ItemPromocao from '../Promocoes/ItemPromocao'
import { Element } from 'react-scroll';
import promocoes from "../Promocoes/promocoes.json"

function PrecosFixos() {

  return (
    <Element name='Precos'>
      <div className="PrecosFixos" data-aos="fade-up">
        <div className="conteudoPrecosFixos">
          <h1 className='TextoPrecosFixosTitulo'>Pacotes Fixos</h1>
          <div className="precos">
            {promocoes.precosFixos.map((precoFixo) => (
              <ItemPromocao
                tempo={precoFixo.tempo}
                valor={precoFixo.valor}
                valorCentavos={precoFixo.valorCentavos}
                descricao={precoFixo.descricao}
                parcela={precoFixo.parcela}
                className=""
              />
            ))}
          </div>
        </div>
        <img className="bannerPrecos" src={banner} alt="Imagem de pessoa feliz ao doar" />
      </div>
    </Element>



  )
}

export default PrecosFixos
