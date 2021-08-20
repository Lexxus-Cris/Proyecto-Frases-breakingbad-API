import React from 'react'

const Frase = ({frase}) => {
   const { quote, author } = frase;

   return (
      <div>
         <h2>{quote}</h2>
         <p>- {author}</p>
      </div>
   )
}

export default Frase
