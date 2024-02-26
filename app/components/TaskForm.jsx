"use client";
const TaskForm = () => {
  return (
    <form
      className="mb-8"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className=" p-1 rounded-md border border-base-300 shadow-sm"
      />
      <button className="btn bg-green-500 btn-sm">Add Task</button>
    </form>
  );
};

export default TaskForm;
