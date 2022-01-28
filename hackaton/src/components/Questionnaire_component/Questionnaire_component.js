import React from 'react';
import PropTypes from 'prop-types';
import Profil from '../Profil/Profil';
import Modalités from '../Modalités/Modalités';
import Moyens_de_transport from '../Moyens_de_transport/Moyens_de_transport';
import Resultat_component from '../Resultat_component/Resultat_component';
import Equipements from '../Equipements/Equipements';
import { calculator } from '../../calculator/calculator';

class Questionnaire_component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '0',
      typeProfil: 'commercial',
      regionTravail: 'france',
      lieuHabitation: 'ville',
      lieuTravail: 'ville',
      numberWorkedDays: 0,
      numberOnSiteDays: 0,
      distanceTrajetKm: 0,
      carrosserie: "berline",
      appareilsConnectés: [],
      data4gParMoisGb: 0,
      nbSmsParJour: 0,
      nbMailParJour: 0,
      nbHeuresVisioParJour: 0
    }
  }

  handleCallbackProfil = (typeProfil, regionTravail, lieuHabitation, lieuTravail) =>{
    this.setState({
      typeProfil: typeProfil,
      regionTravail: regionTravail,
      lieuHabitation: lieuHabitation,
      lieuTravail: lieuTravail
    })
  }

  handleCallbackModalités = (numberWorkedDays, numberOnSiteDays) =>{
    this.setState({
      numberWorkedDays: numberWorkedDays,
      numberOnSiteDays: numberOnSiteDays
    })
  }

  handleCallbackTransports = (distance, carrosserie) =>{
    this.setState({
      distance: distance,
      carrosserie: carrosserie
    })
  }

  handleValidate = () => {
    this.setState({page: ++this.state.page})
  }

  render() {
    return(
      <div className="questionnaire_component box-centre">
        {this.state.page==0&&
        <Profil 
            typeProfil = {this.state.typeProfil}
            regionTravail = {this.state.regionTravail}
            lieuHabitation = {this.state.lieuHabitation}
            lieuTravail = {this.state.lieuTravail}
            handleCallbackProfil = {this.handleCallbackProfil}
            handleValidate = {this.handleValidate}>
        </Profil>
        }
        {this.state.page==1&&
        <Modalités
        handleValidate = {this.handleValidate}
        handleCallbackModalités = {this.handleCallbackModalités}>
        </Modalités>
        }
        {this.state.page==2&&
        <Moyens_de_transport
        handleValidate = {this.handleValidate}
        handleCallbackTransports= {this.handleCallbackTransports}>
        </Moyens_de_transport>
        }
        {this.state.page==3&&
        <Equipements
        handleValidate = {this.handleValidate}>
        </Equipements>
        }
        {this.state.page==4&&
        <Resultat_component
        handleValidate = {this.handleValidate}>
        </Resultat_component>
        }
        {/* <div className='bouton-gris-hover box-en-bas'>
          <button onClick={this.handleValidate} style={{width:100, height:30}}></button>
        </div> */}
        {/*  <p>{this.state.lieuHabitation}</p> */}
      </div>
    )
  }
}

Questionnaire_component.propTypes = {};

Questionnaire_component.defaultProps = {};

export default Questionnaire_component;