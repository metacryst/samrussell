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
                  window.open("https://softwarecpr.com/", "_blank")
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
									coming soon. A new Text Editor. 
								</div>
							</div>
						);
					}}
				/>
        
        
        <Route
					path='/whowillsurvive'
					exact={true}
					render={() => {
						return (
							<div className="whoWillSurviveWrapper">
                <h2 className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell
                </h2>
                <h2 className="title" onClick={() => {
                  window.open("https://www.amazon.com/Who-Will-Survive-America-Capitalism/dp/1541389964", "_blank")
                }}> 
                  WHO WILL SURVIVE IN AMERICA
                </h2>
								<div className="whoWillSurviveInfo">
                © December 2017 - a book about the 1970s Marxist theory of Late Capitalism, and why parts of the theory arose 50 years later. 
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
                
                <h1 className="five" onClick={() => {
                  history.push('/parchment');
                }}>
                  ~parchment
                </h1>
                
                
                <h1 className="six" onClick={() => {
                  history.push('/whowillsurvive');
                }}
                >
                  Who Will Survive in America
                </h1>
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