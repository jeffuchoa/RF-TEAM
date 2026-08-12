import './CSS.css'
import ItemPromocao from './ItemPromocao'
import promocoes from './promocoes.json';

function Promocoes() {

  return (
    <div className="PromocoesMes" data-aos="fade-up">
      <div className="InformacoesPromocoes">
        <h1 className='textoPromocoesMes'> Promoções Do Mês </h1>
      </div>
      <div className="PromocoesLinha"></div>
      <div className="Promocoes">
        <div className="precos">
          {promocoes.promocoes.map((promocao) => (
            <ItemPromocao
              tempo={promocao.tempo}
              valor={promocao.valor}
              valorCentavos={promocao.valorCentavos}
              descricao={promocao.descricao}
              className=""
              parcela={promocao.parcela}
              zap = {promocao.zap}
            />
          ))}
        </div>
        <div className="bannerPromocoes" />
      </div>

    </div>



  )
}

export default Promocoes
