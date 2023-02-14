import React from 'react';
import './Popup.css';
import { useEffect, useState } from 'react';
import ProcessBar from '../components/ProcessBar/ProcessBar';
const Popup = ({ setTrigger, birTanePokemon }) => {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${birTanePokemon.name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '10px',
                }}
              >
                <h5>name:</h5> <p> {birTanePokemon?.name}</p>
                <div>
                  {pokemonData.sprites?.front_default && (
                    <img
                      src={pokemonData.sprites?.front_default}
                      alt={birTanePokemon?.name}
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
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',

                        flexDirection: 'column',
                      }}
                    >
                      <ProcessBar width={'150px'} value={stat.base_stat} />
                    </div>
                  );
                })}

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                  }}
                >
                  <h4>Ability:</h4>
                  {pokemonData.abilities?.map((ability, index) => {
                    return (
                      <div
                        key={index}
                        style={
                          {
                            // display: 'flex',
                            // flexDirection: 'row',
                            // gap: '10px',
                          }
                        }
                      >
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
