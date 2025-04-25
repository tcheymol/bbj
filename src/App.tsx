import React from "react";
import logo from "./logo.png";
import "./App.css";
import { TheGodlyGardener } from "./Domain/Mowing/TheGodlyGardener";
import Grid from "./Components/Grid";
import { Land } from "./Domain/Mowing/Land";
import { Mower } from "./Domain/Mowing/Mower";
import { FileLoader } from "./Domain/FileHandling/FileLoader";
import { LawnFileParser } from "./Domain/FileHandling/LawnFileParser";

export const LandContext = React.createContext<{
  land: Land | null;
  setLand: (land: Land) => void;
}>({ land: null, setLand: () => {} });
export const MowersContext = React.createContext<{
  mowers: Array<Mower>;
  setMowers: (mowers: Array<Mower>) => void;
}>({ mowers: [], setMowers: () => {} });

function App() {
  const [mowers, setMowers] = React.useState<Mower[]>([]);
  const [land, setLand] = React.useState<Land | null>(null);

  const handleLand = () => {
    const gardener = new TheGodlyGardener(mowers);
    mowers.forEach((mower) => mower.mow());
    setMowers([...gardener.mowers]);
    setLand(gardener.getLand());
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileLoader = new FileLoader(new LawnFileParser());
    await fileLoader.read(e.target.files[0]);

    const gardener = new TheGodlyGardener(fileLoader.parse());
    setLand(gardener.getLand());
    setMowers([...gardener.mowers]);
  };

  return (
    <LandContext.Provider value={{ land, setLand }}>
      <MowersContext.Provider value={{ mowers, setMowers }}>
        <div className="App">
          <header className="App-header">
            <h3>Welcome to the Godly Gardener, start Mowing the land !</h3>
            <img src={logo} className="App-logo" alt="logo" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3 style={{ marginRight: 16 }}>
                Upload your own file here to mow like a boss
              </h3>
              <input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                data-testid="upload-land"
              />
              <div className="mt-4 whitespace-pre-wrap border p-2 rounded bg-gray-100"></div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Mowers :</div>
              <div
                style={{ marginLeft: 16, marginRight: 16 }}
                data-testid="mower-info"
              >
                {mowers.map((mower) => (
                  <div key={mower.getCoordinates()}>
                    {mower.getPosition()}
                    <br />
                    {mower.instructions}
                    <hr />
                  </div>
                ))}
              </div>
              <button
                className="App-button"
                onClick={() => handleLand()}
                data-testid="trigger-mowing"
              >
                Mowwwww :
              </button>
            </div>
            <Grid />
          </header>
        </div>
      </MowersContext.Provider>
    </LandContext.Provider>
  );
}

export default App;
