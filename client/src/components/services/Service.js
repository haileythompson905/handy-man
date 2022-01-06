import { useState } from 'react';
import ServiceForm from "./ServiceForm"

const Service = ({ id, type, mins, desc, updateService, deleteService }) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            <h2>{type}</h2>
            <h3>{mins}</h3>
            <h3>{desc}</h3>
            {
                editing ?
                <>
                <ServiceForm
                id={id}
                type={type}
                mins={mins}
                desc={desc}
                updateService={updateService}
                setEdit={setEdit}
                />
            <button onClick ={ () => setEdit(false) }>Cancel</button>
                </>
                :
            <button onClick ={ () => setEdit(true) }>Edit</button>  

        }
            <button onClick ={ () => deleteService(id) }>Delete</button>
        </>

    )
}

export default Service;