export function ImageContainer() {
  return (
    <div
      className={"bg-red-500 h-[400px] w-[80%] rounded-xl p-3"}
      style={{ background: "#BF8A75" }}
    >
      <div
        className={
          "bg-green-800 h-full rounded-md  flex flex-col justify-between"
        }
        style={{ background: "#D0ABA5" }}
      >
        <div className={"flex items-center gap-2 m-3"}>
          <div className={"h-3 w-3 bg-[#FF5F57] rounded-full"}></div>
          <div className={"h-3 w-3 bg-[#FEBC2E] rounded-full"}></div>
          <div className={"h-3 w-3 bg-[#28C840] rounded-full"}></div>
        </div>
        <div className={"translate-x-2 flex justify-center"}>
          <img className={"h-[340px]"} src={"/img.png"} alt={"cax"} />
        </div>
      </div>
    </div>
  );
}
