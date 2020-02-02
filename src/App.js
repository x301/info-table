import React, { useState, useEffect } from 'react';
import './App.css';
import InfoTable from "./components/InfoTable/InfoTable"
import SelectFetch from "./components/SelectFetch/SelectFetch"
import Loader from "./components/Loader/Loader"
import { OnSort } from "./utils/onSort"
import ReactPaginate from 'react-paginate'

const App = function () {
  const pageSize = 50;
  const [fetchStatus, setFetch] = useState(false);
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("id");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0)



  useEffect(() => {
    if (fetchStatus) {
      const fetchTableApi = async () => {
        const res = await fetch(url)
        const data = await (res.json());
        setPageCount(Math.ceil(data.length / pageSize));
        setInfo(OnSort(data, sortField, sort));
        setLoading(false)
      }

      fetchTableApi();

    }


  }, [fetchStatus])

  const onSorted = (field) => {
    const sortType = sort === "asc" ? "desc" : "asc";
    setSort(sortType);
    setSortField(field)
    const sortedArr = OnSort(info, sortField, sortType);
    setInfo(sortedArr);
  }

  //Get current paginate data 
  const indexOfLast = (currentPage + 1) * pageSize;
  const indexOfFirst = indexOfLast - pageSize;
  const displayData = !!(info) ? info.slice(indexOfFirst, indexOfLast) : null;


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)

  }


  return (
    <section className="App">
      {
        fetchStatus ? !loading ? <InfoTable info={displayData} onSorted={onSorted} sort={sort} sortField={sortField}>
        </InfoTable> : <Loader></Loader> :
          <SelectFetch setFetch={setFetch}
            setUrl={setUrl}
            setLoading={setLoading}>
          </SelectFetch>
      }
      {
        info.length > pageSize ? <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        ></ReactPaginate> : null
      }
    </section>

  );
}

export default App;
