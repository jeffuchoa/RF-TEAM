import './CSS.css';
import Insta from '../../Images/insta1.png';
import feed1 from '../../Images/Feed1.jpg';
import feed2 from '../../Images/Feed2.jpg';
import feed3 from '../../Images/Feed3.jpg';
import feed4 from '../../Images/Feed4.jpg';
import feed5 from '../../Images/Feed5.jpg';
import feed6 from '../../Images/Feed6.jpg';

function Instagram() {

  return (
        <div className='SessaoInstagram'>
             <div className="tituloSessaoInstagram">
                <img src={Insta} alt="" />
                <h1>Me siga no Instagram!</h1>
             </div>
             <div className="feed">
              <div className="containerfeedphoto"><a target="_blank" className='LinkInstagram' rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className='Feedphoto' src={feed1} alt="" /></a></div>
              <div className="containerfeedphoto"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className='Feedphoto' src={feed2} alt="" /></a></div>
              <div className="containerfeedphoto"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className='Feedphoto' src={feed3} alt="" /></a></div>
              <div className="containerfeedphoto"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className='Feedphoto' src={feed4} alt="" /></a></div>
              <div className="containerfeedphoto"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className='Feedphoto' src={feed5} alt="" /></a></div>
              <div className="containerfeedphoto"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/richardfrancateam/"><img className='Feedphoto' src={feed6} alt="" /></a></div>
             </div>
             <p>"Um shape perfeito se constrói degrau por degrau." 💪</p>
        </div>
    )
}


export default Instagram