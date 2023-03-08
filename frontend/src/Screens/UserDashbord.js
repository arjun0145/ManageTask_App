import NavigationBar2 from "../components/Navigationbar2";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";
import setdata from "../State/reducers/dataReducers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const UserDashbord = () => {
    let userdata = useSelector(state => state.setdata)
    const navigate = useNavigate()

    useEffect(() => {

        let data = localStorage.getItem("data")
        console.log(data)
        data = JSON.parse(data)
        if (data === null) {
            navigate("/")
        }


    }, [])

    return (
        <div>


            <TaskList />

        </div>
    )

}

export default UserDashbord; 