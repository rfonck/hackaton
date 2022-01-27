import React from 'react';
import PropTypes from 'prop-types';
import Profil from '../Profil/Profil';

class Questionnaire_component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeProfil: '',
      regionTravail: '',
      lieuHabitation: '',
      lieuTravail: ''
    }
  }

  handleCallbackProfil = (typeProfil, regionTravail, lieuHabitation, lieuTravail) =>{
    console.log("dans parent")  
    this.setState({
      typeProfil: typeProfil,
      regionTravail: regionTravail,
      lieuHabitation: lieuHabitation,
      lieuTravail: lieuTravail
  })
    console.log("apres setstate")
  }

  render() {
    return(
      <div className="questionnaire_component box-centre">
        <Profil 
            typeProfil = {this.state.typeProfil}>
            regionTravail = {this.state.regionTravail}
            lieuHabitation = {this.state.lieuHabitation}
            lieuTravail = {this.state.lieuTravail}
            handleCallbackProfil = {this.handleCallbackProfil}
        </Profil>
        dzdzd {this.state.typeProfil}
      </div>
    )
  }
}

Questionnaire_component.propTypes = {};

Questionnaire_component.defaultProps = {};

export default Questionnaire_component;