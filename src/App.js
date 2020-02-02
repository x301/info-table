import React, { useState, useEffect } from 'react';
import './App.css';
import InfoTable from "./components/InfoTable/InfoTable"
import SelectFetch from "./components/SelectFetch/SelectFetch"
import SearchTable from "./components/Search/Search"
import TableRowInfo from "./components/TableRowInfo/TableRowInfo"
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
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const [activeRow, setActiveRow] = useState(null)


  useEffect(() => {
    if (fetchStatus) {
      const fetchTableApi = async () => {
        const res = await fetch(url)
        const data = await (res.json());
        console.log(data)
        setPageCount(Math.ceil(data.length / pageSize));
        setInfo(OnSort(data, sortField, sort));
        setLoading(false)
      }

      fetchTableApi();

    }


  }, [fetchStatus])

  //set sort method and sort data
  const onSorted = (field) => {
    const sortType = sort === "asc" ? "desc" : "asc";
    setSort(sortType);
    setSortField(field)
    const sortedArr = OnSort(info, sortField, sortType);
    setInfo(sortedArr);
  }




  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  }

  const handlerSearchPage = value => {
    setCurrentPage(0);
    setSearch(value);
  }

  const onRowSelected = row => {
    setActiveRow(row)
  }

  const getFilteredInfo = (value) => {
    if (!search) {
      return info
    } else {
      return info.filter(elem => {
        return elem["firstName"].toLowerCase().includes(search.toLowerCase()) ||
          elem["lastName"].toLowerCase().includes(search.toLowerCase()) ||
          elem["phone"].toLowerCase().includes(search.toLowerCase())
      })
    }
  }

  const filteredInfo = getFilteredInfo();

  //Get current paginate data 
  const indexOfLast = (currentPage + 1) * pageSize;
  const indexOfFirst = indexOfLast - pageSize;
  const displayData = !!(filteredInfo) ? filteredInfo.slice(indexOfFirst, indexOfLast) : null;

  return (
    <section className="App">
      {
        fetchStatus ? !loading ? <>
          <SearchTable onSearch={handlerSearchPage}></SearchTable>
          <InfoTable info={displayData}
            onSorted={onSorted}
            sort={sort}
            sortField={sortField}
            rowSelect={onRowSelected}

          >
          </InfoTable>
          {
            activeRow ? <TableRowInfo activeRow={activeRow}></TableRowInfo> : null
          }
        </>
          : <Loader></Loader> :
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
