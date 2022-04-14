import {useContext} from "react";
import MyStateContext from "../../context/MyStateContext";
import {Button, Card} from "react-bootstrap";
import GreatGrandChild from "../GreatGrandChild/GreatGrandChild";

const GrandChild = () => {
    const {myState, setMyState} = useContext(MyStateContext);

    return (
        <>
            <Card className="text-center" style={{width: '20rem', margin: '0 auto'}}>
                <Card.Body>
                    <Card.Title>Grand Child State</Card.Title>
                    <Button variant="primary" onClick={() => setMyState(!myState)}>Toggle State</Button>
                    <Card.Text>Grand Child State: {myState.toString()}</Card.Text>
                </Card.Body>
            </Card>
            <GreatGrandChild />
        </>
    )
}

export default GrandChild;