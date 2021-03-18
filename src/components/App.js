import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Container, } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

// Components
import Sigup from "./SignUp/Sigup";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }
      }>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Sigup} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container >
  );
}

export default App;
