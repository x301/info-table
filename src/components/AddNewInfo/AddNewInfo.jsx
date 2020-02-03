import React, { useState } from "react"
import "./newInfo.css"

export default ({ addNewInfo }) => {
    const [addInfo, setAddInfo] = useState({ id: null, firstName: "", lastName: "", email: null, phone: null })
    const valChangeHandler = event => {
        console.log(addInfo)
        const target = event.target
        const parrent = target.parentNode.textContent;
        switch (parrent.toLowerCase()) {
            case "id": {
                const copyAddInfo = {
                    ...addInfo,
                    id: target.value
                }
                setAddInfo(copyAddInfo);
                break
            }
            case "firstname": {
                const copyAddInfo = {
                    ...addInfo,
                    firstName: target.value
                }
                setAddInfo(copyAddInfo);
                break
            }
            case "lastname": {
                const copyAddInfo = {
                    ...addInfo,
                    lastName: target.value
                }
                setAddInfo(copyAddInfo);
                break
            }
            case "phone": {
                const copyAddInfo = {
                    ...addInfo,
                    phone: target.value
                }
                setAddInfo(copyAddInfo);
                break
            }
            case "email": {
                const copyAddInfo = {
                    ...addInfo,
                    email: target.value
                }
                setAddInfo(copyAddInfo);
                break
            }
        }

    }

    return (
        <div className="add-info-table">
            <form onSubmit={event => {
                event.preventDefault();
                addNewInfo(addInfo);
                setAddInfo({});

            }}>
                <label >Id<input type="text" onChange={valChangeHandler} required></input></label>
                <label >FirstName<input type="text" onChange={valChangeHandler} required ></input></label>
                <label >LastName<input type="text" onChange={valChangeHandler} required ></input></label>
                <label >Email<input type="text" onChange={valChangeHandler} required ></input></label>
                <label >Phone<input type="text" onChange={valChangeHandler} required ></input></label>
                <button type="submit" className="addInfoBtn" > Добавить в таблицу</button>
            </form>
        </div >


    )
}