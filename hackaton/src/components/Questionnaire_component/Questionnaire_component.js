import React from 'react';
import PropTypes from 'prop-types';
import Profil from '../Profil/Profil';


const Questionnaire_component = () => (
  <div className="questionnaire_component">
    Mon questionnaire :
    <Profil></Profil>
  </div>
);

Questionnaire_component.propTypes = {};

Questionnaire_component.defaultProps = {};

export default Questionnaire_component;