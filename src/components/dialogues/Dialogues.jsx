import dialogues_css from './Dialogues.module.css';
import React from 'react';
import { NavLink } from "react-router-dom";

const ItemDialogue = (props) => {
    return (
        <div className={dialogues_css.item_user}>
            <img src="http://themekit.frontendmatter.com/dist/themes/social-1/images/people/110/guy-5.jpg" alt=" " />
            <span>
                <NavLink to={"/messeges/" + props.id}>{props.name}</NavLink>
            </span>
        </div>
    )
}


const ItemMessege = (props) => {
    return (
        <div className={dialogues_css.item_messege}>
            <span>{props.text} </span>
        </div>
    )
}


const Dialogues = (props) => {
    let newPostText = React.createRef();
    let onMsgChange = () => {
            props.updateNewMsgText(newPostText.current.value)
    }
    return (
        <div className={dialogues_css.chat}>
            <div className={dialogues_css.list_users}>
                 {props.data.users.map( item => <ItemDialogue id={item.id} name={item.name} />)}
            </div>
            <div className={dialogues_css.chat_messages}>
                {props.data.messeges.map (item => <ItemMessege text={item.msg} />) }
                </div>
                <div>
      <textarea ref={newPostText} className={dialogues_css.messegeArea} 
                value={props.data.newMsgText} onChange={onMsgChange} /> 
    <input className={dialogues_css.sendButton}  type="button" value="" onClick={props.addMsg} />
            
</div>
            </div>
    )
};

export default Dialogues;