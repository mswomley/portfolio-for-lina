import './App.css';
import eyes from "./images/eyes.png"

export default function All() {
  return (
    <div class="row">
      <div class="column">
        <img src={eyes}></img>
        <img src={eyes}></img>
      </div>
      <div class="column">
        <img src={eyes}></img>
        <img src={eyes}></img>
      </div>
      <div class="column">
        <img src={eyes}></img>
        <img src={eyes}></img>
      </div>
      <div class="column">
        <img src={eyes}></img>
        <img src={eyes}></img>
      </div>
    </div>

  );
}