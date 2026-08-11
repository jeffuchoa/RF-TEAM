import './CSS.css';
import { PulsatingButton } from '../magicui/pulsating-button';
import Zap2 from '../../Images/Zap2.png';

function ItemPromocao({ valor,valorCentavos,tempo,className,descricao,parcela,zap }: { valor: number; valorCentavos:string; tempo:string,className?:string,descricao?:string,parcela?:number,zap?:boolean }) {


    async function gerarLinkPagamento(valor: number) {
      try {
        const response = await fetch(`https://be-teamrf-w9ze.vercel.app/api/mercadoPago?valor=${valor}&produto=${tempo}`, {
          method: "GET",
        });
        console.log(response)
    
        if (!response.ok) {
          throw new Error("Erro ao gerar o link de pagamento");
        }
    
        const data = await response.json();
        console.log("Link de pagamento:", data.link);
    
        // Redireciona o usuário para o link de pagamento
        window.location.href = data.link;
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    
    return (
        <div data-aos="flip-left" className={`${className} itemPreco`}>
            <div className="TempoPreco">
                <p className='TituloPreco'>{tempo}</p>
                <p className='SubtituloPreco'>{descricao ? descricao : "De Consultoria."} </p>
            </div>
            <p className='hora'>Ou R$ 100 reais a hora aula</p>
            <div className="valorpreco">
                <div className="quadrado"></div>
                <div className="quadradoPreco">
                    <p className='PorApenas'>Por Apenas</p>
                    <div className='PrecoPacoteConjunto'>
                        <p className='PrecoPacoteSimbolo'>R$</p>
                        <p className='PrecoPacote'> {valor.toLocaleString('pt-BR')}</p>
                        <p className='PrecoPacoteCentavos'>,{valorCentavos}</p>
                    </div>
                    <p className='parcelas'>{parcela ? parcela+"X de "+Math.floor((((valor+(Number(valorCentavos)/100))/(parcela? parcela:10)) * 100) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "10X de " + (Math.floor((((valor+(Number(valorCentavos)/100))/(parcela? parcela:10)) * 100) / 100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </div>
            {zap? 
               <PulsatingButton pulseColor="#c0c0c0" className='botaoPrecoZap' onClick={() => window.location.href = "http://api.whatsapp.com/send?1=pt_BR&phone=5581985504677&fbclid=PAZXh0bgNhZW0CMTEAAaY87RjRWvYX7NzN-Qo-DpzcVN6yWurmxVABfFYpXJTX-hbcNSlXBiyp-dY_aem_AYW2C0FEeqO1cgSlV4SXKA"} >
               <div className="elementosbotaozap">
                 <img src={Zap2} className='botaozapimage' alt="" />
                 <p>Converse Comigo!</p>
               </div>
             </PulsatingButton>
              :
              <button onClick={() => gerarLinkPagamento(valor+(Number(valorCentavos)/100))} className="botaoPreco"><p className='textoBotaoPreco'>Quero este Pacote!</p></button>
            }
           
            
        </div>
    )
}

export default ItemPromocao