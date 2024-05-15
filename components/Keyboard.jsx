import React from 'react'
import Key from './Key'

const Keyboard = ({item,handleClickKey}) => {
  return (
    <div>
      <div className='language'>
        {item && item.map((char) =>
            (
              <Key
              key={char.id}
              chars={char}
              handleClickKey={handleClickKey}
              /> 
            )
        )}
     </div>
    </div>
  )
}

export default Keyboard