import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Collection from './pages/Collections';
import CreateNft from './pages/createNft';
import Layout from './layout';
import YourNft from './pages/yourNft';
import Bid from './pages/bid';
function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/collections' element={<Collection/>}/>
        <Route exact path='/createnft' element={< CreateNft />}/>
        <Route exact path='/yourNft' element={<  YourNft/>}/>
        <Route exact path='/bid/:id' element={< Bid />}/>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
