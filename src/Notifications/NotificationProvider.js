import React, { createContext } from "react";
import {v4} from "uuid";
import Notification from "./Notification";

export const NotificationContext = createContext();

const NotificationProvider = (props) => {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter(el => el.id !== action.id);
            default:
                return state;
        }
    }, [{
        id: v4(),
        type: "SUCCESS",
        message: "Hello World"
    }, {
        id: v4(),
        type: "ERROR",
        message: "Goodbye World"
    }]);
    
    return (
        <NotificationContext.Provider value={dispatch}>
            <div className={"notification-wrapper"}>
                {state.map(note => {
                    return <Notification dispatch={dispatch} key={note.id} {...note} />
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;
