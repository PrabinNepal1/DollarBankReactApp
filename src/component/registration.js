import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Card, Form, Button, Container, FloatingLabel, Alert} from "react-bootstrap";

export default function Registration() {

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const userDetails = localStorage.getItem("user")
    const [users, setUsers] = useState([])
    const [userData, setUserData] = useState({username:'',password:'', confirmPassword:'', email:'', balance:''})
    const [checkingType, setCheckingType] = useState(false);
    const [savingType, setSavingType] = useState(false);

    useEffect(()=> {
        if(userDetails !== null){
            setUsers(JSON.parse(userDetails))
            console.log(userDetails)
        }
    },[userDetails])

    const handleCheckbox1 = e =>{
        setCheckingType(e.target.checked);
    }

    const handleCheckbox2 = e =>{
        setSavingType(e.target.checked);
    }


    const handleInputChange = e => {
        const { name, value } = e.target

        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = (e) =>{

        e.preventDefault()

        if(userData.password !== userData.confirmPassword){
            setError("Password doesn't match");
        }

        else if(savingType && checkingType){
            setError("You can only open one account at a time! Please deselect one account!")
        }
        else{
           
            setLoading(true)
            setError("")
            setUsers(existingUsers => [...existingUsers, {
                                            userId:existingUsers.length, 
                                            username: userData.username, 
                                            password: userData.password, 
                                            email: userData.email, 
                                            balance: userData.balance,
                                            checkingAccount: checkingType,
                                            savingAccount: savingType }])
            console.log(users)
            localStorage.setItem("users", JSON.stringify(users))
            
            setMessage("Successfully Created Your Account")

            alert("Successfully Created Your Account. Please login to Continue");
            
            navigate("/login");
                
            }
    }

        return (
    
            <Container className="d -flex align-items-center justify-our-content mt-5 mb-5">
        
            <Card border="dark" className="mb-2">
            <Card.Header>  <Card.Title className="text-center">USER REGISTRATION</Card.Title> </Card.Header>
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

                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput3"
                            label="Confirm Password"
                            className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange = {handleInputChange}
                                required
                                >
                             </Form.Control>
                        </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>

                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput4"
                        label="Email"
                        className="mb-3">
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                onChange = {handleInputChange}
                                required
                                >
                             </Form.Control>
                        </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>

                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput5"
                        label="Initial Deposit"
                        className="mb-3">
                            <Form.Control
                                type="number"
                                placeholder="Initial Deposit"
                                name="balance"
                                onChange = {handleInputChange}
                                required
                                >
                             </Form.Control>
                        </FloatingLabel>
                             <Form.Text className="text-danger" muted></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox1">
                        <Form.Check type="checkbox" checked={checkingType} label="Checking Account" onChange={(event)=> {handleCheckbox1(event)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox2">
                        <Form.Check type="checkbox" checked={savingType} label="Saving Account" onChange={(event)=> {handleCheckbox2(event)}} />
                    </Form.Group>


                    
                    <Button disabled={loading} className="w-100 mt-2" type="submit" onClick={handleSubmit}>Sign-Up</Button>
                </Form>
             </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'> Log In</Link>
        </div>
    </Container>
        );
}
