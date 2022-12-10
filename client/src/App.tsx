import './App.css'
import {Link, Route} from "wouter";
import {Container, Nav} from "react-bootstrap";
import Settings from "../components/settings";
import Navbar from "react-bootstrap/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Link href="/"><Nav.Link>Lernus</Nav.Link></Link>
                        <Link href="/settings"><Nav.Link>Settings</Nav.Link></Link>
                        <Link href="/other"><Nav.Link>Other</Nav.Link></Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Route path="/">Index</Route>
                <Route path="/settings"><Settings/></Route>
                <Route path="/other">Other</Route>
            </Container>
        </div>
    )
}

export default App
