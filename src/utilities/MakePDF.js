import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import CourseDetails from '../Pages/Courses/CourseDetails/CourseDetails';

const makePDF = () => {
    return (
        <div>
        <PDFDownloadLink document={<CourseDetails />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div>
    );
};

export default makePDF;