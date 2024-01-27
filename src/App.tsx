import { Container } from "./components/Container.tsx";
import { ImageContainer } from "./components/ImageContainer.tsx";
import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
import { Drawer, IconButton } from "@mui/material";
import { PauseCircle, PlayCircleFilled } from "@mui/icons-material";

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  function onClickDrawer() {
    setOpenDrawer(false);
    handlePlayPause();
  }
  return (
    <>
      <div
        className={"absolute top-7 right-7 z-50"}
        style={{ color: "#BF8A75" }}
      >
        <>
          <audio ref={audioRef} src="/song.mp3" />

          <IconButton onClick={handlePlayPause}>
            {isPlaying ? (
              <PauseCircle fontSize={"large"} color={"inherit"} />
            ) : (
              <PlayCircleFilled fontSize={"large"} color={"inherit"} />
            )}
          </IconButton>
        </>
      </div>
      <React.Fragment>
        <Drawer
          transitionDuration={{
            exit: 1000, // Duration for exit animation in milliseconds
          }}
          onClick={onClickDrawer}
          anchor={"bottom"}
          open={openDrawer}
          sx={{ height: "100vh" }}
          onClose={() => setOpenDrawer(false)}
        >
          <div
            className={
              "h-screen bg-background flex items-center justify-center flex-col"
            }
          >
            {/*<h1*/}
            {/*  data-aos="fade-up"*/}
            {/*  className={*/}
            {/*    "font-1 w-full  text-3xl  text-center text-primary-dark"*/}
            {/*  }*/}
            {/*>*/}
            {/*  Happy Graduation Eca Sayang*/}
            {/*</h1>*/}
            <img src={"/onboard.png"} className={"h-[40%]"} alt={"onboard"} />
            <div className={"mt-5"}>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className={
                  "bg-primary-1/30 border-primary-dark border px-4 py-1 rounded-full font-bold text-primary-dark"
                }
              >
                OPEN
              </div>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
      {!openDrawer && (
        <div className={"h-full w-full relative"}>
          <div className={"max-w-md mx-auto h-[100vh] z-40  relative"}>
            <div className={"py-0 flex items-center justify-center h-full "}>
              <Container>
                <div
                  className={"flex flex-col items-center justify-center gap-10"}
                >
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
                      Ns. Tesalonika M. Laluraga S.Kep
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
      )}
    </>
  );
}

export default App;
