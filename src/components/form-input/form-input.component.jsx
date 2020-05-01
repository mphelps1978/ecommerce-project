import React from 'react';

import './form-input.styles.scss'


const FormInput = ({label, signIn, setSignIn, ...otherProps}) => {

  const handleChange = e => {
    setSignIn({
      ...signIn,
      [e.target.name]: e.target.value
    })
    // console.log(signIn)
  }





  return (

    <div className= "group">
      <input
        className = 'form-input'
        onChange = {e => handleChange(e)}
        {...otherProps} />

        {
          label ?
          <label className = {`${otherProps.value ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>
          :null
        }
    </div>


  )
}

export default FormInput