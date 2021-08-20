import React from 'react'

import { PhraseContainer } from './styles';

const Frase = ({frase}) => {
   const { quote, author } = frase;

   return (
      <PhraseContainer>
         <h1>{quote}</h1>
         <p>- {author}</p>
      </PhraseContainer>
   )
}

export default Frase
