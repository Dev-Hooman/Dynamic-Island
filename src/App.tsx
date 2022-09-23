import "./styles.css";
import { DynamicIsland } from "./components/DynamicIsland/index";
export default function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DynamicIsland />
      </div>
    </div>
  );
}
