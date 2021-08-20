import { Button, Container } from "./styles";

function App() {

  const API = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';


    const consultarApi = async () => {
      try {
        const respose = await fetch(API);
        const data = await respose.json()
        console.log(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
  return(
    <Container>
      <Button
        onClick={consultarApi}
      >Obtener frase</Button>
    </Container>
  );
}

export default App;
