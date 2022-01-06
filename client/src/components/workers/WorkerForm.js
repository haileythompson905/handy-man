import { useState, useEffect} from 'react';

const WorkerForm = ({ addWorker, id, name, title, number, updateWorker, setEdit }) => {
    const [worker, setWorker] = useState({ name: '', title: '', number: ''})


    useEffect( () => {
        if (id) {
            setWorker( { name, title, number })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateWorker(id, worker)
            setEdit(false)
        } else {
        addWorker(worker)
        }
        setWorker({ name: '', title: '', number: ''})
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            name='name'
            value={worker.name}
            onChange={(e) => setWorker({...worker, name: e.target.value})}
                required
                placeholder="name"
                />
                <label>Title:</label>
                <input
                    name='title'
                    value={worker.title}
                    onChange={(e) => setWorker({ ...worker, title: e.target.value})}
                    required
                    placeholder='title'
                    />
                <label>Number:</label>
                <input
                    name='number'
                    value={worker.number}
                    onChange={(e) => setWorker({...worker, number: e.target.value})}
                    required
                />
                <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default WorkerForm;