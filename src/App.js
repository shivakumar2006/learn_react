import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.Name}</h1>
    <h1>Last Name: {props.LastName}</h1>
    <h1>Age: {props.Age}</h1>
    </>
  );
}

const App = () => {
  const name = 'Shiva';
  

  return (
    <div className="App">
     <Person Name = {'Vishal'} LastName = {'Kumar'} Age = {17} />
    <br />
     <Person Name = {'Shiva'} LastName = {'Kumar'} Age = {18} />
    <br />
     <Person Name = {'Priyam'} LastName = {'Tiwari'} Age = {20} />
    </div>
  );
}

export default App;
