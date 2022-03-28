import './assets/style/App.scss'

//- Components
import PasswordInputField from './components/password-input-field/passwordInputField'
import PasswordStrengthMeter from './components/password-strength-meter/passwordStrengthMeter'

function App() {
  return (
    <div className="App" data-testid='app'>
        <div className='container'>
          <h1 className="header-title" data-testid='appHeaderTitle'>Is your password strong enough?</h1>
          <PasswordInputField/>
          <PasswordStrengthMeter />
        </div>
    </div>
  );
}

export default App;
