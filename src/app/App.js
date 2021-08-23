import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { routes } from "../routes"

function App() {

  


  const _renderRouters = (routes) => {
    return routes.map((route) => <Route 
    key={route.title}
    path={route.path}
    exact={ route.exact }
    render = { (props) => <route.component { ...props }/> }/>
    )
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          { _renderRouters(routes) }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
