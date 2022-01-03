// import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import axios from 'axios';
import ServiceForm from './ServiceForm';
// import Comments from './components/comments/Comments';

const ServiceShow = ({ id, type, min, desc, deleteService, updateService }) => {
    const [editing, setEdit] = useState(false)
  
    return(
      <>
        <h2>{type}</h2>
        <h4>Minutes to complete: {min}</h4>
        <p>{desc}</p>
        { editing ?
          <>
            <ServiceForm
              id={id}
              type={type}
              desc={desc}
              min={min}
              updateService={updateService}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteService(id)}>Delete</button>
      {/* <Comments serviceId={id} /> */}
      </>
    )
  }
export default ServiceShow;