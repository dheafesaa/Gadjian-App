import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const DataCard = () => {
  const pageNumberLimit = 4;
  const [passengersData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(4);
  const [minPageLimit, setMinPageLimit] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=${pageNumberLimit}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [currentPage]);

  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };

  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    response: passengersData,
  };

  return (
    <>
      {!loading ? (
        <Pagination
          {...paginationAttributes}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      ) : (
        <div className="text-center font-light text-gray-700 text-2xl">
          Please wait, loading . .
        </div>
      )}
    </>
  );
};

export default DataCard;
