import {useState} from "React"

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("false");
  
  return (
    <form className="add-form" action="">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
   
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time"/>
      </div>
  
      <div className="form-control">
        <label>Set Reminder</label>
        <input type="checkbox"/>
      </div>
  
      <input type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask