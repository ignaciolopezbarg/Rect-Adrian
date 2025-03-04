import React from 'react'

function Child(props) {
    const texto = 'hola a todos'
  return (
    <div>
        <h1>Child es un componente hijo de App.jsx</h1>
        <p> {props.msg} </p>
        <h2>hola</h2>
       
    </div>
  )
}

export default Child;