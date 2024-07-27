import './App.css';
import Button from './Components/Button/Button'
import Card from './Components/Card/Card';
const {getData} = require("./db/db")
const foods = getData();

function App() {
  return( <>
  Olá mundo!
  <Button title={'add'} disable={false} type={'add'} />
  <Button title={'remove'} disable={false} type={'remove'} />
  <Button title={'checkout'} disable={false} type={'checkout'} />
  {foods.map(food =>{
    return <Card food={food} key={food.id} />
  })}
  </>
  );
}

export default App;
