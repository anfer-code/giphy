import './App.css';
import Details from './pages/Details';
import { Route, Link } from 'wouter';
import Home from 'pages/Home';
import SearchResults from 'pages/SearchResults';
import { GifContextProvider } from 'context/GifContext';
import logo from 'assets/logo.png'

function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Link  to="/">
          <figure>
            <img src={logo} alt="Logo Giffy" />
          </figure>
        </Link>
        <GifContextProvider>
          <Route 
            path="/"
            component={Home}
          />
          <Route 
            path="/search/:keyword"
            component={SearchResults}
          />
          <Route 
            path="/detail/:id"
            component={Details}
          />
        </GifContextProvider>
        

      </section>
    </div>
  );
}

export default App;
