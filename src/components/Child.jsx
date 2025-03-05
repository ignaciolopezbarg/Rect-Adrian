import React from 'react'

function Child(props) {
  const {msg, person} = props;
    const texto = 'hola a todos'
   
  return (
    <div>
        <h1>Child es un componente hijo de App.jsx</h1>
        <p> {msg} </p>
        <p> {person.sex} - {person.age} </p>
        <h2>hola</h2>
       {/*otra alternativa si no desestructura es sacar la const props y poner props.msg, props.person.sex, props.person.age  */}
    </div>
  )
}

export default Child;