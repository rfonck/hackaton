import React from 'react';
import PropTypes from 'prop-types';
import './Resultat_component.scss';
import "../styles/boutons.css";
import "../styles/textes.css";
import "../styles/box.css";
import "../styles/home.css";

class Resultat_component extends React.Component{
  render(){
    return(
      <div className='Profil background box-centre texte-centre'>
        Vous consommez {Math.round(this.props.resultat*10)/10} kg de CO2e par semaine
      </div>
    )
  }
}

Resultat_component.propTypes = {};

Resultat_component.defaultProps = {};

export default Resultat_component;
