import { Switch } from "antd";
import { useTheme } from "./themes/use-theme";
import css from "./App.css";

function App() {
  const [darkMode, setDarkMode] = useTheme();

  return (
    <div class="container">
      <div>Theme: {darkMode ? "Dark" : "Light"}</div>
      <Switch checked={darkMode} onChange={setDarkMode} />
    </div>
  );
}

export default App;
