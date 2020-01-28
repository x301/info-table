import React, { useEffect } from "react"
import InfoTable from "./InfoTable"
import Loader from "../Loader/Loader"

const InfoTableContainer = () => {
    useEffect(() => {
        const fetchTableApi = async () => {
            const res = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            const data = await (res.json())
            console.log(data)
        }
        fetchTableApi();


        ;
    }, [])
    return (
        <InfoTable className="wrapper-table"></InfoTable>
    )
}

export default InfoTableContainer