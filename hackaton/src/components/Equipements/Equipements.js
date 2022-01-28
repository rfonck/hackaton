import React from 'react';
import PropTypes from 'prop-types';
import './Equipements.scss';
import Equipement from '../Equipement/Equipement';
import '../styles/input.css'

class Equipements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      handleValidate: props.handleValidate,
      nbr_4g: 0,
      nbr_sms: 0,
      nbr_mail: 0,
      nbr_visio: 0
    }
  }

  onTrigger = () => {
    this.state.handleValidate()
  }

  handleChange4G = (e) => {
    this.setState({ nbr_4g: e.target.value });
  };

  handleChangeSMS = (e) => {
    this.setState({ nbr_sms: e.target.value });
  };

  handleChangeMail = (e) => {
    this.setState({ nbr_mail: e.target.value });
  };

  handleChangeVisio = (e) => {
    this.setState({ nbr_visio: e.target.value });
  };

  static get elements() {
    return [
      {name: 'Ordinateur portable', imagePath: require('../../assets/ordi_portable.jpg')},
      {name: 'Ordinateur fixe', imagePath: require('../../assets/ordi_fixe.png')},
      {name: 'Smartphone', imagePath: require('../../assets/smartphone.jpeg')},
      {name: 'Tablette', imagePath: require('../../assets/tablette.jpg')}
    ]
}


  render() {
    return(
      <div className="Profil background box-centre texte-centre">
        <h2>Sélectionnez vos appareils ménagers :</h2>
        
        <div className="gallery">
          { this.constructor.elements.map(function(element) {
                return <Equipement key={element.name} element= {element} />
              })
          }
        </div>
        <div className="form-grid">
          <div>
            <div className="form-question">
              <label className="form-label">Combien de Go de 4G utilisez-vous par mois ?</label>
            </div>
            <div className="form-question">
              <label className="form-label">Combien de SMS envoyez-vous chaque jour ?</label>
            </div>
            <div className="form-question">
              <label className="form-label">Combien de mail envoyez-vous chaque jour ?</label>
            </div>
            <div className="form-question">
              <label className="form-label">Combien d'heure passez-vous en vision chaque jour ?</label>
            </div>
          </div>
          <div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_4g} onChange={this.handleChange4G}/>
            </div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_sms} onChange={this.handleChangeSMS}/>
            </div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_mail} onChange={this.handleChangeMail}/>
            </div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_visio} onChange={this.handleChangeVisio}/>
            </div>
          </div>
        </div>
        

        <div className='bouton-gris-hover box-en-bas-a-droite'>
          <button 
          className='bouton-gris-rempli'
          onClick={this.onTrigger}>
          Valider
          </button>
        </div>
              
      </div>
    )
  }
}

Equipements.propTypes = {};

Equipements.defaultProps = {};

export default Equipements;
