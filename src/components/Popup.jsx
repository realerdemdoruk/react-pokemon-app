import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import './Popup.css';
import ProcessBar from '../components/ProcessBar/ProcessBar';
import { capitilizer } from '../capitilizer';
const Popup = ({ setTrigger }) => {
  const { loadingPopup, pokemonData, onePacman } = useContext(GlobalContext);

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close
        </button>

        {loadingPopup ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <div className="popupContent">
              <div>
                <div className="popupName">
                  <h4>Name: </h4>
                  <p> {capitilizer(onePacman?.name)}</p>
                </div>
                <div>
                  {pokemonData.sprites?.front_default && (
                    <img
                      src={pokemonData.sprites?.front_default}
                      alt={onePacman?.name}
                      width="250px"
                      height="250px"
                    />
                  )}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <h4
                  style={{
                    margin: '0',
                  }}
                >
                  Stats:
                </h4>
                {pokemonData.stats?.map((stat, index) => {
                  return (
                    <div className="popupCard" key={index}>
                      <span>{capitilizer(stat.stat.name)}:</span>
                      <ProcessBar width={'200px'} value={stat.base_stat} />
                    </div>
                  );
                })}
                <div className="popupAbility">
                  <h4>Ability:</h4>
                  {pokemonData.abilities?.map((ability, index) => {
                    return (
                      <div key={index}>
                        <p>{capitilizer(ability.ability.name)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
