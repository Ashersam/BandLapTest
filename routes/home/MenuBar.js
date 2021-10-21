import { PostsContext } from "../../components/PostsContextProvider.js";

export default function Menubar () {

    const [toggleMenu, setToggleMenu] = React.useState(false)
    const {
        states: {
            userposts,
            filter
        },
        actions: {
            setFilter,
            SortPosts,
            setUserposts,
            groupPostsbyUserID
        }
      } = React.useContext(PostsContext);

    function getSorted(e) {
        setToggleMenu(!toggleMenu)
    }

    function selectSort(e) {
        if(filter !=="Title"){
            SortPosts(JSON.parse(localStorage.getItem("defaultPost")))
            setFilter(e.target.innerText)
        } else{
            setFilter("")
            setUserposts(JSON.parse(localStorage.getItem("defaultPost")))
        }
        setToggleMenu(!toggleMenu)
    }

    function groupItem(e){
        if(filter !=="Group(userID)"){
            setFilter(e.target.innerText)
            const groupedPosts = groupPostsbyUserID(userposts, "userId")
            setUserposts(groupedPosts)
            console.log(groupedPosts)
        } else{
            setFilter("")
            setUserposts(JSON.parse(localStorage.getItem("defaultPost")))
        }
        setToggleMenu(!toggleMenu)
    }
      
      // Close the dropdown if the user clicks outside of it
    //   window.onclick = function(event) {
        
    //   }

    return(html`
    <div className="dropdown">
        <button onClick=${(e) => getSorted(e)} className="dropbtn">Sort 🔽</button>
        ${toggleMenu && (html`
        <div id="myDropdown" className="dropdown-content">
        <a href="#home" onClick=${(e) => selectSort(e)}>
            <input type="checkbox"  id="myCheck" checked=${filter==="Title"? true: false}/>
            Title
        </a>
        <a href="#about" onClick=${(e) => groupItem(e)}> 
            <input type="checkbox" id="myCheck" checked=${filter==="Group(userID)"? true: false}/>
            Group(userID)
        </a>
        </div>`
        )}
    </div>`)
}