import {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";

const useCheckUserLogin = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let {user} = useSelector((state) => state.auth);

    useEffect(() => {
        const checkUser = async() => {
            if(!user){
                toast.error("Please Login to continue")
                navigate("/login");
            }
        }

        checkUser();
    } , [user])
}

export default useCheckUserLogin;