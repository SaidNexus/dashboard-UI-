import MainCalendar from './MainCalender'
import TodoList from './TodoList'

export default function Calendar() {
  return (
    <>
        <div className='p-6'>
            <MainCalendar/>
            <TodoList/>
        </div>
    </>
  )
}
