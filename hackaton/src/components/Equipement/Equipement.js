import React from 'react';
import PropTypes from 'prop-types';
import './Equipement.scss';
import Counter from '../Counter/Counter'

class Equipement extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <img src={this.props.element.imagePath} className="logo-equipement"/>
        <h3 className="name">{this.props.element.name}</h3>
        <Counter />
      </div>
    )
  }
}

Equipement.propTypes = {};

Equipement.defaultProps = {};

export default Equipement;
