import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";



function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [red, setRed] = useState('red');

  const Change = () =>{
    if(red === 'red'){
      document.body.style.backgroundColor = 'red';
      setRed({backgroundColor : 'red'});
      setMode('red')
    }
    else{
      document.body.style.backgroundColor = 'red';
    }

  }

  const showAlert = (message, type)=>{
     
    setAlert({
      msg : message,
      type : type,
    })
    
    setTimeout( () => {
      setAlert(null)
    }, 1500)
  }

  const remove = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');

  }

  const toggle = (cls)=>{
      remove();
      console.log(cls);
      document.body.classList.add('bg-' + cls)
  }

  const handleClr = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setColor('light')
      remove();
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled successful", "success")
    }
    else{
      setMode('light')
      setColor('dark')
      remove();
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled successful", "success")
    };
  }
  
  return (
    <>
      <Navbar text="sudeep" mode={mode} toggle={toggle} handleClr={handleClr} color={color} red={red} Change={Change}/>
      <Alert alert={alert}/>
      <div className="container">
      <Form mode={mode}  showAlert={showAlert}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
