import React, { useState } from "react";
import { Form, Button, Col, Container, Row, Alert } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import { Registeruser } from "../Service/TaskService";
import Success from "./Success";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Register = () => {
  // const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     age: '',
  //     gender: '',
  //     password: '',
  //     confirmPassword: '',
  // });

  const [formData, setFormData] = useState({});
  const [isregister, setIsregister] = useState(false);
  const [isError, SetIsError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const s = await Registeruser(formData);

      setTimeout(() => {
        setIsregister(false);
      }, 3000);
      setIsregister(true);
    } catch (error) {
      setTimeout(() => {
        SetIsError(false);
      }, 2000);
      SetIsError(true);
    }
  };

  return (
    <div>
      <NavigationBar></NavigationBar>

      {isregister ? (
        <Container className="mt-5">
          <Success></Success>
          <h3 className="text-center">You Have Registered SuccessFully </h3>
        </Container>
      ) : (
        <Container className="mt-4">
          <Alert className="text-center" variant="success">
            {" "}
            <b>Register Here .........</b>
          </Alert>
          <Container className="border border-2 ">
            <Form onSubmit={handleFormSubmit} className="mt-3">
              <Row>
                <Col lg="6">
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg="6">
                  <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg="6">
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col lg="6"></Col>
              </Row>

              <br />

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "300px" }}
                >
                  Register
                </Button>
                <div style={{ cursor: "pointer" }}>
                  <br />
                  <LinkContainer to="/login">
                    <span className="text-danger">
                      Already Have Account ? Login now
                    </span>
                  </LinkContainer>
                </div>
              </div>
            </Form>
            {isError ? (
              <Container className="mt-3 text-center">
                <Alert variant="danger">
                  {" "}
                  <b>SomeThing Went Wrong</b>{" "}
                </Alert>
              </Container>
            ) : null}
            <br />
            <br />
          </Container>
        </Container>
      )}
    </div>
  );
};

export default Register;
