import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Container, Card, Form, Button, FloatingLabel, Alert} from "react-bootstrap";

export default function Login() {
    
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const [user, setUser] = useState([]);

    useEffect(()=> {
        const userDetails = localStorage.getItem("user")
        setUser(JSON.parse(userDetails))
    },[])

    const [userData, setUserData] = useState({username:'',password:'' })

    const handleInputChange = e => {
        const { name, value } = e.target

        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = (e) =>{
        
        if (userData.username === user.username && userData.password === user.password){
            e.preventDefault()
            setLoading(true)
            setError("") 
            setMessage("Authentication Successful!")
            navigate("/userpage")
            
        }else{
            setError("Invalid Credentials!")
            
        }
        
        setLoading(false)

    }


    return (
        <Container className="d -flex align-items-center justify-our-content mt-5 mb-5">
        
        <Card border="dark" className="mb-2">
            <Card.Header>  <Card.Title className="text-center">USER LOGIN</Card.Title> </Card.Header>
            <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form className="mx-3" >
                
                <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput1"
                        label="Username"
                        className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange = {handleInputChange}
                                required
                                >
                             </Form.Control>
                    </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>

                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput2"
                        label="Password"
                        className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange = {handleInputChange}
                                required
                                >
                             </Form.Control>
                        </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>
                    
                    <Button disabled={loading} className="w-100 mt-2" onClick={handleSubmit}>Login</Button>

                </Form>
             </Card.Body>
        </Card>
        

        <div className="w-100 text-center mt-2">
                Don't have an account yet? <Link to='/registration'> Resgister Now</Link>
        </div>
        </Container>
    )
}