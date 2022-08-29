import React, {useState} from 'react'
import EditEvent from '../models/EditEvent'

const Card = ({ eventObj, index, deleteEvent, updateEventArray}) => {
    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateEvent = (obj) => {
        updateEventArray(obj, index)
    }

    const handleDelete = () => {
        deleteEvent(index)
    }
    return (
        <div class="card-wrapper mr-5">
            <div class="card-top" style={{ "background-color": colors[index%5].primaryColor }}></div>
            <div class="event-holder">
                <span class="card-header" style={{ "background-color": colors[index%5].secondaryColor, "border-radius": "10px" }}>{eventObj.Name}</span>
                <p className='mt-2'>{eventObj.Date}</p>
                <p>{eventObj.Time}</p>
                <p>{eventObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    {/* <i class="far fa-edit mr-3" style={{ "color": colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={updateEvent}></i> */}
                    <i class="fa fa-trash-alt" style={{ "color": colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handleDelete}></i>
                </div >
            </div >
            <EditEvent modal = {modal} toggle = {toggle} updateEvent = {updateEvent} eventObj = {eventObj}/>
        </div >
    )
}
export default Card;
