import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from "sonner";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '@/redux/authSlice';

export default function Login() {
  let [userState , setUserState] = useState({name : "" , password : ""})
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let changeEventHandler = (e) => {
      setUserState({...userState , [e.target.name ]: e.target.value})
  }

  let submitHandler = (e) => {
    e.preventDefault();
    let name = userState.name , password = userState.password;

    if(!name || !password){
      // Either of These are empty then enter again 
      toast.error("All Fields are required!")
    }
    else{
        dispatch(login(name));
        toast.success("Logged in successfully!")
        navigate("/")
    }


  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>

        <form onSubmit={submitHandler} className="space-y-7">
          {/* Username */}
          <div>
            <Label className="block text-gray-700 text-sm font-medium mb-2">Username</Label>
            <Input 
              type="text" 
              placeholder="Enter your username" 
              name="name" 
              value={userState.name} 
              onChange={changeEventHandler} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus-visible:ring-0"
            />
          </div>

          {/* Password */}
          <div>
            <Label className="block text-gray-700 text-sm font-medium mb-2">Password</Label>
            <Input 
              type="password" 
              placeholder="Enter your password" 
              name="password" 
              value={userState.password} 
              onChange={changeEventHandler} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus-visible:ring-0"
            />
          </div>

          {/* Login Button */}
          <Button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </Button>
        </form>
      </div>
    </div>

  )
}
