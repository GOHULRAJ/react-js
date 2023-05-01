//import logo from './logo.svg';
import './App.css';
import React from 'react';

class Mycomponent extends React.Component
{
  render(){
    return(
      <div className="App">
            <h1>Mycomponent! </h1>
      </div>
          )
     
    
  }
}
class MySecondcomponent extends React.Component
{
  render(){
    return(
      <div className="App">
            <MyThirdcomponent></MyThirdcomponent>
            <h1>MySecondcomponent! </h1>
      </div>
          )
     
    
  }
}
class MyThirdcomponent extends React.Component
{
  render(){
    return(
      <div className="App">
            <h1>MyThirdcomponent! </h1>
      </div>
          )
     
    
  }
}

//parent component
function App() {
  return (
    <div className="App">
      <h1>This msg from root component!</h1>
   <Mycomponent></Mycomponent>
   <MySecondcomponent></MySecondcomponent>
   
    </div>
  );
}

export default App;
