import React, {Fragment} from 'react'
//on peut importer props et en suite pour l'utiliser nous avons besoin de taper props.attribute
const Membre=({name,age,children})=>{
 
return(
    <Fragment>
        <h1>je suis 
        {name?.toUpperCase()} :
       {age}
    </h1>
    <h1>{children}</h1>
    </Fragment>
 
    )}
export default Membre