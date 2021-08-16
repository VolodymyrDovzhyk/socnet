import posts_css from './Posts.module.css'

const Post = (props) => {
    return (
        <div className={posts_css.itemPost}>
            <div className={posts_css.title}>{props.title}</div>
            <div className={posts_css.postsText}>{props.postsText}
            </div>
        </div>
    )
}

export default Post