let renderEntireTree= () => {
    
}
let state = {
    users: [
        { id: '1', name: 'Andrey T.' },
        { id: '2', name: 'Sasha S.' },
        { id: '3', name: 'Masha F.' },
        { id: '4', name: 'Dmytro D.' }
    ],
    messeges: [
        { msg: "Ololo text messegae" },
        { msg: " text " },
        { msg: "YO  messegae" },
        { msg: " text yytrgdfgb" },
        { msg: "Ya textlo  " }
    ],
    posts: [
        {
            title: "Space can wait let's build future on earth",
            postsText: "Actually, there are very good reasons to stop spending billions of dollars on manned space missions, " +
                "to explore space in ways that are safer and much less costly, and to grant much higher priority to " +
                "other scientific and engineering mega-projects, the oceans in particular."
        },

        {
            title: "test title",
            postsText: "simple text here"
        }
    ],
    newMsgText: '',
}

export const updateNewMsgText = (text) => {
    state.newMsgText = text;
    renderEntireTree(state)
};

export const addMsg = () => {
        state.messeges.push({ msg: state.newMsgText })
        updateNewMsgText('')
        renderEntireTree(state)
}

export default state;
