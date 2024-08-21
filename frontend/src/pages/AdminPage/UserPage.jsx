// UsersPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap'; // Import Bootstrap components

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data
    axios.get('/api/users') // Replace with your actual API endpoint
      .then((response) => {
        // Set static data
        const staticData = [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', isAdmin: false },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', isAdmin: true },
          { id: 3, name: 'Robert Brown', email: 'robert.brown@example.com', isAdmin: false },
        ];
        setUsers(staticData);
      })
      .catch((error) => {
        console.error('Error fetching users data:', error);
      });
  }, []);

  const handleMakeAdmin = (userId) => {
    // Handle make admin action
    console.log('Make admin for user ID:', userId);
  };

  const handleDelete = (userId) => {
    // Handle delete action
    console.log('Delete user ID:', userId);
  };

  return (
    <div className="container mt-4">
      <h3>Users Page</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Admin' : 'User'}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleMakeAdmin(user.id)}
                  className="me-2"
                >
                  Make Admin
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersPage;
