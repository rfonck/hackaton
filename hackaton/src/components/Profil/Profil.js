import React from 'react';
import PropTypes from 'prop-types';
import './Profil.scss';
import "../styles/boutons.css";
import "../styles/textes.css";
import "../styles/box.css";
import "../styles/home.css";

class Profil extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      typeProfil: props.typeProfil,
      regionTravail: props.regionTravail,
      lieuHabitation: props.lieuHabitation,
      lieuTravail: props.lieuTravail,
      isValid: false
    }
  }

  changeTypeProfil = () => {
    var valeur;
    valeur = document.getElementById("typeProfil").value;
    this.state.typeProfil = valeur
    console.log(valeur)
  }
   
  changeRegionTravail = () => {
    var valeur;
    valeur = document.getElementById("regionTravail").value;
    this.state.regionTravail = valeur
    console.log(valeur)
  }
   
  changeLieuHabitation = () => {
    var valeur;
    valeur = document.getElementById("lieuHabitation").value;
    this.state.lieuHabitation = valeur
    console.log(valeur)
  }
   
  changeLieuTravail = () => {
    var valeur;
    valeur = document.getElementById("lieuTravail").value;
    this.state.lieuTravail = valeur
    console.log(valeur)
  }
   

  onTrigger = (event) => {
    if(this.state.typeProfil !== '' &&
      this.state.regionTravail !== '' &&
      this.state.lieuHabitation !== '' &&
      this.state.lieuTravail !== '')
    {
        this.state.isValid = true;
        console.log(this.state.typeProfil, this.state.regionTravail, this.state.lieuHabitation, this.state.changeLieuTravail)
    }

    if (this.state.isValid) {
      console.log("ça marche")
      this.props.handleCallbackProfil(
        this.state.typeProfil,
        this.state.regionTravail,
        this.state.lieuHabitation,
        this.state.lieuTravail);
        event.preventDefault();
    } else {
      console.log(this.state.typeProfil, this.state.regionTravail, this.state.lieuHabitation, this.state.changeLieuTravail)
      alert("error message")
    }
  }

  render() {
    const {data} = this.state
    return(
      <div className="Profil background box-centre texte-centre">
    <div className='texte-titre texte-gris'>Profil</div>
    <p></p>
    <form>
        <div
        className='texte-centre'>
          Type de profil : 
        <select 
        onChange={this.changeTypeProfil}
        id = "typeProfil"
        className='margin-left box-sans-contour texte-vert texte-centre'
        >
          <option value = "commercial">Commercial</option>
          <option value = "dev">Dev</option>
          <option value = "rh">RH</option>

        </select>
        <p></p>
        Région de travail : 
        <select 
        onChange={this.changeRegionTravail}
        id = "regionTravail"
        className='margin-left box-sans-contour texte-vert texte-centre'
        >
          <option value ="france">France</option>
          <option value="roumanie">Roumanie</option>
          <option value="inde">Inde</option>
          <option value="asie">Asie</option>
          <option value="afrique">Afrique</option>
          <option value="amerique">Amerique</option>
          <option value="russie">Russie</option>
          <option value="autre">Autre en Europe</option>

        </select>
        <p></p>
        Lieu d'habitation : 
        <select
        onChange={this.changeLieuHabitation}
        id = "lieuHabitation" 
        className='margin-left box-sans-contour texte-vert texte-centre'
        >
          <option value="ville">Ville</option>
          <option value="peripherique">Périphérie</option>
          <option value="campagne">Campagne</option>

        </select>
        <p></p>
        Lieu de travail : 
        <select 
        onChange={this.changeLieuTravail}
        id = "lieuTravail"
        className='margin-left box-sans-contour texte-vert texte-centre'
        >
          <option value="ville">Ville</option>
          <option value="peripherique">Périphérie</option>
          <option value="campagne">Campagne</option>
          
        </select>
        <p></p>
        </div>
        <hr></hr>
        <div
        className='bouton-gris-hover box-en-bas'
        >
          <button 
          className='bouton-gris-rempli'
          onClick={this.onTrigger}>
          Valider
          </button>
        </div>
        <div id="nouveau"> ### composant suivant ### </div>
        <div>salut  {data}</div>
      </form>
  </div>
    );
  }

}


Profil.propTypes = {};

Profil.defaultProps = {};

export default Profil;
