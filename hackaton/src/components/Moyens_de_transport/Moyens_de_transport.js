import React from 'react';
import './Moyens_de_transport.scss';
import '../styles/input.css'
class Moyens_de_transport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      isVoiture: 'false'
    }
    this.eqco2 = 0;
    this.wh = 0;
    this.htmlString =  "<h1>coucou</h1>" ;
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
          {isVoiture: 'true'}
        )
        this.htmlString = "<h1>CC</h1>"
        this.render()
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
      :<div id="changingContent">{this.state.isVoiture}</div>}
    </div>
    );
  }
}

export default Moyens_de_transport;
