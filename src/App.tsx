import { Container } from "./components/Container.tsx";

function App() {
  return (
    <div className={"max-w-md mx-auto h-full "}>
      <Container>
        <div className={"flex flex-col items-center justify-center"}>
          <h1 className={"font-1 w-full  text-4xl text-center text-amber-600"}>
            Happy Graduation
          </h1>

          <img className={"w-[100%]"} src={"/cax.jpeg"} alt={"cax"} />
        </div>
      </Container>
    </div>
  );
}

export default App;
