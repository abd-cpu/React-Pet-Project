

let store = {
    _state: {
        profilePage: {
            posts: [{ userName: "Ira Membrit", likeCount: "123", commentCount: "13", shareCount: "22", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g1.b1be77be.jpg" },
            { userName: "Harry Potter", likeCount: "154", commentCount: "21", shareCount: "23", avatar: "https://iqonic.design/themes/socialv/html/images/user/04.jpg" },
            { userName: "Ronald Wheasley", likeCount: "134", commentCount: "22", shareCount: "1", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g2.32d0f5a2.jpg" },
            { userName: "Hermiona Ginger", likeCount: "111", commentCount: "11", shareCount: "45", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g3.fec54150.jpg" }],
            friends: [{ name: "Anna Reaxia", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/05.50518705.jpg"},
            { name: "Tara Zona", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/06.82085e4a.jpg"},
            { name: "Polly Tech", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/07.0b2b1e4b.jpg"},
            { name: "Bill Emia", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/05.50518705.jpg"},
            { name: "Moe Fugia", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"},
            { name: "Hal Jordan", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/05.50518705.jpg"},
            { name: "Terry Cruher", avatar:"https://iqonic.design/themes/socialv/vue/dist/img/10.34632b93.jpg"},
            ],
        },
        messagesPage: {
            dialogs: [{ id: "1", status: "online", userName: "Bob Marlie", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-01.22e5a823.jpg" },
            { id: "2", status: "online", userName: "Jim Trevor", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-09.0309b6a2.jpg" },
            { id: "3", status: "online", userName: "Lin Hue", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-04.ac29a257.jpg" },
            { id: "4", status: "offline", userName: "Xiao Han", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-05.1c0efd4b.jpg" },
            { id: "5", status: "offline", userName: "Chelsea Lee", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-06.e2faac12.jpg" }],
            messages: [{ id: "1", author: true, message: "Hey" , date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"},
            { id: "2", author: false, message: "Hi" , date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/10.34632b93.jpg"},
            { id: "3", author: true, message: "H u doin" , date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"},
            { id: "4", author: false, message: "fine, u" , date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/10.34632b93.jpg"},
            { id: "5", author: true, message: "me too" , date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"},
            { id: "6", author: true, message: "thank u" , date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"},
            ],
            newMessage: "asd",
        },        
    },

    _callSubscriber () {
        console.log();
    },
    getState () {
        return this._state;
    },

/*     setNewMessage (text) {
        this._state.messagesPage.newMessage = text;
        this._callSubscriber(this);
    },
    addMessage () {
        let message = { id: "7", author: true, message: this._state.messagesPage.newMessage, date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"};
        this._state.messagesPage.messages.push(message);
        this._state.messagesPage.newMessage = "";
        this._callSubscriber(this);
    }, */
    setSubscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        switch (action.type) {
            case "ADD-MESSAGE":
                let message = { id: "7", author: true, message: this._state.messagesPage.newMessage, date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"};
                this._state.messagesPage.messages.push(message);
                this._state.messagesPage.newMessage = "";
                this._callSubscriber(this);  
            break;
            case "TYPE-MESSAGE":
                this._state.messagesPage.newMessage = action.newText;
                this._callSubscriber(this); 
            break;               
            default:
            break;              
        }
    }
}


export default store;