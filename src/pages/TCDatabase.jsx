import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import './TCDatabase.css';

export default function TCDatabase() {
  const [searchTerm, setSearchTerm] = useState('');

  const dummyData = [
    { id: 1, name: 'Aarav Sharma', admissionNo: 'AHWS-2018-0012', classLeft: 'X', date: '15-Mar-2023' },
    { id: 2, name: 'Diya Patel', admissionNo: 'AHWS-2019-0145', classLeft: 'XII', date: '20-May-2023' },
    { id: 3, name: 'Rohan Gupta', admissionNo: 'AHWS-2020-0089', classLeft: 'VIII', date: '10-Jun-2023' },
    { id: 4, name: 'Ananya Singh', admissionNo: 'AHWS-2017-0034', classLeft: 'XII', date: '05-Jul-2023' },
    { id: 5, name: 'Vihaan Kumar', admissionNo: 'AHWS-2021-0201', classLeft: 'V', date: '22-Aug-2023' },
    { id: 6, name: 'Ishita Verma', admissionNo: 'AHWS-2016-0056', classLeft: 'X', date: '30-Sep-2023' },
  ];

  const filteredData = dummyData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="tc-database-page">
      <PageBanner title="Transfer Certificate (TC) Database" image="./WEBSITE GALLERY/other images/AHWS.png" />
      
      <section className="tc-section">
        <div className="container">
          <div className="tc-search-container">
            <h2 className="section-title">Search Transfer Certificates</h2>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search by Admission Number or Student Name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                🔍 Search
              </button>
            </div>
          </div>

          <div className="tc-table-container">
            <div className="table-responsive">
              <table className="tc-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Student Name</th>
                    <th>Admission No.</th>
                    <th>Class Left</th>
                    <th>TC Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((student, index) => (
                      <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.admissionNo}</td>
                        <td>{student.classLeft}</td>
                        <td>{student.date}</td>
                        <td>
                          <button className="download-btn" onClick={() => alert('PDF Download would start here.')}>
                            📄 Download PDF
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="no-results">No records found matching your search.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
