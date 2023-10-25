import { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

const endpoint = 'http://localhost:8080/painter/getAll'


function ManagePainters()  {
    const navigate = useNavigate();
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
            <h1>Manage Painters</h1>
            <Button onClick={() => navigate('/addPainter')} variant="primary" style={{margin: '10px'}}>Add painter</Button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Street Address</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Province</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user.painterId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.description}</td>
                            <td>
                                <a href={`mailto:${user.email}`}>
                                    {user.email}
                                </a>
                            </td>
                            <td>{user.phone_number}</td>
                            <td>{user.streetAddress}</td>
                            <td>{user.city}</td>
                            <td>{user.postalCode}</td>
                            <td>{user.province}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
<Footer />
        </div>
    )
}
  
  export default ManagePainters;