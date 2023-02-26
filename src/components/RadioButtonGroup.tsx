import * as React from "react";
import { useState } from "react"

import RadioButton from "./RadioButton";

import "./RadioButtonGroup.scss"

type RadioButtonGroupProps = {
  name?: string,
  options: string[],
  // checkedButton: string
  
}



const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ name, options }) => {

  const [ selectedButton, setSelectedButton ] = useState("")

  const isSelected = (value:string): boolean => {
    return(
      selectedButton === value
    )

  }

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedButton(e.target.value)
    console.log('click', e.target.value)
  }

  return (
    <div className="radio-button-group">
      {
        options.map((el)=>{
          return (
            <RadioButton name={name} value={el} key={el} checked={isSelected(el)} onChange={handleRadioClick}/>
          )
        })
      }
    </div>
  )
}

export default RadioButtonGroup