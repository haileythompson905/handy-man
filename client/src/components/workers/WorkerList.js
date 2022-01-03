import { Link } from 'react-router-dom';
import { useState } from 'react;'
import Worker from './Worker';


const WorkerList = ({ workers, updateWorker, deleteWorker }) => {
  const [ editing, setEdit ] = useState(false)
  return (
    <>
      { workers.map( w => 
        <>
        <Worker 
        {...w} 
        key={w.id} 
        updateWorker={updateWorker}
        deleteWorker={deleteWorker} 
        />
          <Link to={`/workers/${w.id}`}>Show</Link>
          <br />
        </>
      )}
    </>
  )
}

export default WorkerList;