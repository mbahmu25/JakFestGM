import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="w-[100%] flex flex-col font-popppins">
        <div className="w-full bg-main flex flex-col justify-center text-[white] text-[14pt] p-2 shadow-xl items-center">
          <div className="flex flex-row gap-4 ">
            <img
              src="./sdg.png"
              className="aspect-[1/1] w-[4.5rem] object-fill"
            />
            <img
              src="./jakarta_satu.png"
              className="aspect-[1/1] w-[4.5rem] object-fill"
            />
            <div className="border-r border-[white] h-[80%] self-center"></div>
            <NavLink to="/" className="self-center">
              Home
            </NavLink>
            <NavLink to="/dashboard" className="self-center">
              Dashboard
            </NavLink>
          </div>
        </div>
        <div className="bg-[#BDBDBD] w-[100%] h-[100%] flex flex-col justify-center items-center gap-4 drop-shadow-xl">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
const Card = () => (
  <div className="flex flex-row w-[1200px] bg-[white] aspect-[8/2]">
    <div className="aspect-[1/1] h-[100%] bg-[red]"></div>
    <div className="flex flex-col p-4 font-poppins w-[100%]">
      <div className="text-[26pt] font-bold">Deskripsi</div>
      <hr></hr>
      tanggal
    </div>
  </div>
);
