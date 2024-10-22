// import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col font-popppins">
        <div className="w-full bg-main flex flex-col justify-center text-[white] text-[14pt] font-bold p-2">
          <div className="flex flex-row gap-4 justify-evenly">
            <img src="/public/vite.svg" className="aspect-[1/1] w-[50px] " />
            <button className="self-center font-outline-2 hover:font-outline-hover">
              Dashboard
            </button>
            <button className="self-center font-outline-2 hover:font-outline-hover">
              SDGs Index
            </button>
            <button className="self-center font-outline-2 hover:font-outline-hover">
              Berita dan Acara
            </button>
            <button className="self-center font-outline-2 hover:font-outline-hover">
              Forum Komunitas
            </button>
            <button className="self-center font-outline-2 hover:font-outline-hover">
              Pelaporan
            </button>
            <button className="self-center font-outline-2 hover:font-outline-hover">
              Update Data
            </button>
          </div>
        </div>
        <div className="bg-whitepop flex flex-row w-[100%] h-[100%]">
          <div className="flex flex-col w-[500px] h-[100%] bg-whitepop">
            <div className="w-[100%] p-4 font-poppins bg-[white] shadow ">
              <span className="text-[10pt]">SDG 4</span>
              <br></br>
              <span className="text-[16pt]">Quality Education</span>
            </div>
            <div className="font-poppins text-[16pt] font-bold p-4 border-b-2 border-gray-200">
              Jakarta Pusat
            </div>
          </div>
          <div className="w-[100%] h-[100%] flex flex-col">
            <MapContainer
              center={[-6.236744, 106.865808]}
              zoom={11}
              minZoom={11}
              scrollWheelZoom={true}
              dragging={false}
              className="w-[100%] h-[100%]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              />
            </MapContainer>
            <div className="flex flex-col h-[250px] w-[100%] bg-bg2 justify-center items-center text-center gap-2">
              <div className="font-bold font-poppins text-[16pt]">
                Pilih salah satu point SDGs untuk melihatnya di peta
                <div className="flex flex-row justify-evenly w-[100%] gap-4 drop-shadow-xl">
                  <SDGs color={"#ff0000"} />
                  <SDGs color={"#ff0000"} />
                  <SDGs color={"#ff0000"} />
                  <SDGs color={"#ff0000"} />
                  <SDGs color={"#ff0000"} />
                  <SDGs color={"#ff0000"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SDGs = ({ color, name }) => {
  return (
    <button className="bg-[red] aspect-[1/1] w-[6rem] transition ease-in-out delay-50  hover:scale-110 duration-300 hover:border hover:border-black"></button>
  );
};
export default App;
