export function ImageContainer() {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={"bg-red-500 h-[400px] w-[80%] rounded-xl p-3 overflow-hidden"}
      style={{ background: "#BF8A75" }}
    >
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className={
          "bg-green-800 h-full rounded-md  flex flex-col justify-between"
        }
        style={{ background: "#D0ABA5" }}
      >
        <div className={"flex items-center gap-2 m-3"}>
          <div
            data-aos="fade-down"
            data-aos-delay="1000"
            className={"h-3 w-3 bg-[#FF5F57] rounded-full"}
          ></div>
          <div
            data-aos="fade-down"
            data-aos-delay="1200"
            className={"h-3 w-3 bg-[#FEBC2E] rounded-full"}
          ></div>
          <div
            data-aos="fade-down"
            data-aos-delay="1400"
            className={"h-3 w-3 bg-[#28C840] rounded-full"}
          ></div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="700"
          className={"translate-x-2 flex justify-center"}
        >
          <img className={"h-[340px]"} src={"/img.png"} alt={"cax"} />
        </div>
      </div>
    </div>
  );
}
