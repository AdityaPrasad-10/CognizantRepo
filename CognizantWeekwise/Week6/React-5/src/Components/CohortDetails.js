import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const statusClass = cohort.status.toLowerCase() === 'ongoing' ? styles.greenText : styles.blueText;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>{cohort.name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date:</dt>
        <dd>{cohort.endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
