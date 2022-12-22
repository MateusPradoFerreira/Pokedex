import { useEffect, useState } from "react";
import API from './api/Api'


function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPokemonName, setCurrentPokemonName] = useState('pikachu');
  const [currentPokemon, setCurrentPokemon] = useState(1);
  const [data, setData] = useState();

  function toggleDarkMode() {
    setIsDark(!isDark);
  };

  useEffect(() => {
    async function search() {
      const response = await API.get(`/pokemon/${currentPokemonName}`);
      setData(response.data);
    }
    search();
  }, [currentPokemonName]);

  useEffect(() => {
    async function search() {
      const response = await API.get(`/pokemon/${currentPokemon}`);
      setData(response.data);
    }
    search();
  }, [currentPokemon]);

  function nextPokemon() {
    setCurrentPokemon(currentPokemon + 1);
  }

  function prevPokemon() {
    if (currentPokemon > 1) {
      setCurrentPokemon(currentPokemon - 1);
    }
  }

  return (
    <>
      <input className="DARKMODE" type={'checkbox'} checked={isDark} />
      <main className="l-main">
        <div className="l-container">
          <div className="c-search">
            <div className="c-search__bar">
              <input type="text" />
              <img src="" alt="" />
            </div>
            <button onClick={() => toggleDarkMode()} type="button" className="s-search__darkModeButton">
              <img src="" alt="" />
              dada
            </button>
          </div>
          <p className="c-text">A website by Mateus do Prado Ferreira</p>
          <div className="c-pokedex">
            <div className="c-pokedex__left">
              <div className="c-pokedex__left-header-sw"></div>
              <div className="c-pokedex__left-header">
                <div className="c-pokedex__left-header-lente">
                  <div className="c-pokedex__left-header-lente-meioCirculo" ></div>
                  <div className="c-pokedex__left-header-lente-cent">
                    <div className="c-pokedex__left-header-lente-cent-lef">
                      <div className="c-pokedex__left-header-lente-cent-lep"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-pokedex__left-visor">
                <div className="c-pokedex__left-visor-vs">
                  <div className="c-pokedex__left-visor-tela">
                    <div className="c-pokedex__left-visor-tela-tl">
                      <img src={data?.sprites.front_default !== null ? data?.sprites.front_default : 'https://cdn-icons-png.flaticon.com/512/1068/1068780.png'} alt="" />
                    </div>
                    <div className="c-pokedex__left-visor-tela-vs">
                      <div className="c-pokedex__left-visor-tela-vs-tx">
                        <p>{data?.base_experience}</p>
                      </div>
                      <h2>{'#' + (data?.id < 100 ? '0' : '') + (data?.id < 10 ? '0' : '') + data?.id}</h2>
                    </div>
                  </div>
                  <div className="c-joystick" >
                  <button className="c-joystick__top" onClick={() => prevPokemon()}><div className="tr"></div></button>
                  <button className="c-joystick__left" onClick={() => nextPokemon()}><div className="tr"></div></button>
                  <button className="c-joystick__center" onClick={() => nextPokemon()}><div className="tr"></div></button>
                  <button className="c-joystick__right" onClick={() => nextPokemon()}><div className="tr"></div></button>
                  <button className="c-joystick__bottom" onClick={() => nextPokemon()}><div className="tr"></div></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-pokedex__center">
              <div className="c-pokedex__center-lt"></div>
              <div className="c-pokedex__center-sw"></div>
            </div>
            <div className="c-pokedex__right">
              <div className="c-pokedex__right-box">
                <div className="c-pokedex__right-box-border">
                  <div className="c-pokedex__right-box-content">
                    <div className="c-pokedex__right-box-container">
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-pokedex__right-sw"></div>
            </div>
          </div>
          <div className="c-footer">
            <div className="c-footer__text">
              <p className="c-text">For more website designs, please consider supporting me!</p>
              <p className="c-text">MrPokedex © 2022</p>
            </div>
            <div className="c-footer__icons">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
