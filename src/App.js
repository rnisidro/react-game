import React from 'react';
import './main.scss';
import './styles.scss';
import BoardView from './components/BoardView.js';
import FAQ1 from './assets/img/faq1.jpg';
import FAQ2 from './assets/img/faq2.jpg';
import FAQ3 from './assets/img/faq3.jpg';
import MOE1 from './assets/img/moe1.gif';
import MOE2 from './assets/img/moe2.gif';
import MOE3 from './assets/img/moe3.gif';

function App() {
  return (
    <div className="white-bg">
      <h1>2ome 0verly 4gitating 8oard GAME</h1>
      <div className="row">
        <div className="column">
          <BoardView />
        </div>
        <div className="column">
          <div className="text">
            <b>HOW TO PLAY: </b>
            Use your arrow keys to move the tiles. 
            Tiles with the same image merge into one when they touch. 
            Add them up to reach the end!
            <br/> <br/> <br/>
            <b>MEMES OF ENCOURAGEMENT:</b> <br/>
            <img src={MOE1} alt="Shia LaBeouf gif" height={200} width={200} />
            <img src={MOE2} alt="Rendon Labador gif" height={200} width={300} />
            <img src={MOE3} alt="Patrick Star gif" height={200} width={200} />
            <br/><br/>
            <b>Note: </b>
            If your screen goes cray every time you press your keybinds, just do <b>CTRL + '-'</b> (zoom out).
          </div>
        </div>
      </div>
      
      
      
      <b>FAQs: </b>
            <br/>
            <div className="row">
              <div className="column">
                1. What are the tile precedence? <br/>
                <center><img src={FAQ1} alt="Zac Efron Meme" height={250} width={300} /></center>
              </div>
              <div className="column">
                2. How do I know if it's already the end tile? <br/>
                <center><img src={FAQ2} alt="Condescending Wonka Meme" height={250} width={250} /></center>
              </div>
              <div className="column">
                3. Any clues? Tips and tricks? <br/>
                <center><img src={FAQ3} alt="Condescending Wonka Meme" height={250} width={250} /></center>
              </div>
            </div>
    </div>
  );
}

export default App;
