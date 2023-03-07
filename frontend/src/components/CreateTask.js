import React, { useState } from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { save } from '../Service/TaskService';
import Success from './Success';
import Audio from './Audio';
import NavigationBar2 from './Navigationbar2';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
function CreateTask() {

    let userdata = useSelector(state => state.setdata)
    const navigate = useNavigate()

    let currentUserData = localStorage.getItem("data")
    currentUserData = JSON.parse(currentUserData)

    const [task, setTask] = useState()
    const [issave, setIssave] = useState(false)
    const [isfalse, setisFalse] = useState(false)
    const [test, settest] = useState(true)

    const token = localStorage.getItem("token")


    const validation = () => {

    }

    const HandleChange = (e) => {


        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const HandleSubmit = async (e) => {

        e.preventDefault()

        try {

            let res = await save(task, userdata.token)
            if (res.status === 200) {
                swal({
                    title: "Yahhhh",
                    text: " New Task Added ",
                    icon: "success",
                });
                navigate("/user/dashboard")

            }

        } catch (error) {

            swal({
                title: "Opps",
                text: " Task Not Added  ",
                icon: "error",
            });

        }



    }













    return (
        <div>


            <NavigationBar2></NavigationBar2>
            {issave ?
                <Container className='mt-5'>
                    <Success></Success>
                    <Header alertText='Task Added successfully '></Header> ;
                </Container>
                :

                <Container>
                    <Header alertText='Create  A New Task Here ' ></Header>

                    <Form          >
                        <Row>
                            <Col lg='6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Enter Task </Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Task name " onChange={HandleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg='6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Discription </Form.Label>
                                    <Form.Control type="text" name='description' placeholder="write discription here  " onChange={HandleChange} />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>

                            <Col lg='6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Deadline </Form.Label>
                                    <Form.Control type="date" name='deadline' onChange={HandleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className='text-center'>
                            <Button onClick={HandleSubmit}> Add Task </Button>
                        </div>
                    </Form>
                </Container>
            }

            {isfalse ?
                <Container className='mt-5'>
                    <Alert variant='danger' className='text-center'> <b> Task not Added !!! </b> </Alert>
                </Container> : null}

        </div>
    )
}


export default CreateTask 
