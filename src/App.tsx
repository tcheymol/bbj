import React from 'react';
import logo from './logo.png';
import './App.css';
import { TheGodlyGardener } from './Domain/Mowing/TheGodlyGardener';
import Grid from './Components/Grid';
import { Land } from './Domain/Mowing/Land';
import { Mower } from './Domain/Mowing/Mower';

export const LandContext = React.createContext<Land>(new Land(0, 0));
export const MowersContext = React.createContext<Array<Mower>>([]);

function App() {
  const gardener = new TheGodlyGardener([
    '55',
    '44 S',
    'LFRRFFLFRFF',
    '22 N',
    'FFRLLRFRLF',
  ]);

  const width = gardener.getLand().xSize;
  const height = gardener.getLand().ySize;
  const initialMowers = gardener.mowers;
  const initialLand = gardener.getLand();
  const [mowers, setMowers] = React.useState<Mower[]>(initialMowers);
  const [land, setLand] = React.useState<Land>(initialLand);

  React.useEffect(() => {
      gardener.handleLand()
      setTimeout(() => {
        setMowers(gardener.mowers);
        setLand(gardener.getLand());
      }, 2000);
  }, []);


  return (
    <LandContext.Provider value={land}>
      <MowersContext.Provider value={mowers}>
      <div className="App">
        <header className="App-header">
          <h3>
            Welcome to the Godly Gardener, start Mowing the land !
          </h3>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            Mowers positions :
            {mowers.map(mower => <div key={mower.getCoordinates()}>{mower.getPosition()}</div>)}
          </div>
          <Grid height={height} width={width} />
        </header>
      </div>
      </MowersContext.Provider>
    </LandContext.Provider>
  );
}

export default App;
