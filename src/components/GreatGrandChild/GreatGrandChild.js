import {useContext} from "react";
import MyStateContext from "../../context/MyStateContext";
import {Button, Card} from "react-bootstrap";

const GreatGrandChild = () => {
    const {myState, setMyState} = useContext(MyStateContext);

    return (
        <Card className="text-center" style={{width: '20rem', margin: '0 auto'}}>
            <Card.Body>
                <Card.Title>Great Grand Child State</Card.Title>
                <Button variant="primary" onClick={() => setMyState(!myState)}>Toggle State</Button>
                <Card.Text>Great Grand Child State: {myState.toString()}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GreatGrandChild;