import logo from './images/logo.svg';
import './Sass/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Shadowrun Character Sheet</h1>
      </header>
      <div className="data__wrapper">
        <div className="data__container">
          <div className="data__column--single">
          <div className="data__row"><label>Character</label>
          <input type="text" /></div>
          <div className="data__row"><label>Player</label>
          <input type="text" /></div>
          <div className="data__row"><label>Notes</label>
          <input type="text" /></div>
        </div>
      </div>
      <div className="data__container">
      <span className="data__container__title">Personal data</span>
        <div className="data__column--single">
          <div className="data__row"><label>Metatype</label>
          <input type="text" /></div>
          <div className="data__row"><label>Ethnicity</label>
          <input type="text" /></div>
          <div className="data__row"><label>Age</label>
          <input type="number" /></div>
          <div className="data__row"><label>Sex</label>
          <input type="text" /></div>
          <div className="data__row"><label>Height</label>
          <input type="text" /></div>
          <div className="data__row"><label>Weight</label>
          <input type="text" /></div>
          <div className="data__row"><label>Reputation</label>
          <input type="text" /></div>
          <div className="data__row"><label>Heat</label>
          <input type="text" /></div>
          <div className="data__row"><label>Karma</label>
          <input type="number" /></div>
          <div className="data__row"><label>Total Karma</label>
          <input type="number" /></div>
          </div>
        </div>
        <div className="data__container">
          <span className="data__container__title">Attributes</span>
          <div className="data__multi-col">
            <div className="data__column">
              <div className="data__row"><label>Body</label>
              <input type="number" /></div>
              <div className="data__row"><label>Agility</label>
              <input type="number" /></div>
              <div className="data__row"><label>Reaction</label>
              <input type="number" /></div>
              <div className="data__row"><label>Strength</label>
              <input type="number" /></div>
              <div className="data__row"><label>Willpower</label>
              <input type="number" /></div>
              <div className="data__row"><label>Logic</label>
              <input type="number" /></div>
              <div className="data__row"><label>Intuition</label>
              <input type="number" /></div>
              <div className="data__row"><label>Charisma</label>
              <input type="number" /></div>
              <div className="data__row"><label>Edge</label>
              <input type="number" /></div>
              <div className="data__row"><label>Edge Points</label>
              <input type="number" /></div>
              <div className="data__row"><label>Unarmed</label>
              <input type="number" /></div>
            </div>
            <div className="data__column">
              <div className="data__row"><label>Essence</label>
              <input type="number" /></div>
              <div className="data__row"><label>Magic/Resonance</label>
              <input type="number" /></div>
              <div className="data__row"><label>Initiative</label>
              <input type="number" /></div>
              <div className="data__row"><label>Matrix Initiative</label>
              <input type="number" /></div>
              <div className="data__row"><label>Astral Initiative</label>
              <input type="number" /></div>
              <div className="data__row"><label>Composure</label>
              <input type="number" /></div>
              <div className="data__row"><label>Judge Intentions</label>
              <input type="number" /></div>
              <div className="data__row"><label>Memory</label>
              <input type="number" /></div>
              <div className="data__row"><label>Lift/Carry</label>
              <input type="number" /></div>
              <div className="data__row"><label>Movement</label>
              <input type="number" /></div>
              <div className="data__row"><label>Defense Rating</label>
              <input type="number" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}

export default App;
