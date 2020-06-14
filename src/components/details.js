import React from "react";
import { connect } from 'react-redux';
import CommentList from "./commentList"
import logo from "../logo192.png"
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailsLocalState: "",
            value: "",
            deleteId: ""
        }
        this.blogId = this.props.location.pathname.split("/")[2];
        this.date = Date().split("G")[0];
        
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

    receiveIdList = (idList) => {
      console.log(idList)
       this.props.deleteComment(idList, this.blogId)
    }

   

    addCommentButton = () => {
      var stateValue = this.state.value;
        const obj = {name: this.state.value,
        date: this.date,
        id: uuidv4()}
        this.props.addNewComment(obj, this.blogId)
        
    }

    createMarkup = () => {
        return { __html: this.state.detailsLocalState.htmlText };
    }

   
    render() {
       console.log(this.state.deleteId)
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
            <CommentList callBackList={this.receiveIdList} commentId={this.blogId}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewComment: (commentText, blogId) => {
           
            const action = {
                type: "ADD_COMMENT",
                payload: {
                    comment: commentText,
                    id: blogId
                }
            }
            dispatch(action)

        },
        deleteComment: (receiveIdList, blogId) => {
            const action = {
                type: "DELETE_COMMENT",
                payload: {
                    deleteId: receiveIdList,
                    id: blogId
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