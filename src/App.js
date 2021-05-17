// React
import React, { useState} from "react";
// import Routes from "./Routes";
// Styles
import "./App.css";

let globalEndCronometer = false;
let i = 0;

function App() {
    const [cronometer, setCronometer] = useState(0);

    async function chronometerStart(){
      globalEndCronometer = false;
      while ((globalEndCronometer===false)){
        // console.log("value of endCronometer is ");console.log(globalEndCronometer);
        setCronometer(i + 1);
        // console.log("cronometer value " + cronometer)
        i = i + 1;
        await delay(1);
      }
      return 0 ;
    }

    function chronometerPause(){
      globalEndCronometer = true;
    }

    function chronometerEnd(){
      // console.log("entro al end cronometer ");
      globalEndCronometer = true;
      // console.log(globalEndCronometer);
      i = 0;
      setCronometer(0);
    }
    
    function delay(n){
      return new Promise(function(resolve){
          setTimeout(resolve,n*1000);
      });
    }
  // function probarApi(){
  //   console.log("Estamos en react probaremos la api")
  //   fetch('http://localhost:3000/notes')
  //   .then(response => response.json())
  //   .then(data => this.setState({ totalReactPackages: data.total }));
  // }
 
  return (
      <div>
           {/* <Routes /> */}
           <h1> APP DE CRONOMETRO</h1>
           <h1>{cronometer}</h1>
           <button  onClick={() => chronometerStart()}>START</button>
           <button  onClick={() => chronometerPause()}>PAUSE</button>
           <button  onClick={() => chronometerEnd()}>END</button>
           {/* <button onClick={probarApi()}>PROBAR API</button> */}
      </div>
  );
}

// export default withAuthenticator(App);
export default App;
