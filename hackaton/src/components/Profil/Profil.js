import React from 'react';
import PropTypes from 'prop-types';
import './Profil.scss';


const handleSubmit = (e) => {
  e.preventDefault();
  document.getElementById("nouveau").style.border = "10px solid red";
};

const Profil = () => (
  <div className="Profil">
    Profil :
    <form>
        <label>
          <input
            type="text"
            value=""
            readOnly
            onChange={() => {

            }}
            placeholder="BLABLABLA"
          />
        </label>
        <div>
          <button onClick={handleSubmit}>
            Valider (passer au composant suivant)
          </button>
        </div>
        <div id="nouveau"> ### composant suivant ### </div>
      </form>
  </div>
);

Profil.propTypes = {};

Profil.defaultProps = {};

export default Profil;
