import './App.css';
import ListOfGif from './components/ListOfGifs';
import GifDetail from './components/GifDetail';
import { Route, Link } from 'wouter';
function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/luffy">Luffy</Link>
        <Link to="/gif/zoro">Zoro</Link>
        <Link to="/gif/sanji">Sanji</Link>
        <Route 
          path="/gif/:keyword"
          component={ListOfGif}
        />
        <Route 
          path="/detail/:id"
          component={GifDetail}
        />

      </section>
    </div>
  );
}

export default App;
