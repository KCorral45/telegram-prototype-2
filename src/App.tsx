import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar.tsx";
import Rewards from "./components/Rewards.tsx";
import Balance from "./components/Balance.tsx";
import Character from "./components/Character.tsx";
import Energy from "./components/Energy.tsx";
import BottomNav from "./components/BottomNav.tsx";
import "./App.css"; // Add any custom styles here

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="container">
        <Rewards />
        <Balance />
        <Character />
        <Energy />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
