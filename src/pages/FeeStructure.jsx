import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import './FeeStructure.css';

const FeeStructure = () => {

  return (
    <main className="fee-structure-page">
      <PageBanner title="Fee Structure" image="./WEBSITE GALLERY/other images/Curriculum and Academics.png" />
      
      <section className="fee-section">
        <div className="container">
          <div className="fee-header-info">
            <h2 className="section-title">Academic Session 2026-27</h2>
            <div className="divider-line" />
            <p className="fee-subtitle">ACADEMIC HEIGHTS WORLD SCHOOL</p>
            <p className="fee-subtitle-small">SD-QD Block, Pitampura Delhi - 110034</p>
          </div>

          <div className="table-responsive">
            <table className="fee-table pdf-style-table">
              <tbody>
                <tr>
                  <td className="fee-label">ADMISSION FEE</td>
                  <td className="fee-amount">₹ 200</td>
                  <td className="fee-frequency">One Time</td>
                </tr>
                <tr>
                  <td className="fee-label">CAUTION FEE (REFUNDABLE)</td>
                  <td className="fee-amount">₹ 500</td>
                  <td className="fee-frequency">One Time</td>
                </tr>
                <tr>
                  <td className="fee-label">TUITION FEE</td>
                  <td className="fee-amount">₹ 7,500</td>
                  <td className="fee-frequency">Monthly</td>
                </tr>
                <tr>
                  <td className="fee-label">DEVELOPMENT FEE</td>
                  <td className="fee-amount">₹ 13,440</td>
                  <td className="fee-frequency">Annually</td>
                </tr>
                <tr>
                  <td className="fee-label">ANNUAL FEE</td>
                  <td className="fee-amount">₹ 36,000</td>
                  <td className="fee-frequency">Annually</td>
                </tr>
                
                {/* Section header for Earmarked Fee */}
                <tr className="table-section-header">
                  <td colSpan="3">EARMARKED FEE</td>
                </tr>
                
                <tr>
                  <td className="fee-label">Activity Fee</td>
                  <td className="fee-amount">₹ 750</td>
                  <td className="fee-frequency">Monthly</td>
                </tr>
                <tr>
                  <td className="fee-label">Computer Fee</td>
                  <td className="fee-amount">₹ 350</td>
                  <td className="fee-frequency">Monthly</td>
                </tr>

                <tr>
                  <td className="fee-label">Lab Fee (XI - XII)</td>
                  <td className="fee-amount">250/Subject</td>
                  <td className="fee-frequency">Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>



          <div className="fee-actions">
            <Link to="/admission" className="btn btn-primary">Apply Now</Link>
            <a href="https://ah5000.skeducations.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Pay via 360 App</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeeStructure;
