let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 2},
                {id: 2, message: "Hola", likesCount: 5},
                {id: 3, message: "It\'s my first post", likesCount: 3},
            ],
            newPostText: "New post"
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Gotama"},
                {id: 2, name: "Alesha"},
                {id: 3, name: "Sashko"},
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Who are you?"},
                {id: 3, message: "TT"},
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
