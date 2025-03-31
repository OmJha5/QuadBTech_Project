import useCheckUserLogin from '@/customHooks/useCheckUserLogin';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/authSlice';
import TasksInput from './TasksInput';
import Tasks from './TaskList';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

export default function Home() {
  useCheckUserLogin(); // If user is not logged in then will be redirected to login page else can create and manage task .
  let dispatch = useDispatch();

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <div className="flex justify-between items-center mb-6">
        <h1 className='text-2xl font-bold text-gray-800'>My Todo List</h1>
        <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={() => dispatch(logout())}>Logout</Button>
      </div>

      <Card>
        <CardContent className='p-4'>
          <TasksInput />
        </CardContent>
      </Card>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Tasks />
      </motion.div>
    </div>
  );
}
