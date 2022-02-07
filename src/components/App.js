import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import Contact from './Contact';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Works from './Works';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Section/>
      <Works/>
      <Contact/> */}
      

      <Switch> 
        <Route path="/" exact>
        <Header />
          <Main />
          {/* <Section />
          <Works />
          <Contact /> */}
        </Route>

        <Route path="/section"exact>
        <Header />
          <Section />
        </Route>

        <Route path="/works" exact>
        <Header />
          <Works />
        </Route>

        <Route path="/contact"exact>
        <Header /> 
          <Contact />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
