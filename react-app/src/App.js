// import './App.css';
import background from "./jay-mantri-unsplash.jpg";
import './style.css';

function App() {
  return (
    <LandingPage/>
  );
}

const Headline = ({headline, subtitle}) => {
  return (
    <>
      <h1>{headline}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}

const LandingPage = () => {
  const headline = "John Requizo";
  const subtitle = "Independent developer with passion for learning new technologies"
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
      <Headline headline={headline} subtitle={subtitle}/>
    </div>
  );
}

export default App;
