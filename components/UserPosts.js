import { PostsContext } from '../components/PostsContextProvider.js'
import GroupElement from './GroupElement.js'

const UserPosts = () => {

    // consumer to access the local stat5e
    const {
      states: {
        userposts, filter
      }
    } = React.useContext(PostsContext);

    console.log(filter)

if(filter === 'Group(userID)'){
  Object.entries(userposts).forEach(([key, value]) => {
   if(value.userId=== 1){
    console.log(value); 
   }
  });
}
   
// jsx to display the list of user with sort filter
  return html`
  ${(filter === ('Title') || (filter === (''))) && (
    html`
    <div>
      <div className="row">
          <div className="leftcolumn">
          ${userposts && userposts.map((post) => (
            html`
            <div  key=${post.id} className="card">
              <h2>TITLE: ${post.title}</h2>
              <h5>UserID:${post.userId}</h5>
              <p>${post.body}</p>
              <a href='/audiopage' className='App-link'>
              <button className="custom-btn btn-1" > ▶️ Open Music Tracks </button>
              </a>
            </div>`
            ))}
          </div>
        </div>
    </div>`
  )}
  
  ${filter === 'Group(userID)' &&(
    html`
    <${GroupElement} />`
      )}
  `
}
export default UserPosts