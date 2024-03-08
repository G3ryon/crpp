import logo from './logo.svg';
import './App.css';

function App() {
  const docs = [ // Remote file
    { uri: require("./crpp.pptx") }, // Local File
  ];
  
  return (
    <div className="App">
      <iframe src="https://onedrive.live.com/embed?resid=C41F082B0864B6EB%2192721&amp;authkey=%21AHORxyWttWPCJ48&amp;em=2&amp;wdAr=1.7777777777777777" width="100% !important" height="100vh !important" frameborder="0">Ceci est un  <a target="_blank" href="https://office.com">Microsoft Office</a> incorporé, avec <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
    </div>
  );
}

export default App;
