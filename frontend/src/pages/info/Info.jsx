import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./info.css";
import moment from 'moment';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Info = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.UserId;

  const [editMode, setEditMode] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hometown, setHometown] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/students/info/${userId}`
      );

      const userData = response.data;

      setFullname(userData.UserName);
      setPhoneNumber(userData.PhoneNumber);
      setEmail(userData.Email);
      setHometown(userData.Address);
      setBirthYear(userData.BirthOfDate);
      setUserInfo(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const updatedUserInfo = {
      PhoneNumber: phoneNumber,
      Hometown: hometown,
      BirthYear: birthYear,
    };

    try {
      await axios.put(
        `http://localhost:4000/api/students/info/${userId}`,
        updatedUserInfo
      );
      setEditMode(false);
      fetchUserInfo();

      // Optionally, handle successful save or show notification
    } catch (error) {
      console.error(error);
      // Optionally, handle error or show notification
    }
  };
  const onSetBirthYear = (date) => {
    const dateBirthYear = date.format("YYYY-MM-DD HH:mm:ss");
    console.log("JI: ");
    console.log(dateBirthYear);
    setBirthYear(dateBirthYear);
  };
  return (
    <>
      <h2 className="info-container">User Information</h2>
      {!editMode ? (
        <div className="info-container mr-bot20">
          <div className=" mr-bot20">
            <strong>Fullname:</strong> {fullname}
          </div>
          <div className=" mr-bot20">
            <strong>Phone Number:</strong> {phoneNumber}
          </div>
          <div className=" mr-bot20">
            <strong>Email:</strong> {email}
          </div>
          <div className=" mr-bot20">
            <strong>Hometown:</strong> {hometown}
          </div>
          <div className=" mr-bot20">
            <strong>Birth Year:</strong>{" "}
            {moment(birthYear).format("DD/MM/YYYY")}
          </div>
          <div className=" mr-bot20">
            <Button onClick={handleEdit} variant="contained" color="primary">
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSave} className="info-container">
          <div className=" mr-bot20">
            <TextField
              label="FullName"
              variant="outlined"
              value={fullname}
              disabled
            />
          </div>

          <div className=" mr-bot20">
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              disabled
            />
          </div>
          <div className=" mr-bot20">
            <TextField
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className=" mr-bot20">
            <TextField
              label="Hometown"
              variant="outlined"
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
            />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={dayjs(birthYear)}
                onChange={(date) => onSetBirthYear(date)}
                label="Birth Year"
              />
            </DemoContainer>
          </LocalizationProvider>
          <div className=" mr-bot20">
            <Button
              style={{ marginRight: "20px" }}
              className=" mr-bot20"
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                setEditMode(false);
              }}
            >
              Cancel
            </Button>
            <Button
              className=" mr-bot20"
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default Info;
