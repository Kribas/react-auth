import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1>React Authentication Tutorial</h1>
            <section id="navigation">
              <a href="/">Home</a>
              <a href="/free">Free Component</a>
              <a href="/auth">Auth Component</a>
            </section>
          </Col>
        </Row>
        <BrowserRouter>
          <Routes>
            <Route index element={<Account />} />
            <Route exact path="/free" element={<FreeComponent />} />
            <Route path="/auth" element={<ProtectedRoutes />}>
              <Route index element={<AuthComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
