const AddTask = () => {
  return (
    <form className="add-form" action="">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"/>
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