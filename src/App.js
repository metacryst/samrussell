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
									softwareCPR, LLC
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
					path='/maga'
					exact={true}
					render={() => {
						return (
							<div className="magaWrapper">
                <h2 id="magaName" className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell
                </h2>
                <h2 className="magaTitle" onClick={() => {
                  window.open("https://www.amazon.com/Make-America-Great-Again-Humanity/dp/1719549389/ref=sr_1_4?dchild=1&keywords=make+america+great+again+sam+russell&qid=1613865944&sr=8-4", "_blank")
                }}> 
                  MAKE AMERICA GREAT AGAIN
                </h2>
                <div className="magaInfo">
                © June 2018 - a book about Kanye West's 2018 presidential campaign 
								</div>
							</div>
						);
					}}
				/>
        
        <Route
					path='/physics'
					exact={true}
					render={() => {
						return (
							<div className="wrapper">
                <h2 className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell
                </h2>
                <h2 className="physicsTitle" onClick={() => {
                  window.open("https://www.amazon.com/Make-America-Great-Again-Humanity/dp/1719549389/ref=sr_1_4?dchild=1&keywords=make+america+great+again+sam+russell&qid=1613865944&sr=8-4", "_blank")
                }}> 
                  PHYSICS 201
                </h2>
                <div className="physicsInfo">
                
								</div>
                <img className="physicsSchedule" src="/images/PhysicsSchedule.png"></img>
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
                }}>
                  Who Will Survive in America
                </h1>
                
                <h1 className="seven" onClick={() => {
                  history.push('/maga');
                }}>
                  Make America Great Again
                </h1>
                
                
                <h1 className="eight" onClick={() => {
                  window.open("https://open.spotify.com/track/0zGnnrHUzxR8Y0jalflSHj?si=9045bf70159e40ab", "_blank")
                }}>
                    I saw my angels on a parking garage
                </h1>
                
                <h1 className="nine" onClick={() => {
                  window.open("https://open.spotify.com/track/12S8FcPoIPcS7bbe8OYt4X?si=64191ef1a9924c47", "_blank")
                }}>
                  A Letter
                </h1>
                
                <h1 className="ten" onClick={() => {
                  window.open("https://open.spotify.com/track/3w7XruCEgS7lBY4WZ8msCy?si=73f5ce5ed94e4861", "_blank")
                }}>
                  Zeus
                </h1>
                
                
                <h1 className="eleven" onClick={() => {
                  history.push('/physics');
                }}>
                  Physics I
                </h1>
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