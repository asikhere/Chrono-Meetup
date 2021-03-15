import { Container, } from "react-bootstrap";
import Sigup from "./SignUp/Sigup";

function App() {
  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }
      }>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Sigup />
      </div>
    </Container >

  );
}

export default App;
