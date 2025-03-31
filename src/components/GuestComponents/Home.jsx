import useCheckUserLogin from '@/customHooks/useCheckUserLogin'
import React from 'react'
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/authSlice';
import Tasks from './Tasks';

export default function Home() {
  useCheckUserLogin(); // If user is logged in then user can continue the page otherwise will be redirected to the login page.
  let dispatch = useDispatch();

  return (
    <div className=' p-10'>
        <div className="flex justify-end">
          <Button className="bg-blue-500 text-white " onClick={() => dispatch(logout())}>Logout</Button>
        </div>

        <Tasks/>

    </div>
  )
}
