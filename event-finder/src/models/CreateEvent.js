import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from "react";


const CreateEvent = ({ modal, toggle, save }) => {

    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "EventName") {
            setEventName(value)
        } else if (name === "EventDate") {
            setEventDate(value)
        } else if (name === "EventTime") {
            setEventTime(value)
        } else {
            setEventDescription(value)
        }

    }

    const handleSave = () => {
        let eventObj = {}
        eventObj["Name"] = eventName
        eventObj["Date"] = eventDate
        eventObj["Time"] = eventTime
        eventObj["Description"] = eventDescription
        save(eventObj)
        }
    

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Event</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Event Name</label>
                        <input type="text" className='form-control' value={eventName} onChange={handleChange} name="EventName" />
                    </div>
                    <div className='form-group'>
                        <label>Event Date</label>
                        <input type='date' className='form-control' value={eventDate} onChange={handleChange} name="EventDate" />
                    </div>
                    <div className='form-group'>
                        <label>Event Time</label>
                        <input type="time" className='form-control' value={eventTime} onChange={handleChange} name="EventTime" />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows={4} className='form-control' value={eventDescription} onChange={handleChange} name="EventDescription"></textarea>
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateEvent;