import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    constructor(props){
        super(props);
        this.date = Date().split("G")[0];
       console.log(props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.commentsListData.map((comment) => {
                    return (
                        <div>
                            <time>{this.date}</time>
                            {comment}
                        </div>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'the props that a component has')
    console.log(state)

    return {
        commentsListData: state.comments.map((comment) => {
            return `${comment} `
        })
    }
}

export default connect(
    mapStateToProps
)(CommentList)