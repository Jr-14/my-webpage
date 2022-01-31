// import './App.css';
import background from "./jay-mantri-TFyi0QOx08c-unsplash.jpg";

function App() {
  return (
    <LandingPage/>
  );
}

const HelloWorld = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

const LandingPage = () => {
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
      backgroundColor: 'rgba(0,0,0,0.1)',
      backgroundSize: "cover",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
      <HelloWorld/>
    </div>
  );
}

export default App;
