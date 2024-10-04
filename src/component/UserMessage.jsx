import React from "react";
import "./../App.css";
import DeleteIcon from '@mui/icons-material/Delete';  
function UserMessage(props) {
    return (
        <div key={props.key} className="user-message-box">
            <p className="user-message">{props.usertext}</p>
            <button className="buttonDelete" onClick={props.del}>
                <DeleteIcon className="deleteIcon" />
            </button>
        </div>
    );
}

export default UserMessage;
