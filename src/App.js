import './App.css';
import Footer from './Footer';
import MenuSistema from './MenuSistema';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Rotas from './Rotas';

function App() {
  return (


    <div className="App">

      <MenuSistema />
      <ToastContainer />
      <Rotas />
      <Footer />



    </div>

  );
}

export default App;
