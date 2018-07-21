import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search/Search.jsx';
import DetailsPage from './components/DetailsPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const Router = BrowserRouter;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Search}/>
            <Route path='/details' component={DetailsPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));