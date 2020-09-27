const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogsData: [
        {id: 1, name: "Gotama"},
        {id: 2, name: "Alesha"},
        {id: 3, name: "Sashko"}
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Who are you?"},
        {id: 3, message: "TT"}
    ],
    newMessageBody: ""
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => (
    {type: SEND_MESSAGE}
)

export const updateNewMessageBodyCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_BODY, newText: text}
)

export default messagesReducer
