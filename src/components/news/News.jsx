import news_css from './News.module.css'
import Post from "./posts/Post";


const News = (props) => {
    return (
          <div className={news_css.news}>
              { props.posts.map( (item) => <Post title={item.title} postsText={item.postsText} /> ) }
            </div>)
}

export default News;