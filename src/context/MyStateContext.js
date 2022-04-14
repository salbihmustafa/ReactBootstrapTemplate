import React, { createContext, useState } from "react";

const MyStateContext = createContext();

function MyStateContextProvider(props) {
    const [myState, setMyState] = useState(undefined);

    //Context.Provider is a wrapper for any component needing the context global value
    //all children of UserContextProvider will be able to get the value={}

    return (
        <MyStateContext.Provider
            value={{
                myState,
                setMyState,
            }}
        >
            {props.children}
        </MyStateContext.Provider>
    );
}

export default MyStateContext;

export { MyStateContextProvider };
