import { Container } from "./components/Container.tsx";

function App() {
  return (
    <div className={"h-full w-full relative"}>
      <div className={"max-w-md mx-auto h-[100dvh] z-40  relative"}>
        <div className={"py-10 flex items-center justify-center h-full "}>
          <Container>
            <div className={"flex flex-col items-center justify-center gap-10"}>
              <h1
                className={"font-1 w-full  text-4xl text-center text-amber-600"}
              >
                Happy Graduation
              </h1>

              <img
                className={"w-[80%]  rounded-md"}
                src={"/cax.png"}
                alt={"cax"}
              />
              <div className={"font-bold text-xl text-center"}>
                Ns. Tessalonika M. Laluraga S.Kep
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div
        className={
          "h-96 w-96 bg-primary-1/30 rounded-full absolute top-[-20%] left-[-30%] z-10"
        }
      />
      <div
        className={
          "h-56 w-56 bg-primary-1/20 rounded-full absolute bottom-[3%] right-[-20%] z-10"
        }
      />
    </div>
  );
}

export default App;
