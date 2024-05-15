import React from 'react'

const Key = ({ chars, handleClickKey }) => {
    return (
        <button className='singleChar' onClick={() => handleClickKey(chars)}>
            {chars.char}
        </button>
    )
}

export default Key