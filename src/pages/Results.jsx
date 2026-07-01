import { useState } from 'react'
import './Results.css'
import PageBanner from '../components/PageBanner'

export default function Results() {
  const [activeTab, setActiveTab] = useState('classX')
  const [openArchive, setOpenArchive] = useState(null)

  const classXSubjects = [
    { subject: 'English', appeared: 62, passPercent: 100, avgMarks: 82, highest: 97 },
    { subject: 'Hindi', appeared: 58, passPercent: 100, avgMarks: 84, highest: 98 },
    { subject: 'Mathematics', appeared: 62, passPercent: 100, avgMarks: 79, highest: 99 },
    { subject: 'Science', appeared: 62, passPercent: 100, avgMarks: 81, highest: 96 },
    { subject: 'Social Science', appeared: 62, passPercent: 100, avgMarks: 86, highest: 98 },
  ]

  const classXIISubjects = [
    { subject: 'Physics', appeared: 38, passPercent: 100, avgMarks: 78, highest: 96 },
    { subject: 'Chemistry', appeared: 38, passPercent: 100, avgMarks: 76, highest: 95 },
    { subject: 'Mathematics', appeared: 24, passPercent: 100, avgMarks: 80, highest: 99 },
    { subject: 'Biology', appeared: 14, passPercent: 100, avgMarks: 82, highest: 97 },
    { subject: 'English', appeared: 45, passPercent: 100, avgMarks: 85, highest: 98 },
    { subject: 'Economics', appeared: 18, passPercent: 100, avgMarks: 83, highest: 96 },
    { subject: 'Business Studies', appeared: 18, passPercent: 100, avgMarks: 81, highest: 95 },
  ]

  const classXToppers = [
    { rank: 1, name: 'Ananya Sharma', initials: 'AS', marks: '98.4%', color: '#4A90D9' },
    { rank: 2, name: 'Rohan Verma', initials: 'RV', marks: '97.8%', color: '#D94A7A' },
    { rank: 3, name: 'Priya Gupta', initials: 'PG', marks: '97.2%', color: '#4AD9A7' },
    { rank: 4, name: 'Aarav Singh', initials: 'AS', marks: '96.6%', color: '#D9A74A' },
    { rank: 5, name: 'Sneha Patel', initials: 'SP', marks: '96.0%', color: '#7A4AD9' },
    { rank: 6, name: 'Karan Mehta', initials: 'KM', marks: '95.4%', color: '#4AD9D9' },
  ]

  const classXIIToppers = [
    { rank: 1, name: 'Ishita Reddy', initials: 'IR', marks: '97.6%', stream: 'Science', color: '#4A90D9' },
    { rank: 2, name: 'Aditya Nair', initials: 'AN', marks: '96.8%', stream: 'Science', color: '#D94A7A' },
    { rank: 3, name: 'Meera Joshi', initials: 'MJ', marks: '96.2%', stream: 'Commerce', color: '#4AD9A7' },
    { rank: 4, name: 'Vikram Rao', initials: 'VR', marks: '95.8%', stream: 'Science', color: '#D9A74A' },
    { rank: 5, name: 'Tanya Kapoor', initials: 'TK', marks: '95.0%', stream: 'Commerce', color: '#7A4AD9' },
    { rank: 6, name: 'Arjun Das', initials: 'AD', marks: '94.6%', stream: 'Science', color: '#4AD9D9' },
  ]

  const archiveData = [
    {
      year: '2024-25',
      stats: { passRate: '100%', above80: '88%', topScore: '97.8%', average: '84%' },
    },
    {
      year: '2023-24',
      stats: { passRate: '100%', above80: '85%', topScore: '96.4%', average: '82%' },
    },
    {
      year: '2022-23',
      stats: { passRate: '100%', above80: '82%', topScore: '95.6%', average: '81%' },
    },
  ]

  const getRankBadge = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return null
  }

  const toppers = activeTab === 'classX' ? classXToppers : classXIIToppers

  return (
    <main className="results-page">
      <PageBanner title="Results & Achievements" image="./WEBSITE GALLERY/other images/12 th topper .png" />

      {/* Section 1: Board Exam Results Overview */}
      <section className="results-overview">
        <div className="container">
          <h2 className="section-title">CBSE Board Results</h2>
          <div className="divider-line" />
          <p className="results-subtitle">Consistent track record of academic excellence</p>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <a 
              href="./documents%20website/AHWS%20Mandatory%20disclosures/last%20three%20years%20cbse%20result.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md-link"
              style={{ fontSize: '1rem', padding: '10px 20px' }}
            >
              📄 Download Official 3-Year CBSE Result (PDF)
            </a>
          </div>
          <div className="stats-bar">
            {[
              { icon: '🎯', value: '100%', label: 'Pass Rate' },
              { icon: '📊', value: '90%+', label: 'Scored Above 80%' },
              { icon: '⭐', value: '15+', label: 'Students Scored 95%+' },
              { icon: '🏆', value: '85%', label: 'School Average' },
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Class X Results */}
      <section className="results-table-section">
        <div className="container">
          <h2 className="section-title">Class X Results (2025-26)</h2>
          <div className="divider-line" />
          <div className="table-responsive">
            <table className="md-table results-tbl">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Students Appeared</th>
                  <th>Pass %</th>
                  <th>Average Marks</th>
                  <th>Highest Score</th>
                </tr>
              </thead>
              <tbody>
                {classXSubjects.map((row, i) => (
                  <tr key={i}>
                    <td className="subject-name">{row.subject}</td>
                    <td>{row.appeared}</td>
                    <td><span className="pass-badge">{row.passPercent}%</span></td>
                    <td>{row.avgMarks}</td>
                    <td><span className="highest-badge">{row.highest}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Class XII Results */}
      <section className="results-table-section results-table-alt">
        <div className="container">
          <h2 className="section-title">Class XII Results (2025-26)</h2>
          <div className="divider-line" />
          <div className="table-responsive">
            <table className="md-table results-tbl">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Students Appeared</th>
                  <th>Pass %</th>
                  <th>Average Marks</th>
                  <th>Highest Score</th>
                </tr>
              </thead>
              <tbody>
                {classXIISubjects.map((row, i) => (
                  <tr key={i}>
                    <td className="subject-name">{row.subject}</td>
                    <td>{row.appeared}</td>
                    <td><span className="pass-badge">{row.passPercent}%</span></td>
                    <td>{row.avgMarks}</td>
                    <td><span className="highest-badge">{row.highest}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Our Toppers */}
      <section className="toppers-section">
        <div className="container">
          <h2 className="section-title">Our Toppers</h2>
          <div className="divider-line" />
          <div className="toppers-tabs">
            <button
              className={`topper-tab ${activeTab === 'classX' ? 'active' : ''}`}
              onClick={() => setActiveTab('classX')}
            >
              🎓 Class X
            </button>
            <button
              className={`topper-tab ${activeTab === 'classXII' ? 'active' : ''}`}
              onClick={() => setActiveTab('classXII')}
            >
              🎓 Class XII
            </button>
          </div>
          <div className="toppers-grid">
            {toppers.map((topper, i) => (
              <div key={i} className="topper-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="topper-rank-badge">{getRankBadge(topper.rank)}</div>
                <div className="topper-avatar" style={{ background: topper.color }}>
                  {topper.initials}
                </div>
                <h4 className="topper-name">{topper.name}</h4>
                <div className="topper-marks">{topper.marks}</div>
                {topper.stream && <div className="topper-stream">{topper.stream}</div>}
                <div className="topper-rank-label">Rank #{topper.rank}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Year-wise Archive */}
      <section className="archive-section">
        <div className="container">
          <h2 className="section-title">Results Archive</h2>
          <div className="divider-line" />
          <div className="archive-list">
            {archiveData.map((item, i) => (
              <div key={i} className={`archive-item ${openArchive === i ? 'open' : ''}`}>
                <button
                  className="archive-header"
                  onClick={() => setOpenArchive(openArchive === i ? null : i)}
                >
                  <div className="archive-year">
                    <span className="archive-icon">📅</span>
                    Academic Year {item.year}
                  </div>
                  <span className="archive-toggle">{openArchive === i ? '−' : '+'}</span>
                </button>
                {openArchive === i && (
                  <div className="archive-body">
                    <div className="archive-stats">
                      <div className="archive-stat">
                        <span className="archive-stat-label">Pass Rate</span>
                        <span className="archive-stat-value">{item.stats.passRate}</span>
                      </div>
                      <div className="archive-stat">
                        <span className="archive-stat-label">Above 80%</span>
                        <span className="archive-stat-value">{item.stats.above80}</span>
                      </div>
                      <div className="archive-stat">
                        <span className="archive-stat-label">Top Score</span>
                        <span className="archive-stat-value">{item.stats.topScore}</span>
                      </div>
                      <div className="archive-stat">
                        <span className="archive-stat-label">Average</span>
                        <span className="archive-stat-value">{item.stats.average}</span>
                      </div>
                    </div>
                    <a href="#" className="archive-link">View Details →</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
