import "./App.css";
import Mainpage from "./pages/Body/Mainpage/Mainpage";
import Header from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <section className="section-profile-container">
          <Mainpage />
        </section>
      </main>
    </div>
  );
}

export default App;
