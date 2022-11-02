import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import SearchForm from "./components/SearchForm"
import { Routes, Route } from 'react-router-dom'
import SWStarships from "./components/SWStarships";
import SWPeople from "./components/SWPeople";
import SWPlanets from "./components/SWPlanets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <Routes>
          <Route path="/people/:id" element={ <SWPeople /> }/>
          <Route path="/planets/:id" element={ <SWPlanets /> }/>
          <Route path="starships/:id" element={ <SWStarships />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
