import './App.css';
import React, { useState, useEffect } from 'react';
import { useHistory, Route, Link } from 'react-router-dom';

import LinkedInLogo from "./images/LinkedInLogo.png";
import GithubLogo from "./images/GithubLogo.png";

function App() {
  
  const [background, setBackground] = useState("")
  
  const history = useHistory();
  
  
  return (
    <div className="App">
      
      
      
      
      <Route
					path='/'
					exact={true}
					render={() => {
						return (
							<>      
                
                <h2 className="name"> 
                  Sam Russell 
                </h2>
                <h1 className="email" onClick={() => {
                  window.location.href = 'mailto:sam@samrussell.com';
                }}>
                  sam@samrussell.com
                </h1>
                
                
                <img className="LinkedInLogo" src={LinkedInLogo} onClick={() => {
                  window.open("https://www.linkedin.com/in/sam--russell/", "_blank")
                }}></img>
                
                <img className="GitHubLogo" src={GithubLogo} onClick={() => {
                  window.open("https://www.github.com/metacryst/", "_blank")
                }}></img>
              
                
              
                
                
                
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
                <h1 className="twelve" onClick={() => {
                  history.push('/calculus');
                }}>
                  Multivariable Calculus
                </h1>
                <h1 className="thirteen" onClick={() => {
                  history.push('/linear');
                }}>
                  Linear Algebra
                </h1>
                <h1 className="fourteen" onClick={() => {
                  history.push('/discrete');
                }}>Discrete Structures</h1>
							</>
						);
					}}
				/>
      
      
      
      
      
      
      
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
                <h2 className="physicsTitle"> 
                  //      ____    __
//     / __ \  / /_    __  __  _____  (_) _____  _____
//    / /_/ / / __ \  / / / / / ___/ / / / ___/ / ___/
//   / ____/ / / / / / /_/ / (__  ) / / / /__  (__  )
//  /_/     /_/ /_/  \__, / /____/ /_/  \___/ /____/
//                   /____/
                </h2>
                <div className="physicsInfo">
                  ENERGY
                  <br></br>
                  <br></br>
                  mo t  i   o     n
                  <br></br>
                  <br></br>
                  || forces ||
                  <br></br>
                  <br></br>
                  --momentum-->
                  <br></br>
                  <br></br>
                  fluids~~~
                  <br></br>
                  <br></br>
                  ~waves~
                  <br></br>
                  <br></br>
                  `gases`
								</div>
							</div>
						);
					}}
				/>
        
        <Route
					path='/calculus'
					exact={true}
					render={() => {
						return (
							<div className="wrapper">
                <h2 className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell
                </h2>
                <h2 className="calcTitle"> 
                  <pre>
                  +------+.      +------+       +------+       +------+      .+------+<br></br>
                  |`.    | `.    |\     |\      |      |      /|     /|    .' |    .'|<br></br>
                  |  `+--+---+   | +----+-+     +------+     +-+----+ |   +---+--+'  |<br></br>
                  |   |  |   |   | |    | |     |      |     | |    | |   |   |  |   |<br></br>
                  +---+--+.  |   +-+----+ |     +------+     | +----+-+   |  .+--+---+<br></br>
                  &nbsp;`. |    `.|    \|     \|     |      |     |/     |/    |.'    | .' <br></br>
                  &nbsp;  `+------+     +------+     +------+     +------+     +------+'   <br></br>
                  </pre>
                </h2>
                <div className="integrals">
                  ∫∫∫∫∫∫∫∫∫∫∫∫∫∫
								</div>
                <div className="integrals" id="int2">
                  ∫∫∫∫∫∫∫∫∫∫∫
								</div>
                <div className="integrals" id="int3">
                  ∫∫∫∫∫∫∫∫∫∫∫
								</div>
                <div className="integrals" id="int4">
                  ∫∫∫∫∫∫∫∫∫∫∫
								</div>
                <div className="integrals" id="int5">
                  ∫∫∫∫∫∫∫∫∫∫∫
								</div>
                <div className="integrals" id="int6">
                  ∫∫∫∫∫∫∫∫∫∫∫
								</div>
                <div className="integrals">
                  ∫∫∫∫∫∫∫
								</div>
                <div className="lineIntegrals">
                  ∮∮∮∮∮∮∮∮∮∮∮∮
								</div>
                <div className="info">
                  partial differentiation -- 
                  <br></br>
                  3D graphing
                  <br></br>
                  gradients
                  <br></br>
                  directional derivatives
                  <br></br>
                  vector fields
								</div>
							</div>
						);
					}}
				/>
        
        <Route
					path='/linear'
					exact={true}
					render={() => {
						return (
							<div className="wrapper">
                <h2 className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell
                </h2>
                <h2 className="linearTitle"> 
                <pre>
                  1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  <span className="innerText">M A T R I X</span> 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  <span className="innerText">T R A N S F</span> 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 <span className="innerText">O</span> 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 <span className="innerText">R</span> 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 <span className="innerText">M</span> 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
                  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0<br></br>
    
                  </pre>
                </h2>
							</div>
						);
					}}
				/>
        
        
        <Route
					path='/discrete'
					exact={true}
					render={() => {
						return (
							<div className="wrapper">
                <h2 className="name" onClick={() => {
                  history.push('/')
                }}> 
                  Sam Russell
                </h2>
                <h2 className="discreteTitle">
                <pre>
                You have just arrived on an island inhabited<br></br> 
                by two kinds of people: knights who <br></br>
                always tell the truth, and knaves who always lie.<br></br> 
                Every inhabitant of the island is either <br></br>
                a knight or a knave, and <br></br> 
                everyone knows which inhabitants are knights <br></br> 
                and which are knaves. You are <br></br> 
                a stranger on the island, and you do not know <br></br>
                who is a knight and who is a knave.<br></br>
                
                <br></br>
                It is rumored that there is gold on the island. <br></br>
                You ask an inhabitant if there really is <br></br>
                gold on the island. <br></br>
                He responds, “There is gold on this island if and<br></br>
                only if I am a knight.”<br></br>
                <br></br>
                Is there gold on the island?<br></br>
                </pre>
                </h2>
							</div>
						);
					}}
				/>
        
        
        
        
      
      
      
      
      
      
      
      {/* <div className="line1"></div>
      <div className="line2"></div> */}

    </div>
  );
}

export default App;