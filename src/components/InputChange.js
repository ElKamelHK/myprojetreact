import React from 'react'

const InputChange=({changerNom,val})=>

    (
        <input type="text" onChange={changerNom} value={val} />
    )

export default InputChange