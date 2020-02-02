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
  const [sortType]
  useEffect(() => {
    if (fetchStatus) {
      const fetchTableApi = async () => {
        const res = await fetch(url)
        const data = await (res.json());
        setInfo(data);

        setLoading(false)
      }

      fetchTableApi();

    }


  }, [fetchStatus])

  const onSorted = (sortField) => {
    const sortedArr = OnSort(info, sortField);
    console.log(info === sortedArr)
    setInfo([...sortedArr]);
  }

  return (
    <section className="App">
      {fetchStatus ? !loading ? <InfoTable info={info} onSorted={onSorted}>
      </InfoTable> : <Loader></Loader> :
        <SelectFetch setFetch={setFetch}
          setUrl={setUrl}
          setLoading={setLoading}>
        </SelectFetch>}
    </section>

  );
}

export default App;
