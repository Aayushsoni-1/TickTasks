import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "Firebase/auth";
import { auth,db } from "./Components/Firebase";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, query, where } from "Firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [Todo, setTodo] = useState('');
  const [Todos, setTodos] = useState([]);
  const navigate = useNavigate();

// Checking if user is authenticated or not
// Reacts to login state changes.
// Automatically runs when the page reloads and check if the user is still logged in using the stored token.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });
    return () => unsub();
  }, []);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (currentUser) {
      const q = query(collection(db, "todos"), where("uid", "==", currentUser.uid));
      onSnapshot(q, (snapshot) => {
        const temp = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setTodos(temp);
      });
    }
  });

  return () => unsubscribe();
}, []);

const AddToDo = async () => {
  if (!user) return;

  const newTodo = {
    Todo,
    isCompleted: false,
    uid: user.uid,
    createdAt: Date.now(),
  };

  await addDoc(collection(db, "todos"), newTodo);
  setTodo("");
};

  const DeleteToDo = async (e, id) => {
  await deleteDoc(doc(db, "todos", id));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = async (e) => {
  const id = e.target.name;
  const todo = Todos.find(t => t.id === id);
  const todoRef = doc(db, "todos", id);

  await updateDoc(todoRef, {
    isCompleted: !todo.isCompleted,
  });
};

  return (
    <>
      <Navbar />
     {/* <button onClick={handleLogout} className="absolute top-4 right-4 bg-[#f0f4f8] px-4 py-1 rounded-md hover:bg-red-700 transition-all">
         Logout
      </button> */}

      <div className="bg-white min-h-screen flex justify-center items-center px-4 py-10">
        <div className="bg-[#f0f4f8] w-full max-w-2xl border-2 rounded-lg border-[#94a3b8] flex flex-col items-center transition-all p-6">
          <h2 className="text-xl mb-4 text-[#1e293b] font-bold">Welcome, {user?.email}</h2>

          <input
            onChange={handleChange}
            value={Todo}
            type="text"
            placeholder="Add your todo"
            className="h-10 w-full bg-white border-2 border-[#94a3b8] rounded-md text-center text-[#1e293b] placeholder:text-[#64748b] mb-6"
          />

          <button
            onClick={AddToDo}
            disabled={Todo.length <= 3}
            className="h-10 w-full sm:w-1/2 active:scale-98 transition-all bg-blue-600 text-white border-2 border-[#2563eb] rounded-md hover:cursor-pointer hover:bg-blue-600 disabled:bg-blue-200 disabled:border-2 disabled:rounded-md disabled:border-blue-200 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            Save To-do
          </button>

          <div className="todos w-full flex flex-col justify-between items-start mt-4 mb-4">
            {Todos.length === 0 && (
              <div className="text-center text-sm sm:text-base text-[#475569]">
                "Your To-Do list is Empty huh! Looks like it's time to dream big or take a well-earned break!" 😎
              </div>
            )}

            {Todos.map(item => (
              <div
                key={item.id}
                className="w-full flex flex-col sm:flex-row justify-between items-center mt-4 py-2 px-4 bg-sky-100 hover:bg-sky-200 transition-all rounded-md"
              >
                <div className="flex items-center w-full sm:w-auto">
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                    className="mr-2"
                  />
                  <div className={`flex-grow ${item.isCompleted ? "line-through" : ""}`}>{item.Todo}</div>
                </div>
                <div className="flex mt-2 sm:mt-0 sm:ml-4">
                  <button
                    onClick={(e) => DeleteToDo(e, item.id)}
                    className="delete py-2 px-4 ml-2 active:scale-98 transition-all bg-blue-600 text-white border-2 border-[#2563eb] rounded-md hover:bg-blue-700"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
