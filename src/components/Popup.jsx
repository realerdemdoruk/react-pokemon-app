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
          close
        </button>

        {loadingPopup ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <div className="popupContent">
              <div className="popupContent">
                <h5>Name:</h5> <p> {capitilizer(onePacman?.name)}</p>
                <div>
                  {pokemonData.sprites?.front_default && (
                    <img
                      src={pokemonData.sprites?.front_default}
                      alt={onePacman?.name}
                      width="200px"
                      height="200px"
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
                {pokemonData.stats?.map((stat, index) => {
                  return (
                    <div className="popupCard" key={index}>
                      <ProcessBar width={'200px'} value={stat.base_stat} />
                    </div>
                  );
                })}

                <div className="pupupAbility">
                  <h4>Ability:</h4>
                  {pokemonData.abilities?.map((ability, index) => {
                    return (
                      <div key={index}>
                        <h5> {ability.ability.name}</h5>
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
