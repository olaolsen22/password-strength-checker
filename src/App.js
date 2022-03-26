import './assets/style/App.scss'

//- Components
import PasswordInputField from './components/password-input-field/passwordInputField'

function App() {
  return (
    <div className="App" data-testid='app'>
        <div className='container'>
          <h1 className="header-title" data-testid='appHeaderTitle'>Is your password strong enough?</h1>
          <PasswordInputField/>
        </div>
    </div>
  );
}

export default App;
