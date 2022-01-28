import React from 'react';
import './Moyens_de_transport.scss';
import '../styles/input.css'
class Moyens_de_transport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      isVoiture: false,
      handleValidate: props.handleValidate,
      handleCallbackTransports: props.handleCallbackTransports
    }
    this.eqco2 = 0;
    this.wh = 0;
    this.htmlString =  "<h1>coucou</h1>" ;
    this.emissions = [180.6, 158.75, 185.41, 202.19, 230.95, 270.71]
  }

  onTrigger = () => {
    this.state.handleValidate()
    var distance = document.getElementById('distanceTrajet').value;
    var carroserie = document.getElementById('carrosserie').value;
    this.state.handleCallbackTransports(distance, carroserie)
  }

  saySomething = () => {
    var valeur = document.getElementById("modeTransport"); 
    if(valeur !== null)
    {
      console.log(valeur.value)
      if(valeur.value =="voiture")
      {
        console.log("on est dans voiture")
        this.setState(
          {isVoiture: true}
        )
        this.htmlString = "<h1>CC</h1>"
        this.render()
      }
      else
      {
        this.setState(
          {isVoiture: false}
        )
      }
      
    }
    else
    {
      console.log("c'est nul")
    }
  }
  render(){
    return(
    <div className="Profil background box-centre texte-centre">
      <div className='texte-titre texte-gris'>Moyen(s) de transport</div>
      <p></p>
      <form>
        Mode de transport : 
        <select  
        id = "modeTransport"
        onChange={this.saySomething}
        className='margin-left box-sans-contour texte-vert texte-centre'>
          <option value = "metro">Métro</option>
          <option value = "velo">Vélo</option>
          <option value = "trottinette">Trottinette</option>
          <option value = "covoiturage">Covoiturage</option>
          <option value = "bus">Bus</option>
          <option value = "car-navette">Car / Navette</option>
          <option value = "avion">Avion</option>
          <option value = "voiture">Voiture</option>
          <option value = "moto">Moto</option>
          <option value = "train">Train</option>
          <option value = "marche">Marche</option>
        </select>
        <p></p>
        <div className='texte-centre'>
          Distance du trajet :
          <input className='margin' type="number" id="distanceTrajet" name="name"></input>
          km(s)
        </div>
          {this.state.html}
      </form>
      {!this.state.isVoiture?
      <div id="changingContent">{this.state.isVoiture}</div>
      :<div >
      <br/> année de fabrication : 
      <input id = "annee" label="année de fabrication"></input>
      <br/> motorisation : 
      <select   id="motorisation" label="motorisation"
      className='margin-left box-sans-contour texte-vert texte-centre'>
        <option value = "1">Electrique</option>
        <option value = "2">Hybride rechargeable</option>
        <option value = "3">Hybride non rechargeable</option>
        <option value = "4">Thermique</option>
      </select>
      <br/>carrosserie : 
      <select   id="carrosserie" label="carrosserie"
      className='margin-left box-sans-contour texte-vert texte-centre'>
        <option value = "berline">Berline</option>
        <option value = "break">Break</option>
        <option value = "tout-terrain">Tout-Terrains</option>
        <option value = "cabriolet">Coupé / cabriolet</option>
        <option value = "monospace">Monospace</option>
        <option value = "minibus">Minibus</option>
      </select>
      <br/> 
    </div>}
    <br/>
    <button 
      className='bouton-gris-rempli'
      onClick={this.onTrigger}>
      Valider
    </button>
    </div>
    );
  }
}

export default Moyens_de_transport;
