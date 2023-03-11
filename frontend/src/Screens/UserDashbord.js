import NavigationBar2 from "../components/Navigationbar2";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";
import setdata from "../State/reducers/dataReducers";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { GetTask , DeleteTask  } from "../Service/TaskService";
import swal from "sweetalert";


const UserDashbord = () => {

    let x = localStorage.getItem("data")
    x = JSON.parse(x)

    const [tasks, setTasks] = useState([]);
    const [data, setData] = useState([])
    const [id, setid] = useState(x.userdetails._id)
    const [current, setcurrent] = useState(x)
    const [compleated, setcompleted] = useState()

    let userdata = useSelector((state) => state.setdata);
    const navigate = useNavigate();

    const FetchTask = async () => {
        const res = await GetTask(id, x.token);
        setData(res.data)
        setTasks(res.data.x)
    };


    useEffect(() => {


        let data = localStorage.getItem("data")
        console.log(data)
        data = JSON.parse(data)
        if (data === null) {
            navigate("/")
        }
        else {
            FetchTask();

        }

    }, []);

    const deleteTask = async (x) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then ( async (willDelete) => {
            if (willDelete) {
            //   await DeleteTask(x)
              FetchTask()
            }
          })
    
    
    
      }
      const markAsCompleated = async (id) => {
        // await MarkAscompleated(id)
        FetchTask()
      }

    return (
//         <div>
//             <NavigationBar2></NavigationBar2>

//             <Row className="mt-1">
//                 <Col lg="4">
//                     <p className="text-center">

//                         <b>
//                             <span>Total Task - {data.totalTask}</span>
//                         </b>
//                     </p>
//                 </Col>
//                 <Col lg="4">
//                     <p className="text-center">

//                         <b>
//                             <span> Completed - {data.totalcompleated}</span>
//                         </b>
//                     </p>
//                 </Col>
//                 <Col lg="4">
//                     <p className="text-center">
//                         <b>
//                             {" "}
//                             <span> Pending - {data.totalTask - data.totalcompleated}</span>
//                         </b>{" "}
//                     </p>
//                 </Col>
//             </Row>

//             <Container>

// <Row>



//   {tasks.map((e) => {
// // (e.IsCompleated ? setcompleted("greenyellow") : setcompleted("red") )
//     return (
      

//       <Col lg={4} className="my-2">
        
        
//           <Card style={{ backgroundColor: compleated }}>
//             <Card.Body>
//               {e.IsCompleated ?
//                 <div> <p>Status -  <span className="text-success">Completed</span> </p></div>
//                 :
//                 <div> <p>Status -  <span className="text-danger">pending</span> </p></div>
//               }

//               <Card.Title>{e.name}</Card.Title>
//               <Card.Text>
//                 {e.description}
//                 <br></br>
//                 {e.CreatedOn}
//               </Card.Text>
//               <Button variant="danger" className='btn-sm' onClick={() => {
//                 deleteTask(e._id)
//               }}> delete task </Button>
//               {!e.IsCompleated ?
//                 <Button className="mx-4 btn-sm" onClick={() => {
//                   markAsCompleated(e._id)
//                 }}> Mark as  Compleated</Button>
//                 : null
//               }
//             </Card.Body>
//           </Card> :
//           <Card style={{ backgroundColor: "orange" }}>
//             <Card.Body>
//               {e.IsCompleated ?
//                 <div> <p>Status -  <span className="text-success">Completed</span> </p></div>
//                 :
//                 <div> <p>Status -  <span className="text-danger">pending</span> </p></div>
//               }

//               <Card.Title>{e.name}</Card.Title>
//               <Card.Text>
//                 {e.description}
//                 <br></br>
//                 {e.CreatedOn}
//               </Card.Text>
//               <Button variant="danger" className='btn-sm' onClick={() => {
//                 deleteTask(e._id)
//               }}> delete task </Button>
//               {!e.IsCompleated ?
//                 <Button className="mx-4 btn-sm" onClick={() => {
//                   markAsCompleated(e._id)
//                 }}> Mark as  Compleated</Button>
//                 : null
//               }
//             </Card.Body>
//           </Card>

//       </Col>

//     )
//   })}

// </Row>
// </Container>
//         </div>
<div>
    <TaskList/>
</div>
    );
};

export default UserDashbord;
