import { React } from 'https://unpkg.com/es-react@16.8.30/index.js';
  
export const PostsContext = React.createContext({});

export default function PostsContextProvider({ children }) {
  const [userposts, setUserposts] = React.useState();
  const [filter, setFilter] = React.useState("")

  const createEmployee = async () => {
    const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(respose.ok){
      const posts = await respose.json()
      setUserposts(posts)
      localStorage.setItem("defaultPost", JSON.stringify(posts) )
    }
  };

  const compare = (propName) => {
    return function(a,b) {
        if (a[propName] < b[propName])
            return -1;
        if (a[propName] > b[propName])
            return 1;
        return 0;
    };
  }

  const SortPosts = (posts) => {
    const sortedarray =  posts?.sort(compare("title"));
    console.log(posts)
      setUserposts(sortedarray)
  }

  const groupPostsbyUserID = (arrayGroupbyvlaue, userID) => {
    return arrayGroupbyvlaue.reduce((result, currentValue) => {
      (result[currentValue[userID]] = result[currentValue[userID]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };
  
  React.useEffect(() => {
    createEmployee()
  },[])

  const value = {
    states: {
      userposts,
      filter
    },
    actions: {
      setUserposts,
      setFilter,
      SortPosts,
      groupPostsbyUserID
    },
  };

  return (
      html`
    <${PostsContext.Provider} value=${ value }>
      ${children}
    </${PostsContext.Provider}>`
  );
}