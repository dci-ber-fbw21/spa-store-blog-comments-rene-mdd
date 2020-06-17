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
                let filterComments;
                let deletedComment = state.comments.map((post) => {
                    console.log(action.payload)
                    if (post.id === action.payload.id) {
                        console.log(post)
                        let newArray = [...post.comments];
                        console.log(newArray)
                        console.log(action.payload)
                        filterComments = newArray.filter(el => el.id !== action.payload.deleteId);
                        console.log(filterComments)
                        post.comments = filterComments
                       
                    }
                   
                })
                    
                console.log(filterComments)
                console.log(deletedComment)
                return {...state,
                    deletedComment}
        default:
            return state
    }
}

export default appReducer;