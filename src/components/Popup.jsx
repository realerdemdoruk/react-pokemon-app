import React from 'react';
import './Popup.css';

const Popup = ({ trigger, setTrigger, pokemon }) => {
  console.log(pokemon);
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>

        <div>{pokemon.name}</div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Popup;
