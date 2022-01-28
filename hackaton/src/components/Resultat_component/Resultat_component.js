import React from 'react';
import PropTypes from 'prop-types';
import './Resultat_component.scss';

import "../styles/boutons.css";
import "../styles/textes.css";
import "../styles/box.css";
import "../styles/home.css";

class Resultat_component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultat: props.resultat,
      handleValidate: props.handleValidate
    }
  }

  render() {
    return(
      <div className="Profil background box-centre texte-centre">
    <div className='texte-titre texte-gris'>Resultats</div>
    <p></p>
    <div className='texte-resultat texte-gris'>Vous émettez : {this.resultat} kg de Co2 par an</div>
  </div>
    )
  }

}

Resultat_component.propTypes = {};

Resultat_component.defaultProps = {};

export default Resultat_component;
