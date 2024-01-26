import { Container } from "./components/Container.tsx";

function App() {
  return (
    <div className={"max-w-md mx-auto h-[100dvh] "}>
      <div className={"py-10 flex items-center justify-center h-full "}>
        <Container>
          <div className={"flex flex-col items-center justify-center gap-10"}>
            <h1
              className={"font-1 w-full  text-4xl text-center text-amber-600"}
            >
              Happy Graduation
            </h1>

            <img
              className={"w-[80%] ring ring-white rounded-md"}
              src={"/cax.png"}
              alt={"cax"}
            />
            <div className={"font-bold text-center"}>
              Ns. Tessalonika M. Laluraga S.Kep
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
