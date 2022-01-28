import React from 'react';
import PropTypes from 'prop-types';
import './Modalités.scss';
import "../styles/boutons.css";
import "../styles/textes.css";
import "../styles/box.css";
import "../styles/home.css";

class Modalités extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      handleValidate: props.handleValidate,
      handleCallbackModalités: props.handleCallbackModalités         
    }
  }
  onTrigger = () => {
    this.state.handleValidate()

    var ele = document.getElementsByName('worked-days');
    for(var i = 0; i < ele.length; i++) {
      if(ele[i].checked){var workedDays=ele[i].value}
    }

    var ele2 = document.getElementsByName('onsite-days');
    for(var i = 0; i < ele2.length; i++) {
      if(ele2[i].checked){var onSiteDays=ele2[i].value}
    }

    this.state.handleCallbackModalités(workedDays,onSiteDays)
  }

  render(){
    return(
      <div className='Profil background box-centre texte-centre'>
      <div className='texte-titre texte-gris'>Schedule</div>
      <div className='radios'>
        <div className='radios-worked'>
          number of worked days per week
          <input type='radio' name='worked-days' value='1'/><label>1</label>
          <input type='radio' name='worked-days' value='2'/><label>2</label>
          <input type='radio' name='worked-days' value='3'/><label>3</label>
          <input type='radio' name='worked-days' value='4'/><label>4</label>
          <input type='radio' name='worked-days' value='5'/><label>5</label>
          <input type='radio' name='worked-days' value='6'/><label>6</label>
          <input type='radio' name='worked-days' value='7'/><label>7</label>
        </div>
        <br/>
        <div className='radios-onsite'>
          number of on site days per week
          <input type='radio' name='onsite-days' value='0'/><label>0</label>
          <input type='radio' name='onsite-days' value='1'/><label>1</label>
          <input type='radio' name='onsite-days' value='2'/><label>2</label>
          <input type='radio' name='onsite-days' value='3'/><label>3</label>
          <input type='radio' name='onsite-days' value='4'/><label>4</label>
          <input type='radio' name='onsite-days' value='5'/><label>5</label>
          <input type='radio' name='onsite-days' value='6'/><label>6</label>
          <input type='radio' name='onsite-days' value='7'/><label>7</label>
        </div>
      </div>
      <br/>
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

Modalités.propTypes = {};

Modalités.defaultProps = {};

export default Modalités;
