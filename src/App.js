import logo from './logo.svg';
import './App.css';

const number = 55556;
const singers = [
  {name: 'Dr.Mahfuz', job: 'Singer'},
 {name: 'Eva Rahman', job: 'singer'},
 {name: 'Agun', job: 'Sopno'},
 {name: 'shovro', job: 'phathor'}
]
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
}

function App() {
  const nayoks =['Rubel', 'Babaraj', 'kober', ' Jashim', ' salman shah','Riyaz'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={[0]} nayika="moushomi"></Person>
      <Person name={[1]} nayika="cheka"></Person>
      <Person name={[2]} nayika="kopila"></Person> */}
     
      <h5>New component. YAY</h5>
      <h4>Rock mama. React mama</h4>
      <Friend movie="shingam" phone="01777"></Friend>
      <Friend phone="019999"></Friend>
    </div>
  );
}

function Person (props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p></p>
    </div>
  ) 
}
  function Friend (props){
    console.log(props);
    return (
     <div className='container'>
       <h3>Name:{props.movie}</h3>
        <p>phone:{props.phone} </p>
     </div>
  )
}

export default App;
