import './App.css';
import React, { useState, useEffect } from 'react';
import { useHistory, Route, Link } from 'react-router-dom';


function App() {
  
  const [background, setBackground] = useState("")
  
  const history = useHistory();
  
  
  return (
    <div className="App">
      
      <Route
					path='/softwareCPR'
					exact={true}
					render={() => {
						return (
							<div className="softwareCPRWrapper">
                <h2 className="name" className="softwareCPRName" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell 
                </h2>
								<h2 className="softwareCPRInfo" onClick={() => {;
                }}>
									: Software Testing Engineer for
								</h2>
                <h2 className="softwareCPRLink" onClick={() => {
                  window.location.href = 'https://softwarecpr.com/';
                }}>
									softwareCPR
								</h2>
							</div>
						);
					}}
				/>
      
      
      <Route
					path='/dsig'
					exact={true}
					render={() => {
						return (
							<div className="dsigWrapper">
                <h2 className="dsigName" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell 
                </h2>
								<div className="dsigInfo">
									coming soon.
								</div>
							</div>
						);
					}}
				/>
        
        
        <Route
					path='/parchment'
					exact={true}
					render={() => {
						return (
							<div className="wrapper">
                <h2 className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell 
                </h2>
								<div className="parchmentInfo">
									coming soon.
								</div>
							</div>
						);
					}}
				/>
        
      
      <Route
					path='/'
					exact={true}
					render={() => {
						return (
							<>      
                
                <h2 className="name" onClick={() => {
                  history.push('/')
                  setBackground("#f8eadd")
                }}> 
                  Sam Russell 
                </h2>
                
                <h1 className="zero" onClick={() => {
                  history.push('/softwareCPR');
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
                
                <h1 className="five"onClick={() => {
                  history.push('/parchment');
                }}>~parchment</h1>
                
                
                <h1 className="six">Who Will Survive in America</h1>
                <h1 className="seven">Make America Great Again</h1>
                
                
                <h1 className="eight">I saw my angels on a parking garage</h1>
                <h1 className="nine">A Letter</h1>
                <h1 className="ten">Zeus</h1>
                
                
                <h1 className="eleven">Physics I</h1>
                <h1 className="twelve">Multivariable Calculus</h1>
                <h1 className="thirteen">Linear Algebra</h1>
                <h1 className="fourteen">Discrete Structures</h1>
							</>
						);
					}}
				/>
      
      
      
      
      
      
      {/* <div className="line1"></div>
      <div className="line2"></div> */}

    </div>
  );
}

export default App;