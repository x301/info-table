import React from "react"
import "./infoTable.css"
export default ({ info, onSorted }) => {
    return (
        <section className="wrapper-table">
            <table className="info-table">
                <thead><tr>
                    <th onClick={onSorted.bind(null, "id")}>id</th>
                    <th onClick={onSorted.bind(null, "firstName")}>firstName</th>
                    <th onClick={onSorted.bind(null, "lastName")}>lastName</th>
                    <th onClick={onSorted.bind(null, "email")} >email</th>
                    <th onClick={onSorted.bind(null, "phone")} >phone</th>
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