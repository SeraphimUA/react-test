import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { NotificationContext } from "./NotificationProvider";
import { v4 } from "uuid";

function AddNotify() {
    const [inputVal, setInputVal] = useState("");
    const dispatch = useContext(NotificationContext);

    const handleNewNotification = () => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                type: "SUCCESS",
                message: inputVal
            }
        })
    }

    return (
        <div>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
            <button onClick={handleNewNotification}>Add Notification</button>
        </div>
      );
}

export default AddNotify;
