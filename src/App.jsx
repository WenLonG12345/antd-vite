import { Button, Row, Switch } from 'antd'
import { useTheme } from './themes/use-theme'

function App() {

  const [darkMode, setDarkMode] = useTheme();

  return (
    <div>
      <div>Theme: {darkMode? "Dark": "Light"}</div>
      <Switch checked={darkMode} onChange={setDarkMode}/>
    </div>
  )
}

export default App
