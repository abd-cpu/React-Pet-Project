const ADD_POST = "ADD-POST";
const TYPE_POST = "TYPE-POST";

let initialState = {
    posts: [{ userName: "Ira Membrit",
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
              Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus`, 
              likeCount: "123", 
              commentCount: "13", 
              shareCount: "22", 
              avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g1.b1be77be.jpg" },
    { userName: "Harry Potter", 
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
      Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus`, 
      likeCount: "154", 
      commentCount: "21", 
      shareCount: "23", 
      avatar: "https://iqonic.design/themes/socialv/html/images/user/04.jpg" },
    { userName: "Ronald Wheasley", 
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
      Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus`, 
      likeCount: "134", 
      commentCount: "22", 
      shareCount: "1", 
      avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g2.32d0f5a2.jpg" },
    { userName: "Hermiona Ginger", 
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Morbi nulla dolor, ornare at commodo non, feugiat non nisi. 
      Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus`, 
      likeCount: "111", 
      commentCount: "11", 
      shareCount: "45", 
      avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g3.fec54150.jpg" }],
    friends: [{ name: "Anna Reaxia", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/05.50518705.jpg" },
    { name: "Tara Zona", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/06.82085e4a.jpg" },
    { name: "Polly Tech", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/07.0b2b1e4b.jpg" },
    { name: "Bill Emia", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/05.50518705.jpg" },
    { name: "Moe Fugia", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg" },
    { name: "Hal Jordan", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/05.50518705.jpg" },
    { name: "Terry Cruher", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/10.34632b93.jpg" },
    ],
    newPost: "aa",
}

let profileReducer = (state = initialState, action) => {
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