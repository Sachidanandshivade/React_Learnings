import {createContext} from "react";

const UseContext = createContext({
    loggedInUser: "Default user",
});

export default UseContext;