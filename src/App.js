import './App.css';
import ReactDRMPlayer from "./lib/component/player"

function App() {
  const onError = (error) => {
    console.error(error);
  }

  return (
    <div className="App">
      <ReactDRMPlayer 
        src={`https://video.gumlet.io/5f462c1561cf8a766464ffc4/63bbcd99b03c5ea88606d0cd/main.m3u8`} 
        fairplayCertificateURI={`https://fairplay.gumlet.com/certificate/5f2bdde3e93619b8859d8831`}
        fairplayLicenseURI={`https://fairplay.gumlet.com/licence/5f2bdde3e93619b8859d8831/63bbcd99b03c5ea88606d0cd?expires=1673286311740&token=9c6c12919da400d20be2f6e31ce2a2cab2c76d24`}

        widevineLicenseURI={`https://widevine.gumlet.com/licence/5f2bdde3e93619b8859d8831/63bbcd99b03c5ea88606d0cd?expires=1673257114869&token=973149697111c3f18112bad20499c964f83a90df`}
        onPlayerError={(error) => {onError(error)}}
        onPlaybackError={(error) => {onError(error)}}
        width="640" 
        height="264" 
        controls 
        muted
        preload="none"
        autoPlay={false}
      />
    </div>
  );
}

export default App;
