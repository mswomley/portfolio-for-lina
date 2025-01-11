import './App.css';
import React from 'react';
import astonish from './images/astonish.png'
import bandaid from './images/bandaid.png'
import bug from './images/bug.png'
import creature from './images/creature.png'
import growth from './images/growth.png'
import pumpkin from './images/pumpkin.png'
import skateboard from './images/skateboard.png'
import ufo from "./images/ufo.png"
import view from "./images/view.png"
import whirl from "./images/whirl.png"

export default function Bnw() {
    return (
        <div className="outer">
        <div className="inner"><img className="horiz" src={bandaid} alt="img1"/></div>
        <div className="inner"><img className="horiz" src={astonish} alt="img2"/></div>
        <div className="inner"><img className="horiz" src={bug} alt="img3"/></div>
        <div className="inner"><img className="vert" src={creature} alt="img4"/></div>
        <div className="inner"><img className="vert" src={growth} alt="img5"/></div>
        <div className="inner"><img className="vert" src={pumpkin} alt="img6"/></div>
        <div className="inner"><img className="vert" src={skateboard} alt="img7"/></div>
        <div className="inner"><img className="vert" src={ufo} alt="img8"/></div>
        <div className="inner"><img className="horiz" src={view} alt="img9"/></div>
        <div className="inner"><img className="horiz" src={whirl} alt="img10"/></div>
    </div>
    );
  }
