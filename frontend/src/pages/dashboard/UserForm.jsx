import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
export default function UserForm({ isClose, userId, data }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState(null);
  const [showCode, setShowCode] = useState(false);
  const handleChange = (event) => {
    console.log(event.target.value);
    setRole(event.target.value);
  };

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/users/${userId}`
          );
          const user = response.data;
          setId(userId);
          setUsername(user.UserName);
          setPassword(user.Password);
          setEmail(user.Email);
          setRole(user.RoleId);
          setShowCode(true);
        } catch (error) {
          console.error(error);
        }
      };
      const getStudentCode = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/students/${userId}`
          );
          setStudentCode(response.data.StudentCode);
        } catch (error) {
          console.error(error);
        }
      };
      fetchUser();
      getStudentCode();
    }
  }, [userId]);
  useEffect(() => {}, [id]);
  const onCloseForm = () => {
    isClose();
  };

  const onSubmit = async () => {
    const userData = { username, password, email, studentCode, role };
    if (id) {
      // Nếu có userId tức là đang sửa người dùng đã tồn tại
      const currentUser = await getUser(id);
      const updatedUserData = {
        username: username || currentUser.username,
        password: password || currentUser.password,
        email: email || currentUser.email,
        studentCode: studentCode,
        role: role || currentUser.role,
      };
      await editUser(id, updatedUserData);
      onCloseForm();
      data();
    } else {
      // Ngược lại, là đang thêm mới người dùng
      await addUser(userData);
      onCloseForm();
      data();
    }
  };

  const addUser = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users",
        userData
      );
      console.log(response.data);
      // Thực hiện các hành động khác sau khi thêm người dùng thành công
    } catch (error) {
      console.error(error);
    }
  };
  const editUser = async (id, userData) => {
    console.log(userData);
    try {
      const response = await axios.put(
        `http://localhost:4000/api/users/${id}`, // Thay thế `userId` bằng ID của người dùng cần sửa
        userData
      );
      console.log(studentCode);
      const responseCode = await axios.put(
        `http://localhost:4000/api/students/${id}`,
        { studentCode: userData.studentCode } // Sửa thành đối tượng JSON bao gồm thuộc tính studentCode
      );
      console.log(studentCode);

      console.log(studentCode);
    } catch (error) {
      console.error(error);
    }
  };
  const getUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/users/${id}`);
      const data = response.data;
      return data;
      // Thực hiện các hành động khác sau khi lấy thông tin người dùng thành công
    } catch (error) {
      console.error(error);
    }
  };
  const UserRole = [
    { id: 1, role: "admin" },
    { id: 2, role: "student" },
    { id: 3, role: "teacher" },
  ];

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          zIndex: "100",
        }}
      >
        <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
          <Box sx={{ padding: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Username
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="Username"
                  name="Username"
                  label="Username"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Password
                </InputLabel>
              </Grid>

              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="Password"
                  name="Password"
                  label="Password"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>

              {showCode && (
                <>
                  <Grid item xs={12} sm={2}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      StudentCode
                    </InputLabel>
                  </Grid>

                  <Grid item xs={12} sm={10}>
                    <TextField
                      required
                      id="StudentCode"
                      name="StudentCode"
                      label="StudentCode"
                      fullWidth
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                      value={studentCode}
                      onChange={(e) => setStudentCode(e.target.value)}
                    />
                  </Grid>
                </>
              )}

              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Email
                </InputLabel>
              </Grid>

              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="Email"
                  name="Email"
                  label="Email"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <InputLabel
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  Role
                </InputLabel>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    {UserRole.map((item) => (
                      <MenuItem value={item.id}>{item.role}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Grid container justifyContent="flex-end">
            <Button
              onClick={onCloseForm}
              variant="contained"
              sx={{
                color: "black",
                background: "#ffffff",
                marginBottom: "20px",
              }}
            >
              Exit
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#ff781f",
                marginLeft: "12px",
                marginBottom: "20px",
                marginRight: "46px",
              }}
              onClick={onSubmit}
            >
              Save
            </Button>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}
