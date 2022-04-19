import './App.css';
import Details from './pages/Details';
import { Route, Link } from 'wouter';
import SearchResults from 'pages/SearchResults';
import { GifContextProvider } from 'context/GifContext';
import logo from 'assets/logo.png'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import("./pages/Home"))

function App() {
  
  return (
    <div className="App">
      <Suspense fallback="hola">
        <section className="App-content">
          <Link  to="/">
            <figure>
              <img src={logo} alt="Logo Giffy" />
            </figure>
          </Link>
          <GifContextProvider>
            <Route 
              path="/"
              component={HomePage}
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
      </Suspense>
    </div>
  );
}

export default App;
