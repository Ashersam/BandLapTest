import { PostsContext } from '../components/PostsContextProvider.js'

const GroupElement = () => {
    // consumer to access the local stat5e
    const {
      states: {
        userposts, filter
      }
    } = React.useContext(PostsContext);
   
// jsx to display the list of user with sort filter
  return html`
  ${userposts && Object.entries(userposts).map(([key, value]) => (
        html` 
            <div className="collapsible">🤠User:  ${key} 
            <a href='/audiopage' className='App-link'>
            <button className="play-button" > ▶️ Open Music Tracks 
            </button>
            </a></div>
            ${value.map((value) =>  html`
                ${console.log(value)}
                <div class="content">
                <h3>Title: ${value.title}</h3>
                <p>Comment: ${value.body}</p>
                </div>
            `
            )}`
   ))}`
}
export default GroupElement