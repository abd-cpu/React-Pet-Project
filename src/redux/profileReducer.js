const ADD_POST = "ADD-POST";
const TYPE_POST = "TYPE-POST";

let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {  
                userName: "Andr Koldar", 
                text: state.newPost,
                likeCount: "0", 
                commentCount: "0", 
                shareCount: "0", 
                avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g2.32d0f5a2.jpg"
            };
            state.posts.unshift(post);
            state.newPost = "";
            return state;
        case TYPE_POST:
            state.newPost = action.newPost;
            return state;
        default:
            return state;
    }    
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let typePostActionCreator = (postText) => ({
    type: TYPE_POST,
    newPost: postText
})

export default profileReducer;