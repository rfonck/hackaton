import React from 'react';
import PropTypes from 'prop-types';
import Profil from '../Profil/Profil';
import Modalités from '../Modalités/Modalités';
import Moyens_de_transport from '../Moyens_de_transport/Moyens_de_transport';
import Resultat_component from '../Resultat_component/Resultat_component';
import Equipements from '../Equipements/Equipements';

class Questionnaire_component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeProfil: 'commercial',
      regionTravail: 'france',
      lieuHabitation: 'ville',
      lieuTravail: 'ville',
      page: '0'
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

  handleValidate = () => {
    this.setState({page: ++this.state.page})
    console.log(this.state.page)
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
        handleValidate = {this.handleValidate}>
        </Modalités>
        }
        {this.state.page==2&&
        <Moyens_de_transport
        handleValidate = {this.handleValidate}>
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
        resultats = {this.resultats}
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