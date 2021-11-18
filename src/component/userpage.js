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
            <Card.Header as="h5"><i className="far fa-address-card"></i> Profile : {user.username}</Card.Header>
            
            <Card.Body>
            <Card.Title><i className="fas fa-envelope-open-text"></i> Email: {user.email} </Card.Title>
            { user.checkingAccount &&
                    <Card.Title><i className="fas fa-user"></i> Account Type: Checking </Card.Title>
            }

            { user.savingAccount &&
                    <Card.Title><i className="fas fa-user"></i> Account Type: Saving </Card.Title>
            }
              
              <Card.Title className="mt-5" as="h5"><i className="fas fa-user-edit"></i> Choose Transactions Option</Card.Title>
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