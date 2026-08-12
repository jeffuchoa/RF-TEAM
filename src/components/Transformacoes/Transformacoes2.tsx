import { useState, useEffect } from "react";
import "./Slider.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import jeffAntes from '../../Images/Jeff_Antes.jpg';
import jeffDepois from '../../Images/Jeff_Depois.png';
import Cliente2Antes from '../../Images/Cliente2Antes.png';
import Cliente2Depois from '../../Images/Cliente2Depois.png';
import Cliente3Antes from '../../Images/Cliente3_Antes.png';
import Cliente3Depois from '../../Images/Cliente3_Depois.png';
import Cliente4Antes from '../../Images/Cliente4Antes.png';
import Cliente4Depois from '../../Images/Cliente4Depois.png';
import Cliente5Antes from '../../Images/Cliente5Antes.png';
import Cliente5Depois from '../../Images/Cliente5Depois.png';
import Cliente6Antes from '../../Images/Cliente6Antes.png';
import Cliente6Depois from '../../Images/Cliente6Depois.png';
import Cliente7Antes from '../../Images/Cliente7Antes.png';
import Cliente7Depois from '../../Images/Cliente7Depois.png';
import Cliente8Antes from '../../Images/Cliente8Antes.png';
import Cliente8Depois from '../../Images/Cliente8Depois.png';
import Cliente9Antes from '../../Images/Cliente9Antes.png';
import Cliente9Depois from '../../Images/Cliente9Depois.png';
import Cliente10Antes from '../../Images/Cliente10Antes.png';
import Cliente10Depois from '../../Images/Cliente10Depois.png';
import Cliente11Antes from '../../Images/Cliente11Antes.png';
import Cliente11Depois from '../../Images/Cliente11Depois.png';
import botoes from '../../Images/Botoes.png';
import { Element } from 'react-scroll';


const Slider = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const items = document.querySelectorAll(".item");

    if (items.length === 0 || active >= items.length || active < 0) return;


    const currentItem = items[active] as HTMLElement;
    currentItem.style.transform = `none`;
    currentItem.style.zIndex = "1";
    currentItem.style.filter = "none";
    currentItem.style.opacity = "1";

    let stt = 0;


    for (let i = active + 1; i < items.length; i++) {
      stt++;
      const item = items[i] as HTMLElement;
      item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
      item.style.zIndex = `${-stt}`;
      item.style.filter = "blur(5px)";
      item.style.opacity = stt > 2 ? "0" : "0.6";
    }

    stt = 0;


    for (let i = active - 1; i >= 0; i--) {
      stt++;
      const item = items[i] as HTMLElement;
      item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
      item.style.zIndex = `${-stt}`;
      item.style.filter = "blur(5px)";
      item.style.opacity = stt > 2 ? "0" : "0.6";
    }
  }, [active]);

  return (
    <Element name="Transformacoes">
      <div data-aos="fade-up" className="transformacoes">
        <h1>Transformações </h1>
        <h2>Dos meus clientes</h2>
        <button
          id="prev"
          onClick={() => setActive(active - 1 >= 0 ? active - 1 : active)}
        >
          <img className="imageBotao" src={botoes} alt="my image" />
        </button>
        <button
          id="next"
          onClick={() =>
            setActive(active + 1 < 13 ? active + 1 : active)
          }
        >
          <img className="imageBotao" src={botoes} alt="my image" />
        </button>
        <div className="slider">

          <div className="item">
     
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente11Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente11Antes} alt="Image two" />}
              />

            </div>

          </div>

          <div className="item">
     
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider onlyHandleDraggable={false} className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={jeffDepois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={jeffAntes} alt="Image two" />}
              />
            </div>

          </div>
          <div className="item">
        
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider onlyHandleDraggable={true} className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente2Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente2Antes} alt="Image two" />}
              />

            </div>


          </div>
          <div className="item">
     
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente3Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente3Antes} alt="Image two" />}
              />
            </div>


          </div>

          <div className="item">
          
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente4Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente4Antes} alt="Image two" />}
              />

            </div>

          </div>

          <div className="item">
          
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente5Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente5Antes} alt="Image two" />}
              />

            </div>

          </div>

          <div className="item">
           
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente6Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente6Antes} alt="Image two" />}
              />

            </div>

          </div>

          <div className="item">
         
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente7Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente7Antes} alt="Image two" />}
              />

            </div>

          </div>

          <div className="item">
         
            <div style={{ touchAction: "pan-y" }}>
              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente8Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente8Antes} alt="Image two" />}
              />

            </div>

          </div>

          <div className="item">
        
            <div style={{ touchAction: "pan-y" }}>

              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente9Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente9Antes} alt="Image two" />}
              />
            </div>

          </div>

          <div className="item">
        
            <div style={{ touchAction: "pan-y" }}>

              <ReactCompareSlider className="imageSlider"
                itemOne={<ReactCompareSliderImage srcSet={Cliente10Depois} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage srcSet={Cliente10Antes} alt="Image two" />}
              />
            </div>

          </div>

          

        </div>

      </div>

    </Element>


  );
};

export default Slider;
