import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
    Container,
    Row,
    Col,
    Button, 
    Form,
    FormControl
} from 'react-bootstrap'

class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                username: "",
                password: ""
            };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onLoginClick = () => {
        const userData ={
            username: this.state.username,
            password: this.state.password
        };
        console.log("Sign up" + userData.username + " " + userData.password);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Login</h1>
                        <Form>
                            <Form.Group controlId="usernameId">
                                <Form.Label>User name</Form.Label>
                                <FormControl
                                    type="text"
                                    name="username"
                                    placeholder="Your name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="usernameId">
                                <Form.Label>Create a Password</Form.Label>
                                <FormControl
                                    type="password"
                                    name="password"
                                    placeholder="Create a password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>
                        </Form>
                        <Button
                            color="primary"
                            onClick={this.onLoginClick}
                        >Sign Up</Button>
                        <p className="mt-2">
                            Don't have an account? <Link to="/signup">Login</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login