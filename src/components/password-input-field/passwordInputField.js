import { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './passwordInputField.scss'
import { connect } from 'react-redux';
import { updateIsAPILoading, updatePasswordStrengthDetails } from '../../redux/actions';
import debounce from 'lodash.debounce'

//- Icons
import { faEye } from '@fortawesome/free-solid-svg-icons'


function PasswordInputField(props) {
  const [hide, setHide] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [password, setPassword] = useState('')
  
  const hidePassword = () => {
    setHide(!hide)
  }

  const setFocus = (isFocused) => {
    setIsFocused(isFocused)
  }

  const onChangeHandler = (e) => {
    const value = e.target.value
    setPassword(value)
    if (value.length > 0) {
      getPasswordDetailsHandler(value)
    } else {
      props.updateIsAPILoading(false)
    }
  }

  const getPasswordDetailsHandler = useCallback(debounce(value => {
    getPasswordDetails(value)
  }, 1000), [])

  async function getPasswordDetails (value) {
    props.updateIsAPILoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: value })
    };
    await fetch('https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength', requestOptions)
      .then((serverPromise) => {
        serverPromise.json()
          .then((data) => {
            props.updatePasswordStrengthDetails(data)
          })
          .catch((err) => console.log('ERROR :: ', err))
          props.updateIsAPILoading(false)
      })
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
          onChange={(e) => {onChangeHandler(e);}}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          data-testid='passwordInputFieldInput'
        />
        <a 
          className={`toggle-hide-button  ${password.length > 0 ? 'is-visible' : ''}`}
          onClick={() => hidePassword()}
          data-testid='passwordInputFieldEyeIcon'
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

export default connect(null, {
  updateIsAPILoading,
  updatePasswordStrengthDetails
})(PasswordInputField)
