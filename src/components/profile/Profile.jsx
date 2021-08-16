import profile_css from './Profile.module.css'
import ProfileInfo from './profile_info/ProfileInfo'
import ProfilePosts from './profile_posts/ProfilePosts'

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo name="George" surname="T." id='3' img='http://themekit.frontendmatter.com/dist/themes/social-1/images/people/110/guy-3.jpg'/>

            <h2> Here list of posts of user</h2>
            <ProfilePosts  text="Here text of post #1 Here text of #1" title="Post's Title #1" />
       
        </div>
    )
}

export default Profile;
