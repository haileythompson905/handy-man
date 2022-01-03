import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, type, mins, desc, updateService, setEdit }) => {
    const [service, setService] = useState({ type: '', mins: 0 , desc: ''})

    useEffect( () => {
        if (id) {
            setService({ type, mins, desc })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateService(id, service)
            setEdit(false)
        } else {
        addService(service)
        }
        setService({ type: '', mins: 0, desc: ''})
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Type:</label>
            <input
                name='type'
                value={service.name}
                onChange={(e) => setService({ ...service, type: e.target.value})}
                required 
                />
             <label>Minutes Taken:</label>
             <input
                name='mins'
                value={service.mins}
                onChange={(e) => setService({ ...service, mins: e.target.value})}
                required 
                type="number"
                />
             <label>Desc:</label>
             <textarea
                name='desc'
                value={service.desc}
                onChange={(e) => setService({ ...service, desc: e.target.value})}
                required
            ></textarea>
            <button type="submit">Submit</button>
         </form>
        </>
    )
}


export default ServiceForm;