import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/data.json";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localState: ""
        }
        console.log(props)
    }

    render() {
        return (
            
            <div className="main">
                <h1>Blog overview</h1>
               
                    {Data.map(({ title, text, comments, id }) => {
                        return (
                            <Link to={{
                                pathname: `/details/${id}`,
                                state: {
                                    detailsItem: Data
                                }
                            }}>
                        <div className="post">
                            <h2>{title}</h2>

                            <span>{comments}</span>
                        </div>
                        </Link>)
                    })}
               
                
            </div>
            
        )
    }
}

export default Home;