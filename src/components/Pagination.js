import back from "../assets/img/back.svg";
import next from "../assets/img/next.svg";
import Card from "./Card";

const renderData = (results) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-6 mx-auto max-w-7x1">
          <div className="flex flex-wrap -m-4">
            {results && results.length > 0
              ? results.map((item, index) => {
                  return (
                    <Card item={item} key={index} />
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

const Pagination = (props) => {
  const { currentPage } = props;
  const totalPages = props.response.totalPages - 1;
  const results = props.response.results;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    props.onPrevClick();
  };

  const handleNextClick = () => {
    props.onNextClick();
  };

  return (
    <>
      <div className="mainData">{renderData(results)}</div>
      <div className="flex justify-center m-6 ">
        <button
          className="flex justify-between py-2 px-4 rounded items-center"
          onClick={handlePrevClick}
          disabled={currentPage === pages[0]}
        >
          <img className="pr-2" src={back} alt="..." />
          <p className="text-gray-700 text-lg font-light hover:text-black">
            Previous Page
          </p>
        </button>
        <button
          className="flex justify-between py-2 px-4 rounded items-center"
          onClick={handleNextClick}
          disabled={currentPage === pages[pages.length - 1]}
        >
          <p className="text-gray-700 text-lg font-light hover:text-black">
            Next Page
          </p>
          <img className="pl-2" src={next} alt="..." />
        </button>
      </div>
    </>
  );
};

export default Pagination;
