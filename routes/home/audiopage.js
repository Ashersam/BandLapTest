import AudioPlayer from '../../components/AudioPlayer.js'
const styles = css`/routes/home/index.css`


const audiopage = () => html`
  <div className=${styles}>
    <header className="App-header">
    <a href='/' className='App-link'>Home</a>
      Play Tracks
    </header>
    <${AudioPlayer} />
  </div>
`
export default audiopage