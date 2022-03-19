import DataCard from "components/DataCard";
import add from "../assets/img/add.svg";

export default function PersonnelList() {
  return (
    <>
      <div className="bg-white m-6">
        <div className="py-6 px-8 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-tosca-100 mb-2 lg:mb-0 font-bold text-3xl uppercase">
              Personnel List
            </div>
            <div className="text-gray-700 mb-2 lg:mb-0 text-xl">
              List of all personnels
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-end py-2">
            <div className="flex border-2 rounded mb-2 lg:mb-0">
              <button className="flex items-center justify-center px-3 bg-white">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="#23C7C6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
              <input
                type="text"
                className="px-2 py-2"
                placeholder="Find Personnels"
              />
            </div>
            <div className="flex pl-0 lg:pl-4">
              <button className="flex justify-between bg-tosca-100 hover:bg-blue-700 py-2 px-6 w-full rounded items-center">
                <p className="text-white font-medium uppercase">
                  Add Personnel
                </p>
                <img className="pl-4" src={add} alt="..." />
              </button>
            </div>
          </div>
        </div>
      </div>
      <DataCard />
    </>
  );
}
