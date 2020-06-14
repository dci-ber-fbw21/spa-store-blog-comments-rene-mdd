import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/data.json";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localState: ""
        }
        
    }

    render() {
        return (
            
            <div className="main">
                <h1>Blog overview</h1>
               
                    {Data.map(({ title, text, comments, id }) => {
                        return (
                            
                        <div className="post">
                            <Link to={{
                                pathname: `/details/${id}`,
                                state: {
                                    detailsItem: Data
                                }
                            }}>
                            <h2>{title}</h2>
                            </Link>
                            {comments.length <= 0 ? <span>No comments yet, be the first to post</span> : <span>{`${comments.length} comments`}</span>}
                           
                        </div>
                        )
                    })}
               
                
            </div>
            
        )
    }
}

export default Home;