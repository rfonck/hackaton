import React from 'react';
import PropTypes from 'prop-types';
import './Equipements.scss';
import Equipement from '../Equipement/Equipement';

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
      {name: 'Aspirateur', imagePath: require('../../assets/aspirateur.png')},
      {name: 'Bouilloire', imagePath: require('../../assets/bouilloire.jpeg')},
      {name: 'Cafetiere', imagePath: require('../../assets/cafetiere.jpg')},
      {name: 'Congelateur', imagePath: require('../../assets/congelateur.jpg')},
      {name: 'Fer à repasser', imagePath: require('../../assets/fer_a_repasser.jpeg')},
      {name: 'Four', imagePath: require('../../assets/four.jpg')},
      {name: 'Frigo', imagePath: require('../../assets/frigo.png')},
      {name: 'Lave vaisselle', imagePath: require('../../assets/lave_vaisselle.jpg')},
      {name: 'Machine à laver', imagePath: require('../../assets/machine_a_laver.jpg')},
      {name: 'Micro-onde', imagePath: require('../../assets/micro-onde.jpeg')},
      {name: 'Robot mixeur', imagePath: require('../../assets/robot_mixeur.jpg')}
    ]
}


  render() {
    return(
      <div className="box-centre">
        <h2>Sélectionnez vos appareils ménagers :</h2>
        
        <div className="gallery">
          { this.constructor.elements.map(function(element) {
                return <Equipement key={element.name} element= {element} />
              })
          }
        </div>

        <div className='bouton-gris-hover box-en-bas'>
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
