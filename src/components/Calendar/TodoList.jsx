<<<<<<< HEAD
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import FormDialog from "./Dialog";
import { Mycontext } from "../../Context/MyContext";
import { useContext, useEffect } from "react";

export default function TodoList() {
  const { setOpen, title, setTitle, date } = useContext(Mycontext);
  const [todoList, setTodoList] = useState(()=>{
    const todo = localStorage.getItem('todoList');
    return todo ? JSON.parse(todo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function handleCompleted(e) {
    const newTodo = todoList.map((item) => {
      if (item.id == e.id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodoList(newTodo);
  }
  function handleDelete(e) {
    const newTodo = todoList.filter((item) => item.id !== e.id);
    setTodoList(newTodo);
  }
  function handleOpenDialog() {
    setOpen(true);
  }
  function handleAdd() {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
      date: date,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
  }
  return (
    <div className="mt-20">
      <div className="p-12 bg-gradient-to-br from-purple-600 to-blue-400 min-w-full rounded-xl shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-2xl">To-Do List</h1>
          <button
            onClick={handleOpenDialog}
            className="px-6 py-2.5 flex items-center rounded-xl bg-white/30 hover:bg-white transition-all hover:cursor-pointer text-white hover:text-slate-800"
          >
            <Plus className="w-5 mr-1.5" /> Add Task
          </button>
        </div>
        <div className="mt-8">
          {todoList
            .filter((todo) => todo.date == date)
            .map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white/10 p-3 rounded justify-between mt-5 "
              >
                <div className="flex items-center space-x-2.5 text-white  ">
                  <div
                    onClick={() => {
                      handleCompleted(item);
                    }}
                    className={`${
                      item.completed ? "bg-white border-0" : ""
                    } w-6 h-6 rounded-full border-2 border-gray-400 
              bg-transparent transition-all`}
                  ></div>

                  <p
                    className={`text-xl ${
                      item.completed ? "line-through text-slate-700" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                <div
                  onClick={() => {
                    handleDelete(item);
                  }}
                  className="group hover:bg-slate-100/50 p-1.5 rounded hover:cursor-pointer transition-all "
                >
                  <Trash className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-all" />
                </div>
              </div>
            ))}
        </div>
      </div>
      <FormDialog handleAdd={handleAdd} />
    </div>
  );
}
=======
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import FormDialog from "./Dialog";
import { Mycontext } from "../../Context/MyContext";
import { useContext, useEffect } from "react";

export default function TodoList() {
  const { setOpen, title, setTitle, date } = useContext(Mycontext);
  const [todoList, setTodoList] = useState(()=>{
    const todo = localStorage.getItem('todoList');
    return todo ? JSON.parse(todo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function handleCompleted(e) {
    const newTodo = todoList.map((item) => {
      if (item.id == e.id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodoList(newTodo);
  }
  function handleDelete(e) {
    const newTodo = todoList.filter((item) => item.id !== e.id);
    setTodoList(newTodo);
  }
  function handleOpenDialog() {
    setOpen(true);
  }
  function handleAdd() {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
      date: date,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
  }
  return (
    <div className="mt-20">
      <div className="p-12 bg-gradient-to-br from-purple-600 to-blue-400 min-w-full rounded-xl shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-2xl">To-Do List</h1>
          <button
            onClick={handleOpenDialog}
            className="px-6 py-2.5 flex items-center rounded-xl bg-white/30 hover:bg-white transition-all hover:cursor-pointer text-white hover:text-slate-800"
          >
            <Plus className="w-5 mr-1.5" /> Add Task
          </button>
        </div>
        <div className="mt-8">
          {todoList
            .filter((todo) => todo.date == date)
            .map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white/10 p-3 rounded justify-between mt-5 "
              >
                <div className="flex items-center space-x-2.5 text-white  ">
                  <div
                    onClick={() => {
                      handleCompleted(item);
                    }}
                    className={`${
                      item.completed ? "bg-white border-0" : ""
                    } w-6 h-6 rounded-full border-2 border-gray-400 
              bg-transparent transition-all`}
                  ></div>

                  <p
                    className={`text-xl ${
                      item.completed ? "line-through text-slate-700" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                <div
                  onClick={() => {
                    handleDelete(item);
                  }}
                  className="group hover:bg-slate-100/50 p-1.5 rounded hover:cursor-pointer transition-all "
                >
                  <Trash className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-all" />
                </div>
              </div>
            ))}
        </div>
      </div>
      <FormDialog handleAdd={handleAdd} />
    </div>
  );
}
>>>>>>> 3bc1988a9b5c50c3552602997e73d574e42c1af5
