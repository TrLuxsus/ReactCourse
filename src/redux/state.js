let rerenderEntireTree = () => {
    console.log("State changed");
}

let state = {
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
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state
