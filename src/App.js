import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header'
import CadastroPage from './pages/cadastro';
import CursosPage from './pages/cursos';

function App() {
  return (
    <div>
      <Header />
      {/* <CursosPage /> */}
      <Route path="/courses" component={CursosPage}/>
      {/* <CadastroPage /> */}
      <Route path="/cadastro" component={CadastroPage}/>
    </div>
  );
}

export default App;
