import React, { useState } from 'react'
import InputDisplayHeader from '../InputDisplayHeader/InputDisplayHeader'

const NameInput = () => {
    const [firstNameVal, setFirstNameVal] = useState('')

    const updateNameValue = e => {
        setFirstNameVal(e.target.value)
    }

    return (
        <div className='form-input'>
            <InputDisplayHeader firstNameVal={firstNameVal}/>
            <label>First Name:</label>
            <input
                placeholder='Type first name here'
                id='first-name'
                type='text'
                value={firstNameVal}
                onChange={updateNameValue}
            />
        </div>
    )
}
export default NameInput