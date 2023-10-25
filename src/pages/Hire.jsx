import { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const endpoint = 'http://localhost:8080/painter/getAll'

function Hire()  {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetch(endpoint)
                .then(res => res.json())

            setUsers(data)
        })()
    }, [])

    return (
        <div className='render'>
            <Header />
            <div className="cardSec">
                {users.map(user => (
                    <Card style={{ width: '18rem', margin: '10px 10px', display: 'flex' }}>
                        <Card.Img variant="top" src={require('../assets/painter.jpg')} />
                        <Card.Body>
                            <Card.Title>{user.firstName} ({user.lastName})</Card.Title>
                            <Card.Text>
                                {user.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Contact: <a href={`mailto:${user.email}`}>
                                {user.email}
                            </a></ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Hire
                </Button>
                <Button as="a" variant="success">
                    View Portfolio of work
                </Button>
            </Stack>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            
<Footer />
        </div>
    )
}
  
  export default Hire;