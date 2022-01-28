import React from 'react';
import PropTypes from 'prop-types';
import './Resultat_component.scss';

class Resultat_component extends React.Component{
  render(){
    return(
      <div className="Resultat_component">
        Vous consommez {this.props.resultat} kg de CO2e par an;
      </div>
    )
  }
}

Resultat_component.propTypes = {};

Resultat_component.defaultProps = {};

export default Resultat_component;
