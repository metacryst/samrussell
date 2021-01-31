import './App.css';
import { useHistory, Route } from 'react-router-dom';


function App() {
  
  const history = useHistory();

  for(let i = 0; i<14; i++) {
    
  }
  
  return (
    <div className="App">
      
      <h2 className="name"> Sam Russell </h2>
      
      
      <h1 className="zero" onClick={() => {
        history.push('/dsig');
      }}>
        softwareCPR
      </h1>

      <h1 className="one" onClick={() => {
        history.push('/dsig');
      }}>
        ΔΣΦ
      </h1>
      

      <h1 className="two" onClick={() => {
        window.location.href = 'http://harvard--art.herokuapp.com/';
      }}>
        "harvard art"
      </h1>
      
      <h1 className="three" onClick={() => {
        window.location.href = 'http://paperclip--house.herokuapp.com/';
      }}>
        paperclip//
      </h1>
      
      <h1 className="four" onClick={() => {
        window.location.href = 'http://wip--gallery.herokuapp.com/';
      }}>
        [wip]
      </h1>
      
      <h1 className="five">~parchment</h1>
      
      
      <h1 className="six">Who Will Survive in America</h1>
      <h1 className="seven">Make America Great Again</h1>
      
      
      <h1 className="eight">I saw my angels on a parking garage</h1>
      <h1 className="nine">A Letter</h1>
      <h1 className="ten">Zeus</h1>
      
      
      <h1 className="eleven">Physics I</h1>
      <h1 className="twelve">Multivariable Calculus</h1>
      <h1 className="thirteen">Linear Algebra</h1>
      <h1 className="fourteen">Discrete Structures</h1>
      
      
      
      
{/*       
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="timeLine"></div> */}

    </div>
  );
}

export default App;