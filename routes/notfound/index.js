const style = css`/routes/home/index.css`

export default () => html`
  <div className=${style}>
    <header className="App-header">
      <p>page not found  <code>${location.pathname}</code></p>
      <a href='/' className='App-link'>Go Back Home</a>
    </header>
  </div>
`
