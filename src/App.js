import "./App.css";
import NavBar from "./components/NavBar";
import TextBar from "./components/TextBar";
import About from "./components/About";
import React,{useState} from "react";


function App() {
  const [mode, setmode] = useState('dark');
  const toggleMode = () =>{
       if(mode === 'dark'){

         setmode('light');
         document.body.style.backgroundColor = 'black';
         document.body.style.color = 'white';
       }
       else{
         setmode('dark');
         document.body.style.backgroundColor = 'grey';
         document.body.style.color = 'black';
       }
  }
  return (
    <>
      <NavBar title="My TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
            <TextBar title="Enter a Text Below "/>
            
      </div>
    </>
  );
}

export default App;
