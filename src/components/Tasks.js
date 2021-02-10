const tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at school",
    day: "Feb 6th at 2:30 pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 7th at 2:30 pm",
    reminder: false,
  },
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
        ))}
    </>
  )
}

export default Tasks