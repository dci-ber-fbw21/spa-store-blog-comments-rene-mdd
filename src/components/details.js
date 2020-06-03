import React from "react";
import { connect } from 'react-redux';
import CommentList from "./commentList"
import logo from "../logo192.png"
import { Link } from "react-router-dom";

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailsLocalState: "",
            value: ""
        }
        this.blogId = this.props.location.pathname.split("/")[2];
        console.log(props)
    }

    componentDidMount() {
        
        const homeStateData = this.props.location.state.detailsItem;
        const found = homeStateData.find(element => element.id === this.blogId);
        this.setState({
            detailsLocalState: found
        })
    }

    commentHandle = (e) => {
        this.setState({value: e.target.value})
    }

    addCommentButton = () => {
        this.props.addNewComment(this.state.value)
        console.log(this.props)
    }

    createMarkup = () => {
        return { __html: this.state.detailsLocalState.htmlText };
    }
    render() {
        console.log(typeof this.state.detailsLocalState.htmlText)
        return (
            <div>
              <header>
                  <Link to="/">
                  <img src={logo}/>
                  </Link>
              </header>
                <h2>{this.state.detailsLocalState.title}</h2>
                <div dangerouslySetInnerHTML={this.createMarkup()} />
                <div className="divComment">
            <span>
                leave a comment
            </span>
            <input onChange={this.commentHandle} value={this.state.commentHandle} />
            <button onClick={this.addCommentButton}>Add comment</button>
                </div>
            <CommentList/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewComment: (commentText, blogId) => {
            console.log(commentText);
            const action = {
                type: "ADD_COMMENT",
                payload: {
                    comment: commentText
                }
            }
            dispatch(action)
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Details)