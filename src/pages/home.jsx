import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Main Container */}
      <div className="w-full h-screen flex flex-col font-poppins relative scroll-smooth shadow-xl shadow-[black]/10">
        {/* Header */}
        <header className="absolute top-0 w-full z-10">
          <div className="bg-main flex justify-center text-white text-[14pt] p-2 shadow-xl items-center h-[6rem]">
            <div className="flex flex-row gap-4 items-center h-[6rem]">
              <img
                src="./sdg.png"
                className="aspect-[1/1] w-[4.5rem] object-fill bg-white rounded-full"
                alt="SDG Logo"
              />
              <img
                src="./jakarta_satu.png"
                className="aspect-[1/1] w-[4.5rem] object-fill"
                alt="Jakarta Satu Logo"
              />
              <div className="border-r-2 border-[white] h-[80%] w-[2px]"></div>
              <NavLink to="/" className="self-center">
                Home
              </NavLink>
              <NavLink to="/dashboard" className="self-center">
                Dashboard
              </NavLink>
            </div>
          </div>
        </header>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-grad/70 to-black/10 z-1">
          <div className="h-[6rem]"></div>
          <div className="w-[100%] h-[calc(100vh-6rem)] flex flex-col justify-center gap-4">
            <div className="flex flex-row justify-center items-center gap-2">
              <img
                src="./jakarta_satu.png"
                className="aspect-[1/1] w-[300px] object-fill"
                alt="Jakarta Satu Logo"
              />
              <div className="w-[1000px] text-[white] text-[40pt] font-poppins font-bold self-center">
                Sustainable Jakarta Education Dashboard: Monitoring Sustainable
                Development Goals in Jakarta
              </div>
            </div>
            {/* <button className="w-[200px] aspect-[5/2] rounded-xl shadow-xl bg-gradient-to-b from-grad from-10% to-grad1/90 font-popppins text-[20pt] self-center text-[white] transition ease-in-out delay-50  hover:scale-110 duration-300"> */}
            <NavLink
              to="/dashboard"
              className="self-center flex flex-row justify-center items-center"
            >
              <div className="text-center px-[3.4rem] py-[1.2rem] font-semibold shadow-xl bg-grad1 text-black text-[24pt] text-[white] transition ease-in-out delay-50  hover:scale-110 duration-300">
                Masuk
              </div>
            </NavLink>
            {/* </button> */}
          </div>
        </div>

        {/* Background Image */}
        <div className="h-[6rem]"></div>
        <section className="w-full h-[calc(100vh-6rem)] flex justify-center items-center bg-gray-300 relative z-[-1] overflow-hidden">
          <img
            src="./bg.webp"
            className="absolute inset-0 object-cover w-full h-full"
            alt="Background"
          />
        </section>
      </div>
      <div className="w-[100%] flex items-center text-center py-[4rem] px-[13rem] flex-col gap-4 bg-[#F5f5f5] bg-main">
        <div className="">
          <div className="font-poppins font-bold text-[24pt] py-[2rem] self-start">
            <span className="text-black bg-grad1 p-4">Tujuan Dashboard</span>
          </div>
          <div className="font-poppins text-[16pt] text-[white]">
            Dashboard ini memberikan gambaran menyeluruh tentang pencapaian SDGs
            di bidang pendidikan dan faktor-faktor terkait di setiap wilayah,
            yang akan membantu perencanaan strategis pendidikan berkelanjutan di
            Jakarta terutama dalam meningkatkan efisiensi dalam penerapan
            program kerja pemerintahan DI Jakarta terkait pendidikan.
          </div>
        </div>
      </div>
      <div className="w-[100%] flex items-center text-center py-[2rem] px-[13rem] flex-col gap-4 bg-[#F5f5f5]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className="font-poppins font-bold text-[24pt] text-black bg-grad1 p-4">
            Fokus Kami
          </span>
          <div className="flex flex-row gap-2 w-[75%] bg-[white] shadow-xl overflow-hidden">
            <img
              src="./E_WEB_01.png"
              className="aspect-[1/1] h-[12rem] object-fill"
              alt="Jakarta Satu Logo"
            />
            <span className="font-poppins text-[16pt] text-left p-4">
              SDG 1 (No Poverty / Tanpa Kemiskinan): Bertujuan menghapus
              kemiskinan dalam segala bentuknya, dan secara tidak langsung
              mendorong kesetaraan akses pendidikan di wilayah Jakarta.
            </span>
          </div>
          <div className="flex flex-row gap-2 w-[75%] bg-[white] shadow-xl overflow-hidden">
            <img
              src="./E_WEB_03.png"
              className="aspect-[1/1] h-[12rem] object-fill"
              alt="Jakarta Satu Logo"
            />
            <span className="font-poppins text-[16pt] text-left p-4">
              SDG 3 (Good Health and Well-being / Kesehatan yang Baik dan
              Kesejahteraan): Berfokus pada meningkatkan kualitas kesehatan dan
              kesejahteraan bagi seluruh warga, termasuk akses layanan kesehatan
              yang memadai di Jakarta.
            </span>
          </div>
          <div className="flex flex-row gap-2 w-[75%] bg-[white] shadow-xl overflow-hidden">
            <img
              src="./E_WEB_04.png"
              className="aspect-[1/1] h-[12rem] object-fill"
              alt="Jakarta Satu Logo"
            />
            <span className="font-poppins text-[16pt] text-left p-4">
              SDG 4 (Quality Education / Pendidikan Berkualitas): Bertujuan
              untuk memastikan pendidikan berkualitas yang inklusif dan merata
              serta meningkatkan kesempatan belajar sepanjang hayat bagi semua.
              Fokus utama SDG 4 adalah menciptakan sistem pendidikan yang
              berkelanjutan dan berkeadilan di Jakarta.
            </span>
          </div>
          <div className="flex flex-row gap-2 w-[75%] bg-[white] shadow-xl overflow-hidden">
            <img
              src="./E_WEB_08.png"
              className="aspect-[1/1] h-[12rem] object-fill"
              alt="Jakarta Satu Logo"
            />
            <span className="font-poppins text-[16pt] text-left p-4">
              SDG 8 (Decent Work and Economic Growth / Pekerjaan Layak dan
              Pertumbuhan Ekonomi): Mendukung pertumbuhan ekonomi yang inklusif
              dengan menyediakan lapangan pekerjaan yang layak bagi semua,
              termasuk peluang dalam bidang pendidikan.
            </span>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex items-center text-center pb-[4rem] px-[13rem] flex-col gap-4 bg-main">
        <div>
          <div className="font-poppins font-bold text-[24pt] py-[2rem] self-start text-left">
            <span className="text-black bg-grad1 p-4">Berita dan Acara</span>
          </div>
          <div className="flex flex-row gap-4">
            <Card
              judul="Fokus Pendidikan Berkualitas, Pekerjaan, dan Industri Hijau, SDGs Annual Conference Digelar"
              gambar={
                "https://www.bappenas.go.id/berita/fokus-pendidikan-berkualitas-pekerjaan-dan-indus-JfqUk.jpg"
              }
              tanggal={"4 Oktober 2024"}
              penerbit={"Bappenas"}
              url={
                "https://www.bappenas.go.id/berita/fokus-pendidikan-berkualitas-pekerjaan-dan-industri-hijau-sdgs-annual-conference-digelar-JNKmk"
              }
            />
            <Card
              judul="SAA 2024 Angkat Tema Terkait Pendidikan, Pekerjaan, dan Industri Hijau"
              gambar={
                "https://img.antaranews.com/cache/1200x800/2024/05/21/WhatsApp-Image-2024-05-21-at-13.41.01-1.jpeg.webp"
              }
              tanggal={"21 Mei 2024"}
              penerbit={"Antara News"}
              url={
                "https://www.antaranews.com/berita/4115991/saa-2024-angkat-tema-terkait-pendidikan-pekerjaan-dan-industri-hijau"
              }
            />
            <Card
              judul="Pencapaian Kualitas Pendidikan melalui SDGs 4"
              gambar={"./E_WEB_04.png"}
              tanggal={"15 Maret 2024"}
              penerbit={"Lemhannas"}
              url={
                "https://www.lemhannas.go.id/index.php/publikasi/press-release/1251-pencapaian-kualitas-pendidikan-melalui-sdgs-4"
              }
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex items-center text-center text-[white] p-4 flex-col gap-4 bg-darkmain">
        © Tim UGM 2024
      </div>
    </>
  );
}

// Card Component
const Card = ({ judul, penerbit, tanggal, gambar, url }) => (
  <NavLink
    to={url}
    className="flex flex-col w-[350px] bg-white shadow-lg overflow-hidden transition ease-in-out delay-50 hover:scale-[1.05] duration-300"
  >
    <img
      src={gambar}
      className="aspect-[10/7.5] w-[100%] object-cover bg-[#f5f5f5]"
      alt="Card Image"
    />
    <div className="flex flex-col p-4 font-poppins w-[100%] h-full text-left">
      <h2 className="text-[16pt] font-poppins text-break">{judul}</h2>
      <div className="flex flex-col justify-end mt-auto">
        <span className="text-gray-600">{tanggal}</span>
        <span className="text-gray-600">Sumber: {penerbit}</span>
      </div>
    </div>
  </NavLink>
);
