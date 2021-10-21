import { PostsContext } from '../../components/PostsContextProvider.js';
import UserPosts from '../../components/UserPosts.js'
import MenuBar from './MenuBar.js'
const styles = css`/routes/home/index.css`

export default function Header (){
  const {
    states: {
      filter
    }
  } = React.useContext(PostsContext);

    return(
     html`
      <div className=${styles}>
        <header className="App-header">
          Blog Posts
        </header>
        <${MenuBar}} />
        <${UserPosts} />
      </div>
    `)
}
