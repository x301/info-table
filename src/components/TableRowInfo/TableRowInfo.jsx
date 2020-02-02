import React from "react"
import "./table.css"

export default ({ activeRow }) => {
    return (
        <div className="row-info-wrapper">
            <div className="row-info-form">
                <p>Выбран пользователь <b>{`${activeRow.firstName}  ${activeRow.lastName}`}</b></p>
                Описание: <br></br>
                <textarea defaultValue={activeRow.description}></textarea>
            </div>
            <div className="row-info-adress">
                <p>{`Адресс проживания: ${activeRow.address.streetAddress}`}</p>
                <p>{`Город: ${activeRow.address.city}`}</p>
                <p>{`Провинция: ${activeRow.address.state}`}</p>
                <p>{`Индекс: ${activeRow.address.zip}`}</p>
            </div>

        </div>
    )
}