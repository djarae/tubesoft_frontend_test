// React
import React, { useState, useEffect } from "react";
import Routes from "./Routes";
// Styles
import "./App.css";



//Functions of the program

async function chronometerStart(){
  const result = await chronometerAsync();
  console.log(result);
}

function chronometerAsync(){
for (let i=0;i<10;i++){
    console.log("Hello"); console.log(i);
    setTimeout(() => {  console.log("World!"); }, 2000);  
}
return 0
}


function App() {
    const [cronometer, setCronometrer] = useState(0);


  function probarApi(){
    console.log("Estamos en react probaremos la api")
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => this.setState({ totalReactPackages: data.total }));
  }
 
  return (

      <div onClick={probarApi}>
           {/* <Routes /> */}
           <h1> APP DE CRONOMETRO</h1>

           <button  onClick={chronometerStart()}>Chronometer start</button>
           {/* <button onClick={probarApi()}>PROBAR API</button> */}
      </div>
  );
}

// export default withAuthenticator(App);
export default App;
