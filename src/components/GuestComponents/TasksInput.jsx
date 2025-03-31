import { addTask } from '@/redux/taskSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";

const TasksInput = () => {
  const dispatch = useDispatch();
  const [Task, setTask] = useState({ taskName: "", priority: "" , additionalInfo : ""}); 

  const handleAddTask = () => {
    if (!Task.taskName) {
      toast.error("Please add a valid task name!");
    } else {
      dispatch(addTask(Task));
      setTask({ taskName: "", priority: "" });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto mt-5">
      <h2 className="text-xl font-semibold mb-3">Add New Task</h2>
      
      <input
        type="text"
        placeholder="Enter Task Name..."
        value={Task.taskName}
        onChange={(e) => setTask({ ...Task, taskName: e.target.value })}
        className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 mb-3"
      />

      <Select onValueChange={(value) => setTask({ ...Task, priority: value })} >
        <SelectTrigger className="w-full mb-3 p-2 border rounded-lg">
          <SelectValue placeholder="Select Priority" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="high">🔥 High</SelectItem>
          <SelectItem value="medium">⚡ Medium</SelectItem>
          <SelectItem value="low">🟢 Low</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default TasksInput;
