import { Container } from "./components/Container.tsx";
import { ImageContainer } from "./components/ImageContainer.tsx";
import { useEffect } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className={"h-full w-full relative"}>
      <div className={"max-w-md mx-auto h-[100dvh] z-40  relative"}>
        <div className={"py-10 flex items-center justify-center h-full "}>
          <Container>
            <div className={"flex flex-col items-center justify-center gap-10"}>
              <h1
                data-aos="fade-up"
                className={
                  "font-1 w-full  text-3xl  text-center text-primary-dark"
                }
              >
                Happy Graduation Sayang
              </h1>

              <ImageContainer />
              <div className={"text-center"}>
                <div
                  data-aos-delay="1000"
                  className={"font-bold text-xl text-center"}
                  data-aos="zoom-in"
                >
                  Ns. Tessalonika M. Laluraga S.Kep
                </div>
                <div data-aos="zoom-out-up" data-aos-delay="1300">
                  wish you all the best in your new chapter. May you have a
                  successful and fulfilling career.
                </div>
                <div
                  data-aos-delay="2600"
                  data-aos="fade-up"
                  className={"text-sm mt-3 text-slate-900/40"}
                >
                  from your bear🧸❤️
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div
        className={
          "h-96 w-96 bg-primary-1/20 rounded-full absolute top-[-20%] left-[-30%] z-10"
        }
      />
      <div
        className={
          "h-56 w-56 bg-primary-1/10 rounded-full absolute bottom-[3%] right-[-20%] z-10"
        }
      />
    </div>
  );
}

export default App;
