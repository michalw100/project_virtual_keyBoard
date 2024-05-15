import React from 'react'

const RadioBtns = ({kind,arr,globalChange}) => {
  return (
    <div className='radioBtn'>
        <br></br>
        {arr.map((change) => (
            <label key={change}>
              <input
                name={`${kind}Btn`}  
                type="radio"
                value={change}
                onChange={() => globalChange(kind, change)}
              />
              {change}
            </label>
          ))}
    </div>
  )
}

export default RadioBtns