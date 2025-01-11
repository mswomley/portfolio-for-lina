import './App.css';
import React from 'react';

import eyes from './images/eyes.png'
import buoy from './images/buoy.png'
import girl from './images/girl.png'
import hand from './images/hand.png'
import mounts from './images/mounts.png'
import nate from './images/nate.png'
import swirl from './images/swirl.png'
import collage from './images/collage.png'
import elf from './images/elf.png'
import fairy from './images/fairy.png'
import figure from './images/figure.png'
import ow from './images/ow.png'


   export default function Color() {
        return (
            <div className="outer">
            <div className="inner"><img className="vert" src={eyes} alt="img1"/></div>
            <div className="inner"><img className="horiz" src={hand} alt="img4"/></div>
            <div className="inner"><img className="vert" src={buoy} alt="img2"/></div>
            <div className="inner"><img className="vert" src={swirl} alt="img3"/></div>
            <div className="inner"><img className="vert" src={girl} alt="img4"/></div>
            <div className="inner"><img className="horiz" src={nate} alt="img4"/></div>
            <div className="inner"><img className="horiz" src={mounts} alt="img4"/></div>
            <div className="inner"><img className="vert" src={collage} alt="img4"/></div>
            <div className="inner"><img className="vert" src={elf} alt="img4"/></div>
            <div className="inner"><img className="vert" src={fairy} alt="img4"/></div>
            <div className="inner"><img className="vert" src={figure} alt="img4"/></div>
            <div className="inner"><img className="vert" src={ow} alt="img4"/></div>
        </div>
        );
      }
