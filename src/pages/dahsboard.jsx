import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data, head, kota, score } from "../data/data";
import "primeicons/primeicons.css";
import admin from "../data/admin.json";
import color from "../data/color.json";
import { NavLink } from "react-router-dom";
import ReactEcharts from "echarts-for-react";
import dataKota from "../data/dataKota.json";
function Dashboard() {
  const [select, setSelect] = useState("");
  const [sdg, setSdg] = useState("sdg4");
  const [detail, setDetail] = useState(-1);

  const Scoring = (data, detail) => {
    var dataArr = Object.values(data["data"]).map(
      (e) => e[Object.keys(kota).indexOf(select)]
    );
    var before = dataArr.slice(-2, -1)[0];
    var after = dataArr.slice(-1)[0];
    console.log(after, before, ((after - before) / before) * 100);
    if (((after - before) / before) * 100 >= 52) {
      return 1;
    } else if (((after - before) / before) * 100 >= 45) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col font-popppins">
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
        <div className="flex flex-row w-[100%] h-[100%] ">
          {/* Sidebar */}
          <div className="flex flex-col w-[500px] h-[100%] bg-whitepop drop-shadow-md">
            <div className="w-[100%] p-4 font-poppins bg-[white] shadow ">
              <span className="text-[10pt]">
                SDG {sdg.toUpperCase().slice(-1)}
              </span>
              <br></br>
              <span className="text-[16pt]">{head[sdg]}</span>
            </div>
            {select != "" && (
              <div className="flex flex-col">
                <div className="p-4 border-b-2 border-gray-200 flex flex-row justify-between">
                  <div className="font-poppins text-[16pt] font-bold">
                    {kota[select]}
                  </div>
                  <button
                    className="font-poppins text-[16pt]"
                    onClick={() => {
                      setSelect("");
                      setDetail(-1);
                    }}
                  >
                    <i className="pi pi-times" style={{ fontSize: "16pt" }}></i>
                  </button>
                </div>
                {/* tabel data */}

                {detail == -1 ? (
                  <div className="font-poppins text-[12pt] border-b-2 border-gray-200 flex flex-col">
                    {data[sdg].map((e, i) => {
                      return (
                        <button
                          key={i}
                          className="flex flex-row hover:bg-[#f0f0f0] p-2"
                          onClick={() => {
                            setDetail(i);
                          }}
                        >
                          {/* <svg
                            focusable="false"
                            fill="#43a047"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M12 4.08A7.92 7.92 0 0 0 4.08 12 7.92 7.92 0 0 0 12 19.92 7.92 7.92 0 0 0 19.92 12 7.92 7.92 0 0 0 12 4.08Z"></path>
                          </svg> */}
                          <Trend c={Scoring(e, i)} />
                          {e.title.slice(6)}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="flex flex-col border-b border-gray-200">
                      <div className="font-poppins text-[12pt] p-2 flex flex-col border-b border-gray-200 text-left">
                        <span className="text-[15pt] ">Deskripsi</span>
                        {data[sdg][detail]["deskripsi"]}
                        <ReactEcharts
                          option={{
                            xAxis: {
                              type: "category",
                              data: Object.keys(data[sdg][detail]["data"]),
                            },
                            yAxis: {
                              type: "value",
                            },
                            series: [
                              // {
                              //   data: Object.values(
                              //     data[sdg][detail]["data"]
                              //   ).map(
                              //     (e) => e[Object.keys(kota).indexOf(select)]
                              //   ),
                              //   type: "bar",
                              // },
                              {
                                data: Object.values(
                                  data[sdg][detail]["data"]
                                ).map(
                                  (e) => e[Object.keys(kota).indexOf(select)]
                                ),
                                type: "line",
                              },
                            ],
                          }}
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                    </div>
                    <div className="font-poppins text-[12pt] p-2 flex flex-col border-b border-gray-200">
                      <span className="text-[15pt] ">Deskripsi</span>
                      {
                        data[sdg][detail]["desc"][
                          Object.keys(kota).indexOf(select)
                        ]
                      }
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Map Conatiner */}
          <div className="w-[100%] h-[100%] flex flex-col ">
            <MapContainer
              center={[-6.236744, 106.865808]}
              zoom={11}
              minZoom={11}
              scrollWheelZoom={true}
              dragging={true}
              className="w-[100%] h-[100%]"
            >
              <TileLayer url="https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
              <GeoJSON
                data={admin}
                key={sdg}
                onEachFeature={(feature, layer) => {
                  console.log(
                    score,
                    dataKota[sdg][feature["properties"]["kode"]]
                  );
                  layer.setStyle({
                    fillColor:
                      score[dataKota[sdg][feature["properties"]["kode"]]],
                  });
                  layer.on("click", () => {
                    setSelect(feature["properties"]["kode"]);
                    setDetail(-1);
                  });
                  layer.on("mouseover", () => {
                    layer.setStyle({
                      color: "#ffff00",
                      weight: 5,
                    });
                  });
                  layer.on("mouseout", () => {
                    layer.setStyle({
                      color: "#000000",
                      weight: 0.3,
                    });
                  });
                }}
                style={{
                  fillOpacity: "100%",
                  strokeOpacity: "0%",
                  weight: 0.3,
                  color: "#000000",
                }}
              />
            </MapContainer>
            <div className="flex flex-col h-[250px] w-[100%] bg-bg2 justify-center items-center text-center gap-2 shadow-t-xl">
              <div className="font-bold font-poppins text-[16pt]">
                Pilih salah satu point SDGs untuk melihatnya di peta
                <div className="flex flex-row justify-evenly w-[100%] gap-4 drop-shadow-xl">
                  <SDGs
                    normal={"./E_WEB_01.png"}
                    inv={"./E_WEB_INVERTED_01.png"}
                    sdg={"sdg1"}
                    setSdg={setSdg}
                    setDetail={setDetail}
                  />
                  <SDGs
                    normal={"./E_WEB_03.png"}
                    inv={"./E_WEB_INVERTED_03.png"}
                    sdg={"sdg3"}
                    setSdg={setSdg}
                    setDetail={setDetail}
                  />
                  <SDGs
                    normal={"./E_WEB_04.png"}
                    inv={"./E_WEB_INVERTED_04.png"}
                    sdg={"sdg4"}
                    setSdg={setSdg}
                    setDetail={setDetail}
                  />
                  <SDGs
                    normal={"./E_WEB_08.png"}
                    inv={"./E_WEB_INVERTED_08.png"}
                    sdg={"sdg8"}
                    setSdg={setSdg}
                    setDetail={setDetail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SDGs = ({ normal, inv, sdg, setSdg, setDetail }) => {
  const [hover, setHover] = useState(true);
  //w-[100%] transition-all duration-600 drop-shadow-md ease-in-out ${drop ? "max-h-auto" : "max-h-[60px]"}

  return (
    <button
      className={`aspect-[1/1] w-[6rem] transition ease-in-out delay-50  hover:scale-110 duration-300 hover:border hover:border-black`}
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
      onClick={() => {
        setSdg(sdg);
        setDetail(-1);
      }}
    >
      {hover ? (
        <img src={normal} className="w-[100%] h-[100%]" />
      ) : (
        <img src={inv} className="w-[100%] h-[100%]" />
      )}
    </button>
  );
};
const Trend = ({ c }) => {
  if (c == 1) {
    return (
      <svg
        focusable="false"
        fill="#43a047"
        aria-hidden="true"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        data-testid="ArrowUpThickIcon"
      >
        <path d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"></path>
      </svg>
    );
  } else if (c == 2) {
    return (
      <>
        <svg
          focusable="false"
          fill="#f57c00"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          data-testid="ArrowRightThickIcon"
        >
          <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z"></path>
        </svg>
      </>
    );
  } else if (c == 3) {
    return (
      <>
        <svg
          focusable="false"
          fill="#d32f2f"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          data-testid="ArrowDownThickIcon"
        >
          <path d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z"></path>
        </svg>
      </>
    );
  }
};
export default Dashboard;
