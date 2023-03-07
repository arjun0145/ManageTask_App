import NavigationBar2 from "../components/Navigationbar2";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";
import setdata from "../State/reducers/dataReducers";
const UserDashbord = () => {
let userdata = useSelector(state => state.setdata)

    return  (
        <div>

         
         <TaskList/>

        </div>
    )
   
}

export default UserDashbord ; 