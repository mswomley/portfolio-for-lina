import './App.css';
import eyes from "./images/eyes.png"
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

export default function All() {
  return (
    <div class="row">
      <div class="column">
        <img src={eyes}></img>
        <img src={buoy}></img>
        <img src={elf}></img>
        <img src={astonish}></img>
        <img src={skateboard}></img>
       
      </div>
      <div class="column">
        <img src={girl}></img>
        <img src={figure}></img>
        <img src={hand}></img>
        <img src={creature}></img>
        <img src={view}></img>
        <img src={bandaid}></img>
      </div>
      <div class="column">
        <img src={mounts}></img>
        <img src={ow}></img>
        <img src={fairy}></img>
        <img src={whirl}></img>
        <img src={pumpkin}></img>
        <img src={ufo}></img>
        
      </div>
      <div class="column">
        <img src={swirl}></img>
        <img src={collage}></img>
        <img src={nate}></img>
        <img src={growth}></img>
        <img src={bug}></img>
      </div>
    </div>

  );
}