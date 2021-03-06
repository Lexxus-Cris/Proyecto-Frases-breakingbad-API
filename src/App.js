import { useState, useEffect } from 'react';

import Frase from './components/Frase';

import { Button, Container } from "./styles";

function App() {

  const API = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
  const [phrase, setPhrase] = useState({});

    const consultarApi = async () => {
      try {
        const respose = await fetch(API);
        const data = await respose.json()
        setPhrase(data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    //Cargar ina frase
    useEffect(() => {
      consultarApi()
    }, [])
    
  return(
    <Container>
      <Frase
        frase={phrase}
      />
      <Button
        onClick={consultarApi}
      >Obtener frase</Button>
    </Container>
  );
}

export default App;
