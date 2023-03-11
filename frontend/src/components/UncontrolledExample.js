import { Alert, Button, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import CountTask from "./CountTask";

function UncontrolledExample() {
    return (
        <div className="text-center">
            <>
                <br />
                <div className="container mt-5 text-center ">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                style={{ height: "458px" }}
                                src="https://to-do-cdn.microsoft.com/static-assets/c26cd0d92ec61ba2c661adefaa535ab3cc4fb124f347a850fded8034dad5d360/icons/welcome-left.png"></img>
                        </div>
                        <div className="col-md-4 mt-5 ">
                            <h1>Task Manager</h1>
                            <p>
                                Become focused, organized, and calm with Todoist. The world’s #1 task manager app
                            </p>
                            <LinkContainer to="/login">
                                <Button>Get Started</Button>
                            </LinkContainer>
                        </div>
                        <div className="col-md-4">
                            <img
                                style={{ height: "458px" }}
                                src="https://to-do-cdn.microsoft.com/static-assets/f2f56b7d4c72910540effed9ccddae703d8d09b94075dddfeeab6cd79def0c60/icons/welcome-right.png" ></img>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default UncontrolledExample;
