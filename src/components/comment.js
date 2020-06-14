import React from "react";

export default function Comment(props) {
console.log(props)
    return (
        <div>
             <div>
                    <p>id: {props.commentProp.id}</p>
                    <time>{props.commentProp.date}</time>
                    <p>{props.commentProp.name}</p>
                    <button onClick={props.callBackComment(props.commentProp.id)}>Delete</button>
                </div>
          
        </div>
    )


}

