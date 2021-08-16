import profileinfo_css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={profileinfo_css.user_profile}>
            <div class={profileinfo_css.avatar}>
                <img src={props.img} alt="" />
                    <h3>{props.name} {props.surname}</h3>
             </div>
        </div>
    )
}

export default ProfileInfo;