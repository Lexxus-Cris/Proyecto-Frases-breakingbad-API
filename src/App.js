import { Button, Container } from "./styles";

function App() {

  const consultarApi = () => {
    console.log('consultando');
  }
  return (
    <Container>
      <Button
        onClick={consultarApi}
      >Obtener frase</Button>
    </Container>
  );
}

export default App;
