import React from 'react';
import logo from './logo.png';
import './App.css';
import { TheGodlyGardener } from './Domain/Mowing/TheGodlyGardener';
import Grid from './Components/Grid';
import { Land } from './Domain/Mowing/Land';
import { Mower } from './Domain/Mowing/Mower';
import { FileLoader } from './Domain/FileHandling/FileLoader';
import { LawnFileParser } from './Domain/FileHandling/LawnFileParser';


export const LandContext = React.createContext<Land>(new Land(0, 0));
export const MowersContext = React.createContext<Array<Mower>>([]);

function App() {
  const initialData = ['55', '44 S', 'LFRRFFLFRFF', '22 N', 'FFRLLRFRLF'];
  const gardener = new TheGodlyGardener(initialData);
  const width = gardener.getLand().xSize;
  const height = gardener.getLand().ySize;
  const initialMowers = gardener.mowers;
  const initialLand = gardener.getLand();
  const [mowers, setMowers] = React.useState<Mower[]>(initialMowers);
  const [land, setLand] = React.useState<Land>(initialLand);

  const handleLand = () => {
    gardener.handleLand();
    setTimeout(() => {
      setMowers(gardener.mowers);
      setLand(gardener.getLand());
    }, 3000);
  };

  React.useEffect(() => {
      handleLand();
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileLoader = new FileLoader(new LawnFileParser);
    await fileLoader.read(e.target.files[0]);
    const {mowers, land} = fileLoader.parse();

    setMowers(mowers);
    setLand(land);

    handleLand();
  };


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
            <h3>
              Upload your own file here to mow like a boss
            </h3>
            <input type="file" accept=".txt" onChange={handleFileChange} />
            <div className="mt-4 whitespace-pre-wrap border p-2 rounded bg-gray-100">
            </div>
          </div>
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
