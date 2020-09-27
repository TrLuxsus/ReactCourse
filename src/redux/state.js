import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            newMessageBody: ""
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
