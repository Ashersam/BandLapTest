
import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30/index.js';
import htm from 'https://unpkg.com/htm@2.1.1/dist/htm.mjs'
import csz from 'https://unpkg.com/csz@0.1.2/index.js'
import PostsContextProvider from './components/PostsContextProvider.js'

window.React = React
window.css = csz
window.html = htm.bind(React.createElement)

const Route = {
  '/': React.lazy(() => import('./routes/home/Header.js')),
  '/audiopage': React.lazy(() => import('./routes/home/audiopage.js')),
  '*': React.lazy(() => import('./routes/notfound/index.js')),
}

ReactDOM.render(
  html`
  <${PostsContextProvider}>
    <${React.Suspense} fallback=${html`<div></div>`}>
      <${Route[location.pathname]} />
    <//>
    </${PostsContextProvider}>
  `,
  document.body
)