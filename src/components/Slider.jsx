import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "../styles/Slider.css"
import {
  Link
} from "react-router-dom";
gsap.registerPlugin(Draggable);

const pictures = [
  {
    source:
      "http://leofrati.fr/images/oplus-th-homepage.jpg",
    content: {
      name: "O+ Urbanistes",
      link:"post/oplus"
    }
  },
  {
    source:
    "http://leofrati.fr/images/jolib-th-homepage.jpg",
    content: {
      name: "Domofrance Jolibois",
      link:"post/jolibois"
    }
  },
  {
    source:
      "http://leofrati.fr/images/vacui-th-homepage.jpg",
    content: {
      name: "Horror Vacui",
      link:"post/horrorvacui"
    }
  },
  {
    source:
    "http://leofrati.fr/images/meteo-th-homepage.jpg",
    content: {
      name: "Forecast",
      link:"/post/forecast"
    }
  },
  {
    source:
    "http://leofrati.fr/images/ami-th-homepage.jpg",
    content: {
      name: "Citroën Ami",
      link:"/post/ami"
    }
  },
];

const Slide = ({ imageSource, content }) => {
  return (
    <div className="slide">
      <div className="preview">
        <Link to={content.link}><img src={imageSource} alt="slider-images" draggable="false" /></Link>
      </div>
      <div className="infos">
        <h4>{content.name}</h4>
        <h2>{content.desc}</h2>
      </div>
    </div>
  );
};

export const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
    Draggable.create(sliderRef.current, {
      type: "x"
      /*bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0
      }*/
    });
  }, []);

  return (
   <div className="slider-container">
   <h3 class="playfair">Derniers Projets</h3>
    <div id="slider" className="slider" ref={sliderRef}>
      {pictures.map((item, index) => {
        return (
          <Slide key={index} imageSource={item.source} content={item.content} />
        );
      })}
    </div>
   </div>
  );
};
