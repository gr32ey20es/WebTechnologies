import React, { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import axios from 'axios';

import Listing from "./Listing";
import Overlay from "../../component/overlay/Overlay";
import Modal from "./Modal";

const Course = ({ courseData }) => {
  const courseID = courseData.CourseID;
  const [examData, setExamData] = useState([]);
  const [, setError] = useState(null);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:4000/api/exams/${courseID}`);
        setExamData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* */
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Listing data={courseData} open={openModal} />
      <AnimatePresence>
        {open && (<>
          <Overlay close={closeModal}>
            <Modal courseData={courseData} examData={examData} close={closeModal} />
          </Overlay>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Course;
