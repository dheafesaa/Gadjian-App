import more from "../assets/img/more.svg";

export default function Card({ item }) {
  return (
    <>
      <div className="w-full xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-white px-4 py-2 rounded-t-lg flex justify-between items-center">
          <div className="">
            Personnel ID: &nbsp;
            <span className="text-tosca-100">123456</span>
          </div>
          <img src={more} alt="..." />
        </div>
        <div className="bg-white px-4 py-2 rounded-b-lg mt-1.5 flex md:flex-col items-center md:items-start">
          <img
            className="rounded-full w-28 h-28 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover object-center"
            src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
            alt="Pict Card"
          />
          <div className="flex flex-col pl-4 lg:pl-0 mt-0 lg:mt-6">
            <div className="mb-2">
              <h2 className="text-gray-900 font-medium title-font">Nama</h2>
              <p className="leading-relaxed text-sm">
                {item.name.title}. {item.name.first} {item.name.last}
              </p>
            </div>
            <div className="mb-2">
              <h2 className="text-gray-900 font-medium title-font">
                Telephone
              </h2>
              <p className="leading-relaxed text-sm">{item.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
