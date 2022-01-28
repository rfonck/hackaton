import React from 'react';
import PropTypes from 'prop-types';
import './Equipements.scss';
import Equipement from '../Equipement/Equipement';
import '../styles/input.css'

class Equipements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      handleValidate: props.handleValidate            
    }
  }

  onTrigger = () => {
    this.state.handleValidate()
  }


  static get elements() {
    return [
      {name: 'Ordinateur portable', imagePath: require('../../assets/aspirateur.png')},
      {name: 'Ordinateur fixe', imagePath: require('../../assets/bouilloire.jpeg')},
      {name: 'Smartphone', imagePath: require('../../assets/cafetiere.jpg')},
      {name: 'Tablette', imagePath: require('../../assets/congelateur.jpg')}
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
