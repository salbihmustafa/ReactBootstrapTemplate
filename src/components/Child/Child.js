import {useContext} from "react";
import MyStateContext from "../../context/MyStateContext";
import {Button, Card} from "react-bootstrap";
import GrandChild from "../GrandChild/GrandChild";

const Child = () => {
    const {myState, setMyState} = useContext(MyStateContext);

    return (
        <>
            <Card className="text-center" style={{width: '20rem', margin: '0 auto'}}>
                <Card.Body>
                    <Card.Title>Child State</Card.Title>
                    <Button variant="primary" onClick={() => setMyState(!myState)}>Toggle State</Button>
                    <Card.Text>Child State: {myState.toString()}</Card.Text>
                </Card.Body>
            </Card>
            <GrandChild />
        </>
    )
}

export default Child;