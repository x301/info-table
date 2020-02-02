import React, { useState, useEffect } from 'react';
import './App.css';
import InfoTable from "./components/InfoTable/InfoTable"
import SelectFetch from "./components/SelectFetch/SelectFetch"
import Loader from "./components/Loader/Loader"
import { OnSort } from "./utils/onSort"

const App = function () {

  const [fetchStatus, setFetch] = useState(false);
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [sortField, setSortField] = useState("id");
  useEffect(() => {
    if (fetchStatus) {
      const fetchTableApi = async () => {
        const res = await fetch(url)
        const data = await (res.json());
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

  return (
    <section className="App">
      {fetchStatus ? !loading ? <InfoTable info={info} onSorted={onSorted} sort={sort} sortField={sortField}>
      </InfoTable> : <Loader></Loader> :
        <SelectFetch setFetch={setFetch}
          setUrl={setUrl}
          setLoading={setLoading}>
        </SelectFetch>}
    </section>

  );
}

export default App;
