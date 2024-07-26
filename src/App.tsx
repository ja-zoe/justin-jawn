import { FormEvent, useState } from 'react'
import './App.css'
import { IoMdAdd } from "react-icons/io";

interface taskType {
  task: string,
  id: number,
  subTask: string[]
}

function App() {
  const [task, setTask] = useState<string>('')
  const [tasksList, setTasksList] = useState<Array<taskType>>([])


  const addTask = (e: FormEvent) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    const taskItem = {
      task,
      id,
      subTask: ['sjdfsfdhj']
    }
    const newTasksList = [...tasksList, taskItem]
    setTasksList(newTasksList)
    setTask('')
  }

  const addSubTask = (id: number) => {
    const newTask: any = tasksList.find(task => task.id === id)
    console.log(newTask)
    const newSubTasks = [...newTask.subTask, 'justin is a bitch']
    const newNewTask = { 
      task: newTask.task, 
      id: newTask.id,
      subTask: newSubTasks
    }
    const tasksListCopy = tasksList.map(task => {
      if (task.id === id){
        return newNewTask
      }
      return task
    })
    setTasksList(tasksListCopy)
    console.log(tasksList)
  }

  return (
    <main className='flex w-screen h-screen items-center flex-col'>
      <div className='mt-[100px]'>
        <form onSubmit = {addTask} className='flex rounded-xl overflow-hidden'>
          <input onChange = {e => setTask(e.target.value)} type = "text" value = {task} placeholder='Make Task' className='w-[300px] h-[30px] text-black bg-slate-400 flex items-center ps-3 pe-2'/>
          <button type='submit' className='bg-sky-100 ps-3'>Add Task</button>
        </form>
      </div>
      <div className='w-screen flex justify-center pt-3 gap-3 flex-wrap'>
        {tasksList.map(task => (
          <div className='border border-black min-w-[200px]' key={task.id}>
            <div className='flex justify-center items-center gap-4'>
              <h2 className='text-center'>{task.task}</h2>
              <IoMdAdd className='text-black hover:cursor-pointer text-xl' onClick={e => addSubTask(task.id)}/>
            </div>
            <div className='flex flex-col'>
              {task.subTask.map(subTask => (
                <div>{subTask}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
