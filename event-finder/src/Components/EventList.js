import React, {useEffect, useState} from 'react'
import CreateEvent from '../models/CreateEvent';
import Card from './Card';

export const EventList = () => {

    const [modal, setModal] = useState(false);

    const[eventList, setEventList] = useState([])


    useEffect(() => {
        let arr =localStorage.getItem("eventList")
        if(arr){
            let obj = JSON.parse(arr)
            setEventList(obj) 
        }
    },[])

    const deleteEvent = (index) => {
        let tempEvent = eventList
        tempEvent.splice(index, 1)
        localStorage.setItem("eventList", JSON.stringify(tempEvent))
        setEventList(tempEvent)
        window.location.reload()
    }

    const updateEventArray = (obj, index) => {
        let tempEvent = eventList
        tempEvent[index] = obj
        localStorage.setItem("eventList", JSON.stringify(tempEvent))
        setEventList(tempEvent)
        window.location.reload()
    }


    const toggle = () => {
        setModal(!modal);
    }

    const saveEvent = (eventObj) => {
        let tempEvent = eventList
        tempEvent.push(eventObj)
        localStorage.setItem("eventList",JSON.stringify(tempEvent))
        setEventList(tempEvent)
        setModal(false)     
    }

    return (
        <>
            <div className='header text-center'>
                <h3>Events</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)} >Create Event</button>
            </div>
            <div className='event-container'>
                {/* {eventList.map((obj) => <li>{obj.Name}</li>)}
                {eventList.map((obj) => <li>{obj.Date}</li>)}
                {eventList.map((obj) => <li>{obj.Time}</li>)}
                {eventList.map((obj) => <li>{obj.Description}</li>)} */}
                {eventList && eventList.map((obj,index)=><Card eventObj = {obj} index={index} deleteEvent={deleteEvent} updateEventArray={updateEventArray}/>)}
            </div>
            <CreateEvent toggle={toggle} modal={modal} save={saveEvent}/>
        </>
    )
}
