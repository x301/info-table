import React from "react"
import "./infoTable.css"
export default ({ info }) => {
    return (
        <section className="wrapper-table">
            <table className="info-table">
                <thead><tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                    {info.map(el => (<tr key={el.id + Math.random()}>
                        <td>{el.id}</td>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                    </tr>))}
                </tbody>
            </table>
        </section>
    )
}