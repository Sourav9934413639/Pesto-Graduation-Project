
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Modal, Box, Button, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/admin/users', { withCredentials: true });
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/admin/user/${id}`, { withCredentials: true });
      fetchAllUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleUpdateRole = async (role) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/admin/user/${selectedUser._id}`, { role }, { withCredentials: true });
      fetchAllUsers();
      handleCloseModal();
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Admin Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" style={{ marginTop: '20px' }}>All Users</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteUser(user._id)}>
                      <DeleteIcon />
                    </IconButton>
                    <Button onClick={() => handleOpenModal(user)}>Edit Role</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: 400 }}>
          <Typography variant="h6">Update Role</Typography>
          <Typography>Name: {selectedUser?.username}</Typography>
          <Select
            label="Role"
            value={selectedUser?.role || ''}
            onChange={(e) => handleUpdateRole(e.target.value)}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminDashboard;