import React from 'react'

const ChangeStyle = ({textObject}) => {
  return (
     
        <p className='disInline' style={{color:textObject.color, fontFamily:textObject.font, fontSize:textObject.size}}>{textObject.text!=""&& textObject.upper? (textObject.text).toUpperCase():textObject.text.toLowerCase()}</p>
  )
}
export default ChangeStyle