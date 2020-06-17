import Data from "../data/data.json";

const initialState = {
    comments: Data
}

function appReducer(state = initialState, action) {
   

    switch (action.type) {
        case "ADD_COMMENT":
            let newArrayPost = state.comments.map((post) => {
                
                if(post.id === action.payload.id) {
                    post.comments.unshift(action.payload.comment)
                }
            })
            
            return {
                ...state,
                newArrayPost
            }
            case "DELETE_COMMENT":
                let deletedComment = state.comments.map((post) => {
                    if (post.id === action.payload.id) {
                        let newArray = [...post.comments];
                        const filterComments = newArray.filter(el => el.id !== action.payload.deleteId);
                        return post.comments = filterComments;
                        // return {...post, comments: filterComments}
                    }
                });
                console.log(deletedComment)
                return {...state,
                    deletedComment}
        default:
            return state
    }
}

export default appReducer;