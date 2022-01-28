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
      nbr_visio: 0,
      portable: 0,
      fixe: 0,
      smartphone: 0,
      tablette: 0,
      handleCallbackEquipements: props.handleCallbackEquipements
    }
  }

  onTrigger = () => {
    this.state.handleValidate()
    var data = document.getElementById('4g').value
    var sms = document.getElementById('sms').value
    var mail = document.getElementById('mail').value
    var visio = document.getElementById('visio').value
    var appareils = []
    for(var i=0; i<this.state.portable;i++)
      appareils.push('portable')
    for(var i=0; i<this.state.fixe;i++)
      appareils.push('fixe')
    for(var i=0; i<this.state.smartphone;i++)
      appareils.push('smartphone')
    for(var i=0; i<this.state.tablette;i++)
      appareils.push('tablette')

    console.log(data)
    console.log(sms)
    console.log(mail)
    console.log(visio)
    this.state.handleCallbackEquipements(appareils,data,sms,mail,visio)
  }

  countPortable = (valeur) => {
    this.setState({portable:valeur})
    console.log()
  }
  countFixe = (valeur) => {
    this.setState({fixe:valeur})
  }
  countSmartphone = (valeur) => {
    this.setState({smartphone:valeur})
  }
  countTablette = (valeur) => {
    this.setState({tablette:valeur})
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
      {name: 'Ordinateur portable', function:this.countPortable, imagePath: require('../../assets/ordi_portable.jpg')},
      {name: 'Ordinateur fixe',function:this.countFixe, imagePath: require('../../assets/ordi_fixe.png')},
      {name: 'Smartphone', function:this.countSmartphone, imagePath: require('../../assets/smartphone.jpeg')},
      {name: 'Tablette', function:this.countTablette, imagePath: require('../../assets/tablette.jpg')}
    ]
}


  render() {
    return(
      <div className="Profil background box-centre texte-centre">
        <h2>Sélectionnez vos appareils ménagers :</h2>
        
        <div className="gallery">
        <Equipement key='Ordinateur portable' element={this.constructor.elements[0]} functionCount={this.countPortable} />
        <Equipement key='Ordinateur fixe' element={this.constructor.elements[1]} functionCount={this.countFixe} />
        <Equipement key='Smartphone' element={this.constructor.elements[2]} functionCount={this.countSmartphone} />
        <Equipement key='Tablette' element={this.constructor.elements[3]} functionCount={this.countTablette} />
          {/* { this.constructor.elements.map(function(element) {
                return <Equipement key={element.name} element={element} function={element.function} />
              })
          } */}
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
              <input type="number" value={this.state.nbr_4g} id='4g' onChange={this.handleChange4G}/>
            </div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_sms} id='sms' onChange={this.handleChangeSMS}/>
            </div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_mail} id='mail' onChange={this.handleChangeMail}/>
            </div>
            <div className="form-input">
              <input type="number" value={this.state.nbr_visio} id='visio' onChange={this.handleChangeVisio}/>
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
