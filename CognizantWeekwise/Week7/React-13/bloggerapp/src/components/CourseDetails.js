import React from 'react';

const CourseDetails = ({ showCourse }) => {
  if (!showCourse) {
    return <p>No Course Info</p>;
  }

  return (
    <div>
      <h3>Angular</h3>
      <p>4/5/2021</p>
      <h3>React</h3>
      <p>6/3/2021</p>
    </div>
  );
};

export default CourseDetails;
