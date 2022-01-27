import React from 'react';
import './Moyens_de_transport.scss';
import '../styles/input.css'
class Moyens_de_transport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false
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
        onChange={this.changeModeTransport}
        id = "modeTransport"
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

        <div class="btn-group" role="group" aria-label="Basic example">
          
          <button type="button" class="btn btn-secondary">Vélo</button>
          <button type="button" class="btn btn-secondary">Trottinette</button>
        </div>
      </form>
    </div>
    );
  }
}

export default Moyens_de_transport;
