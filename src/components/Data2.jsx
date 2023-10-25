import { useEffect, useState } from 'react'
import { Stack, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from 'react-bootstrap';
import food from './food.jpg'

const endpoint = 'https://jsonplaceholder.typicode.com/users'

const Data2 = () => {
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
            <div className="cardSec">
                {users.map(user => (
                    <Card style={{ width: '18rem', margin: 'auto', display: 'flex' }}>
                        <Card.Img variant="top" src={food} />
                        <Card.Body>
                            <Card.Title>{user.name} ({user.username})</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Contact: <a href={`mailto:${user.email}`}>
                                {user.email}
                            </a></ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>;
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name (Username)</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name} ({user.username})</td>
                            <td>
                                <a href={`mailto:${user.email}`}>
                                    {user.email}
                                </a>
                            </td>
                            <td>{user.phone}</td>
                            <td>
                                <a href={`https://${user.website}`} target="_blank">
                                    {user.website}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )

        </div>
    )
}

export default Data2;