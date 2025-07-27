import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-08-15',
    },
    {
      name: 'Java Fundamentals',
      status: 'completed',
      startDate: '2025-05-10',
      endDate: '2025-06-25',
    },
    {
      name: 'Python for Data Science',
      status: 'ongoing',
      startDate: '2025-07-10',
      endDate: '2025-09-01',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Academy Cohorts</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
