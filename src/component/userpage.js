import React, {useState, useEffect } from "react";
import {Card, Button, Container} from "react-bootstrap";

export default function Userpage(){
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([]);
    
    useEffect(()=> {
        const userDetails = localStorage.getItem("user")
        setUser(JSON.parse(userDetails))
        setLoading(false);
    },[])

    return (
        <Container className="d -flex align-items-center justify-our-content mt-5 mb-5">
        {loading && <p>loading...</p>}
        {user &&
          <><Card className="w-50">
            <Card.Header as="h5"> Profile : {user.username}</Card.Header>
            
            <Card.Body>
            <Card.Title> Email: {user.email} </Card.Title>
            { user.checkingAccount &&
                    <Card.Title>Account Type: Checking </Card.Title>
            }

            { user.savingAccount &&
                    <Card.Title> Account Type: Saving </Card.Title>
            }
              <Card.Title>Account Balance: {user.balance} </Card.Title>
              <Card.Title className="mt-5" as="h5"> Choose Transactions Option</Card.Title>
              <Card.Body>
                <Button variant="primary">Deposit</Button>
              </Card.Body>
              <Card.Body>
                <Button variant="primary">Withdraw</Button>
              </Card.Body>
              <Card.Body>
                <Button variant="primary">Open New Account</Button>
              </Card.Body>
            </Card.Body>
            </Card>
            </>
          }
        </Container>
    )
}