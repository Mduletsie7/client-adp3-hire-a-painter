import Header from "../components/Header";
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../syles/AdminPage.css'
import { useNavigate } from "react-router-dom";

// Image imports
import painter from "../assets/painter.jpg"
import jobs from "../assets/jobs.jpg"
import services from "../assets/services.jpg"

function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <div className="adminMain">
        <Card className="managePainters" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={painter} />
          <Card.Body>
            <Card.Title>Painters</Card.Title>
            <Card.Text>
              View and manage all painters 
            </Card.Text>
            <Button onClick={() => navigate('/managePainters')} variant="primary">Manage</Button>
          </Card.Body>
        </Card>
        {/* Manage Jobs */}
        <Card className="manageJobs" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={jobs} />
          <Card.Body>
            <Card.Title>Jobs</Card.Title>
            <Card.Text>
              View and manage all jobs
            </Card.Text>
            <Button variant="primary">Manage</Button>
          </Card.Body>
        </Card>
                {/* Manage Services */}
                <Card className="manageServices" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={services} />
          <Card.Body>
            <Card.Title>Services</Card.Title>
            <Card.Text>
              View and manage all Services
            </Card.Text>
            <Button variant="primary">Manage</Button>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default AdminPage;