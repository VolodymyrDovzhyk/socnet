import profileposts_css from './ProfilePosts.module.css'

const ProfilePosts = (props) => {
    return (
        <div className={profileposts_css.posts}>
                <h3>{props.title}</h3>
                <h5>{props.text}</h5>
            </div>
    )
}

export default ProfilePosts;