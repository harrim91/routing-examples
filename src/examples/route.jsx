import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => <h1>Hello React-Router!</h1>;
const AllUsers = () => (
  <div>
    <li>
    Ersel
    </li>
    <li>
    Joe
    </li>
  </div>
);

const UserProfile = () => (
  <div>Ersel - twitter @ErselAker</div>
);

const Users = () => (
  <div>
    Users
    <Route path="/users/all" component={AllUsers} />
    <Route path="/users/1" component={UserProfile} />
  </div>);

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={Users} />
  </div>
);

// try without exact

export default App;
