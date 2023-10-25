import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8080/painter/getAll";



function AddPainter() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(endpoint).then((res) => res.json());

      setUsers(data);
    })();
  }, []);

  return (
    <div className="render">
      <Header />
      <h2>Create new painter</h2>
      {/* <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form> */}

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
          <tr>
            <td>
              <form>
                <label>
                  Painter ID:
                  <input type="text" name="id" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  First Name:
                  <input type="text" name="fName" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Last Name:
                  <input type="text" name="lName" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Description:
                  <input type="text" name="desc" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Phone:
                  <input type="text" name="phone" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Street Address:
                  <input type="text" name="street" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  City:
                  <input type="text" name="city" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Postal Code:
                  <input type="text" name="pcode" />
                </label>
              </form>
            </td>
            <td>
              <form>
                <label>
                  Province:
                  <input type="text" name="province" />
                </label>
              </form>
            </td>
          </tr>
        </tbody>
      </table>


  <input type="submit" value="Submit" />


      <Footer />
    </div>
  );
}

export default AddPainter;
