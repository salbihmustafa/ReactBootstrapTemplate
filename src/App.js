import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";

const App = () => {

    return (
        <div className="main-container">
            <div className="content">
                <Card className="text-center" style={{width: '20rem', margin: '0 auto'}}>
                    <Card.Body>
                        <Card.Title>Parent State</Card.Title>
                        <Button variant="primary">Toggle State</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default App;