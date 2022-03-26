import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './passwordInputField.scss'
import { useSelector, useDispatch } from 'react-redux';
import { updatePassword } from '../../redux/actions';

//- Icons
import { faEye } from '@fortawesome/free-solid-svg-icons'


function PasswordInputField() {
  const [hide, setHide] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const password = useSelector(state => state.password)

  const dispatch = useDispatch()
  
  const hidePassword = () => {
    setHide(!hide)
  }

  const setFocus = (isFocused) => {
    setIsFocused(isFocused)
  }

  const setPassword = (e) => {
    dispatch(updatePassword(e.target.value))
  }

  return (
    <div 
      className="password-input-field-container"
      data-testid='passwordInputField'
    >
      <div className='password-input-field-group'>
        <div className={`password-input-field-outline ${isFocused ? 'show' : 'hide'}`}/>
        <input 
          className={`password-input-field ${hide ? 'hide' : ''}`}
          placeholder='Type a password'
          onChange={(e) => setPassword(e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <a 
          className={`toggle-hide-button  ${password.length > 0 ? 'is-visible' : ''}`}
          onClick={() => hidePassword()}
        >
          <p className='icon-description disable-text-select'>{hide ? 'show' : 'hide'}</p>
          <div className='hide-button-icon-container'>
            <FontAwesomeIcon icon={faEye} />
            <div className={`icon-slash ${!hide ? 'show' : ''}`}>
              <div className='icon-slash-content'/>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PasswordInputField;
