import * as React from "react";

import "./RadioButton.scss"


type RadioButtonProps = {
  name: string,
  value: string,
  checked: boolean,
  onChange: (e: React.FormEvent<HTMLInputElement>)=>void
}


const RadioButton: React.FC<RadioButtonProps> = ({name, value, checked, onChange}) => {

  


  return (
    <>
      <label className="radio-wrapper">
        <input 
          type="radio" 
          name={name}
          value={value} 
          checked={checked}
          onChange={onChange}
        /> 
        <span className="radio-checkmark"></span>
        <span className="radio-label">5</span>
      </label>
    </>
  )
}


export default RadioButton