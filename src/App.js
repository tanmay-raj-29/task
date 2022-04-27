import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Permissions from './components/pages/Permissions';
import Projects from './components/pages/Projects';
import Classroom from './components/pages/Classroom';


function App() {
  return (

    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/permissions/role' />
        </Route>
        <Route path='/permissions/role'>
          <Permissions />
        </Route>
        <Route path='/classroom'>
          <Classroom />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
