import './App.css';

const Person = (props) => {
  return (
    <>
     <h1>Name : {props.name}</h1>
     <h1>Last Name : {props.lastName}</h1>
     <h1>Age : {props.age}</h1>
    </>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Person name = 'Shiva' lastName = 'Kumar' age = '18' />
      <br />
      <Person name = 'Vishal' lastName = 'Kumar' age = '17' />
    </div>
  )
}

export default App;
