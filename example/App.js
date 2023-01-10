import './App.css';
import ReactDRMPlayer from "../src/"

function App() {
  const onError = (error) => {
    console.error(error);
  }

  return (
    <div className="App">
      <ReactDRMPlayer 
        src={``} 
        fairplayCertificateURI={``}
        fairplayLicenseURI={``}

        widevineLicenseURI={``}
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
