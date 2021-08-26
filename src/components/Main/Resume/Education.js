import React from 'react';

import EduItem from './EduItem';

const Education = () => {
   const edu = [
    {course: 'Master of Computer Applications - MCA', college: 'PES University', duration: 'SEP 2019 - JUL 2022', result: 'CGPA 8.48'},
    {course: 'Bachelor of Computer Applications - BCA', college: 'Bangalore University', duration: 'AUG 2016 - JUN 2019', result: 'CGPA 7.2'},
    {course: 'Twelfth Grade - PUC', college: 'Department of Pre-University Education Board - Karnataka', duration: 'JUN 2015 - MAY 2016', result: 'Percentage 51.50'},
    {course: 'Tenth Grade - SSLC', college: 'Karnataka Secondary Education Examination Board', duration: 'JUL 2012 - MAY 2013', result: 'Percentage 56.32'},
  ];
  return (
    edu.map((e, i) => {
      return <EduItem item={e} key={i} />;
    })
  );
};

export default Education;
