import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from "axios";

import Overlay from "../../component/overlay/Overlay";
import { IoCloseCircleOutline } from "react-icons/io5";
import "../mycourse/Modal.css";
import "./courseedit.css";

const CourseEdit = ({ courseData, close }) => {
  const [currentTab, setCurrentTab] = useState('edit')
  const [inputs, setInputs] = useState(courseData);
  const navigate = useNavigate();

  const handleChange = (e) => {
		setInputs((prevInputs) => ({
		...prevInputs,
		[e.target.name]: e.target.value,
		}));
	};

  const handleSubmit = (e) => {
    e.preventDefault()

    const {CourseID} = inputs
    const postExam = async () => {
        await axios.post('http://localhost:4000/api/courses', inputs, 
            { headers: { 'Content-Type': 'application/json' }})
    }
    const putExam = async () => {
        await axios.put('http://localhost:4000/api/courses/'+CourseID, inputs, 
            { headers: { 'Content-Type': 'application/json' }})
    }
    if (!CourseID) postExam()
    else putExam()

    close();
    navigate('/mycourses')
  }

  /* */
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const currentTabStyle = {color: '#000',  fontWeight: '600'}

  return (
    <>
    <Overlay close={close}>
      <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
      >

        <div className="tabs">
          <button onClick={()=>setCurrentTab('edit')}
            style={currentTab === 'edit' ? currentTabStyle : {}}
          >Edit</button>
        </div>

        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>


        <div className="form__">

          <div className="form__group field">
            <motion.input type="input" className="form__field" placeholder="Course Name" name="CourseName" 
            defaultValue={courseData.CourseName} onChange={handleChange} required />
            <motion.label htmlFor="name" className="form__label">Course Name</motion.label>
          </div>

          <div className="form__group field">
            <motion.input type="input" className="form__field" placeholder="Course Description" name="CourseDescription" 
            defaultValue={courseData.CourseDescription} onChange={handleChange} required />
            <motion.label htmlFor="name" className="form__label">Course Description</motion.label>
          </div>

          <div className="form__group field">
            <motion.input type="input" className="form__field" placeholder="Image Path" name="ImagePath" 
            defaultValue={courseData.ImagePath} onChange={handleChange} required />
            <motion.label htmlFor="name" className="form__label">Image Path</motion.label>
          </div>

          <button className="button-28" onClick={handleSubmit}>Submit</button>
        </div>
      </motion.div>

    </Overlay>
    </>
  );
};

export default CourseEdit;