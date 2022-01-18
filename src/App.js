import logo from './images/logo.svg';
import './Sass/App.scss';
import {useState} from 'react'
function App() {

  const [character, setCharacter] = useState('');
  const [player, setPlayer] = useState('');
  const [notes, setNotes] = useState('');
  const [metatype, setMetatype] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [reputation, setReputation] = useState('');
  const [heat, setHeat] = useState('');
  const [karma, setKarma] = useState('');
  const [totalKarma, setTotalKarma] = useState('');
  const [body, setBody] = useState('');
  const [agility, setAgility] = useState('');
  const [reaction, setReaction] = useState('');
  const [strength, setStrength] = useState('');
  const [willpower, setWillpower] = useState('');
  const [logic, setLogic] = useState('');
  const [intuition, setIntuition] = useState('');
  const [charisma, setCharisma] = useState('');
  const [edge, setEdge] = useState('');
  const [edgePoints, setEdgePoints] = useState('');
  const [unarmed, setUnarmed] = useState('');
  const [essence, setEssence] = useState('');
  const [magicResonance, setMagicResonance] = useState('');
  const [initiative, setInitiative] = useState('');
  const [matrixInitiative, setMatrixInitiative] = useState('');
  const [astralInitiative, setAstralInitiative] = useState('');
  const [composure, setComposure] = useState('');
  const [judgeIntentions, setJudgeIntentions] = useState('');
  const [memory, setMemory] = useState('');
  const [liftCarry, setLiftCarry] = useState('');
  const [movement, setMovement] = useState('');
  const [defenseRating, setDefenseRating] = useState('');
  const [name, setName] = useState('');
  
  const displayInfo = () => {
    console.log('>',character, player, notes, metatype, ethnicity, sex, height, weight, reputation, heat, karma, totalKarma, body, agility, reaction, strength, willpower, logic, intuition, charisma, edge, edgePoints, unarmed, essence, magicResonance, initiative, matrixInitiative, astralInitiative, composure, judgeIntentions, memory, liftCarry, movement, defenseRating)
  }
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
          <input type="text" onChange={(event) => {setCharacter(event.target.value)}}/></div>
          <div className="data__row"><label>Player</label>
          <input type="text"  onChange={(event) => {setPlayer(event.target.value)}}/></div>
          <div className="data__row"><label>Notes</label>
          <input type="text"  onChange={(event) => {setNotes(event.target.value)}}/></div>
        </div>
      </div>
      <div className="data__container">
      <span className="data__container__title">Personal data</span>
        <div className="data__column--single">
          <div className="data__row"><label>Metatype</label>
          <input type="text"  onChange={(event) => {setMetatype(event.target.value)}}/></div>
          <div className="data__row"><label>Ethnicity</label>
          <input type="text"  onChange={(event) => {setEthnicity(event.target.value)}}/></div>
          <div className="data__row"><label>Age</label>
          <input type="number"  onChange={(event) => {setEthnicity(event.target.value)}}/></div>
          <div className="data__row"><label>Sex</label>
          <input type="text"  onChange={(event) => {setSex(event.target.value)}}/></div>
          <div className="data__row"><label>Height</label>
          <input type="text"  onChange={(event) => {setHeight(event.target.value)}}/></div>
          <div className="data__row"><label>Weight</label>
          <input type="text"  onChange={(event) => {setWeight(event.target.value)}}/></div>
          <div className="data__row"><label>Reputation</label>
          <input type="text"  onChange={(event) => {setReputation(event.target.value)}}/></div>
          <div className="data__row"><label>Heat</label>
          <input type="text"  onChange={(event) => {setHeat(event.target.value)}}/></div>
          <div className="data__row"><label>Karma</label>
          <input type="number"  onChange={(event) => {setKarma(event.target.value)}}/></div>
          <div className="data__row"><label>Total Karma</label>
          <input type="number"  onChange={(event) => {setTotalKarma(event.target.value)}}/></div>
          </div>
        </div>
        <div className="data__container">
          <span className="data__container__title">Attributes</span>
          <div className="data__multi-col">
            <div className="data__column">
              <div className="data__row"><label>Body</label>
              <input type="number"  onChange={(event) => {setBody(event.target.value)}}/></div>
              <div className="data__row"><label>Agility</label>
              <input type="number"  onChange={(event) => {setAgility(event.target.value)}}/></div>
              <div className="data__row"><label>Reaction</label>
              <input type="number"  onChange={(event) => {setReaction(event.target.value)}}/></div>
              <div className="data__row"><label>Strength</label>
              <input type="number"  onChange={(event) => {setStrength(event.target.value)}}/></div>
              <div className="data__row"><label>Willpower</label>
              <input type="number"  onChange={(event) => {setWillpower(event.target.value)}}/></div>
              <div className="data__row"><label>Logic</label>
              <input type="number"  onChange={(event) => {setLogic(event.target.value)}}/></div>
              <div className="data__row"><label>Intuition</label>
              <input type="number"  onChange={(event) => {setIntuition(event.target.value)}}/></div>
              <div className="data__row"><label>Charisma</label>
              <input type="number"  onChange={(event) => {setCharisma(event.target.value)}}/></div>
              <div className="data__row"><label>Edge</label>
              <input type="number"  onChange={(event) => {setEdge(event.target.value)}}/></div>
              <div className="data__row"><label>Edge Points</label>
              <input type="number"  onChange={(event) => {setEdgePoints(event.target.value)}}/></div>
              <div className="data__row"><label>Unarmed</label>
              <input type="text"  onChange={(event) => {setUnarmed(event.target.value)}}/></div>
            </div>
            <div className="data__column">
              <div className="data__row"><label>Essence</label>
              <input type="number"  onChange={(event) => {setEssence(event.target.value)}}/></div>
              <div className="data__row"><label>Magic/Resonance</label>
              <input type="number"  onChange={(event) => {setMagicResonance(event.target.value)}}/></div>
              <div className="data__row"><label>Initiative</label>
              <input type="number"  onChange={(event) => {setInitiative(event.target.value)}}/></div>
              <div className="data__row"><label>Matrix Initiative</label>
              <input type="number"  onChange={(event) => {setMatrixInitiative(event.target.value)}}/></div>
              <div className="data__row"><label>Astral Initiative</label>
              <input type="number" onChange={(event) => {setAstralInitiative(event.target.value)}} /></div>
              <div className="data__row"><label>Composure</label>
              <input type="number"  onChange={(event) => {setComposure(event.target.value)}}/></div>
              <div className="data__row"><label>Judge Intentions</label>
              <input type="number" onChange={(event) => {setJudgeIntentions(event.target.value)}}/></div>
              <div className="data__row"><label>Memory</label>
              <input type="number" onChange={(event) => {setMemory(event.target.value)}}/></div>
              <div className="data__row"><label>Lift/Carry</label>
              <input type="number" onChange={(event) => {setLiftCarry(event.target.value)}}/></div>
              <div className="data__row"><label>Movement</label>
              <input type="number" onChange={(event) => {setMovement(event.target.value)}}/></div>
              <div className="data__row"><label>Defense Rating</label>
              <input type="number" onChange={(event) => {setDefenseRating(event.target.value)}}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="save-btn" onClick={displayInfo}>Save</button>
      </div>
    </div>
  );
}

export default App;
