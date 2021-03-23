import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

// Components
import Sigup from "./SignUp/Sigup";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Profile from "./Profile/Profile";
import UpdateProfile from './UpdateProfile/UpdateProfile';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Sigup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
