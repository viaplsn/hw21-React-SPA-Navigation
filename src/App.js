import { Route, Switch } from 'react-router-dom'; 
import { Navigation } from './components/navigation';
import { appRoutes } from './routes'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>
      <main>
        <Switch>
          {appRoutes.map(route => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*">
            <h1>No page found</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
