import { useState } from 'react'
import { nanoid } from 'nanoid';
import Task from '../Task/Task';
import '../Task/Task.css'

export default function TaskList() {
    const [tasks, setTasks] = useState([])
    const [value, setValue] = useState('')
    const [descr, setDescr] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!value) return

        const newTask = { text: value, checked: false, id: nanoid(), descr: descr }
        setTasks(prevTasks => [...prevTasks, newTask]);
        setValue('');
        setDescr('');
    };

    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(task => {
                if (task.id === id) {
                    return { ...task, checked: !task.checked }
                } return task
            })
        )
    }


    return <div className='flex flex-col items-center min-h-screen bg-gray-100 p-10'>
        <form onSubmit={onSubmit} className='flex gap-4 mb-6'>
            <input placeholder='Enter task' type="text" name='task' id='task' className='px-4 py-2 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' value={value} onChange={(e) => { setValue(e.target.value) }} />
            <input placeholder='Enter task description' type="text" name='task' id='task' className='px-4 py-2 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400' value={descr} onChange={(e) => { setDescr(e.target.value) }} />
            <button className='px-6 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition' type='submit'>Add task</button>
        </form>
        {tasks.length ? <h1 className='text-xl font-semibold mb-4'>TaskList: </h1> : null}
        <ul className='w-full space-y-3'>{tasks.map(task =>
            <Task key={task.id} title={task.text} isCompleted={task.checked} descr={task.descr} onToggle={() => toggleTask(task.id)}>
            </Task>)}
        </ul>
    </div>
}