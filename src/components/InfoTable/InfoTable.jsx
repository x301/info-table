import React from "react"
import "./infoTable.css"
export default ({ info, onSorted, sort, sortField }) => {
    const sortType = sort === "asc" ? <small>↑</small> : <small>↓</small>
    return (
        <section className="wrapper-table">
            <table className="info-table">
                <thead><tr>
                    <th onClick={onSorted.bind(null, "id")}>id {sortField === "id" ? sortType : null}</th>
                    <th onClick={onSorted.bind(null, "firstName")}>firstName {sortField === "firstName" ? sortType : null}</th>
                    <th onClick={onSorted.bind(null, "lastName")}>lastName {sortField === "lastName" ? sortType : null}</th>
                    <th onClick={onSorted.bind(null, "email")} >email {sortField === "email" ? sortType : null}</th>
                    <th onClick={onSorted.bind(null, "phone")} >phone {sortField === "phone" ? sortType : null}</th>
                </tr>
                </thead>
                <tbody>
                    {info.map(el => (<tr key={el.id + Math.random()}>
                        <td >{el.id}</td>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                    </tr>))}
                </tbody>
            </table>
        </section >
    )
}