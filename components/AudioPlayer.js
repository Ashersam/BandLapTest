
export default function AudioPlayer(){
    const context = new AudioContext();
    let source;
    function audioPlay(url) {
        fetch(url)
             .then(response => response.arrayBuffer())
             .then(arrayBuffer => context.decodeAudioData(arrayBuffer)
             ).then(audioBuffer => (
                 audioBuffer
             )).then((audioBuffer) => {
                    source = context.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(context.destination);
                    source.start();
             })
    }
    function stopPlaying(){
        if(context.state === 'running')
        source.stop(0);
    }

   

    return(
        html`
        <div className="card">
        <h3>Track1</h3>
        <button id="start" onClick={${() => audioPlay('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3')}>
        Play ▶️
        </button>
        <button id="start" onClick={${() => stopPlaying()}>Stop ⏹️
        </button>
        <h3>Track2</h3>
        <button id="start" onClick={${() => audioPlay('https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/First_To_Last.mp3')}>
        Play ▶️
        </button>
        <button id="start" onClick={${() => stopPlaying()}>Stop ⏹️
        </button>
        </div>`
    )
}