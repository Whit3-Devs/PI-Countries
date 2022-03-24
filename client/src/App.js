import "./App.css";
import { Route } from "react-router-dom";
import InitialLanding from "./views/InitialLanding/InitialLanding";
import Countrys from "./views/Countrys/Countrys";
import CreateCountry from "./views/CreateCountry/CreateCountry";
import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import CountryDetail from "./views/CountryDetail/CountryDetail";


function App() {
  return (
    <>
      <Route path="/countries" component={Navbar} />
      <Route exact path="/countries" component={Filters} />
      <Route exact path="/countries" component={Countrys} />
      <Route exact path="/countries/countrydetail/:id" component={CountryDetail} />
      <Route exact path="/countries/create" component={CreateCountry} />
      <Route exact path="/" component={InitialLanding} />
    </>
  );
}

export default App;
