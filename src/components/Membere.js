import React from 'react'
//on peut importer props et en suite pour l'utiliser nous avons besoin de taper props.attribute
const Membre=({name,familleName})=>{

return(
<h1>je suis <i className='colorNames'>{name?.toUpperCase()}</i> membre de la famille {familleName?.toUpperCase()}</h1>)}
export default Membre