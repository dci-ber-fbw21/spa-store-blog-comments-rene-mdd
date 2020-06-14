import React, { Component } from 'react';
// import Comment from "./comment";
import { connect } from 'react-redux';

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        console.log(props)
    }

    receiveId = (deleteId) => {
        return this.props.callBackList(deleteId)
    }

    render() {
        console.log(this.props.commentsListData)

        return (
            <div>
                {this.props.commentsListData.map((comment) => {
                    console.log(comment)
                    if (comment) {
                        return <div>{comment.comments.map((el) => {
                            console.log(el)
                            if (el) {
                                return <div>
                                    <p>{el.name}</p>
                                    <time>{el.date}</time>
                                    <p>id: {el.id}</p>
                                    <p></p>
                                    <button onClick={this.receiveId(el.id)}>Delete</button>
                                </div>
                            } else { return null }
                        })}</div>
                    } else { return null }
                }

                )

                }
            </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'the props that a component has')
    console.log(state)

    return {
        commentsListData: state.comments.map((post) => {

            if (post.id === ownProps.commentId) {
                console.log(post)
                return post
            }
        })
    }

}

export default connect(
    mapStateToProps,
    null
)(CommentList)