import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";
import MyStateContext from "./context/MyStateContext";
import Child from "./components/Child/Child";
import {useState} from "react";

const App = () => {
    const [myState, setMyState] = useState(false);

    return (
        <div className="main-container">
            <div className="content">
                <Card className="text-center" style={{width: '20rem', margin: '0 auto'}}>
                    <Card.Body>
                        <Card.Title>Parent State</Card.Title>
                        <Button variant="primary" onClick={() => setMyState(!myState)}>Toggle State</Button>
                        <Card.Text>Parent State: {myState.toString()}</Card.Text>
                    </Card.Body>
                </Card>
                <MyStateContext.Provider value={{myState, setMyState}}>
                    <Child/>
                </MyStateContext.Provider>
            </div>
        </div>
    )
}

export default App;