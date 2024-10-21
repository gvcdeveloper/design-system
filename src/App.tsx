import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <ThemeSwitcher />
        <HelloWorld />
      </div>
    </ThemeProvider>
  );
}

export default App;
