import './NoticeBoard.css'
import PageBanner from '../components/PageBanner'

export default function NoticeBoard() {
  const isRecent = (day, month) => {
    const noticeDate = new Date(`2026 ${month} ${day}`);
    const today = new Date();
    const diffTime = Math.abs(today - noticeDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const notices = [
    { day: '28', month: 'Jun', title: 'Summer Vacation Notice', desc: 'Summer vacation will commence from July 1st to July 31st, 2026. School reopens on August 1st.' },
    { day: '25', month: 'Jun', title: 'Parent-Teacher Meeting Schedule', desc: 'PTM for classes I–V on July 5th and classes VI–XII on July 6th, 2026. Timings: 9:00 AM – 1:00 PM.' },
    { day: '20', month: 'Jun', title: 'Annual Day Announcement', desc: 'The Annual Day celebration is scheduled for December 18th, 2026. Rehearsals begin in November.' },
    { day: '15', month: 'Jun', title: 'Fee Payment Reminder', desc: 'Parents are requested to clear all pending fee dues for the current quarter by June 30th, 2026.' },
    { day: '10', month: 'Jun', title: 'Admissions Open 2027–28', desc: 'Applications are now being accepted for Nursery to Class IX for the academic session 2027–28.' },
    { day: '05', month: 'Jun', title: 'Holiday Notice – Eid ul-Adha', desc: 'School will remain closed on June 7th & 8th, 2026 on account of Eid ul-Adha. Regular classes resume June 9th.' },
  ].map(notice => ({ ...notice, isNew: isRecent(notice.day, notice.month) }));

  const upcomingEvents = [
    { date: 'August 15, 2026', name: 'Independence Day Celebration', desc: 'Flag hoisting ceremony followed by cultural performances, patriotic songs, and a special address by the chief guest.', venue: '📍 School Main Ground' },
    { date: 'September 5, 2026', name: "Teacher's Day Celebration", desc: 'Students honour their teachers with heartfelt performances, skits, and a special assembly dedicated to educators.', venue: '📍 School Auditorium' },
    { date: 'October 10, 2026', name: 'Annual Sports Day', desc: 'A day of athletic excellence featuring track & field events, inter-house competitions, and march past.', venue: '📍 Sports Complex' },
    { date: 'November 8, 2026', name: 'Science Exhibition', desc: 'Students showcase innovative science projects and working models across all disciplines.', venue: '📍 Science Block' },
    { date: 'December 18, 2026', name: 'Annual Day Function', desc: 'Grand cultural extravaganza featuring dance, drama, music performances, and prize distribution ceremony.', venue: '📍 School Auditorium' },
    { date: 'December 24, 2026', name: 'Winter Carnival', desc: 'A fun-filled carnival with food stalls, games, art exhibitions, and a special Secret Santa activity.', venue: '📍 School Campus' },
  ]

  const circulars = [
    { date: 'June 28, 2026', title: 'Summer Vacation Schedule & Homework Guidelines', file: './documents%20website/Academic%20Planner%20(2026-27).pdf' },
    { date: 'June 20, 2026', title: 'Annual Day Preparation – Participation Consent Form', file: './documents%20website/SCHOOL%20EVENTS%20-%20DR%20REKHA.pdf' },
    { date: 'June 15, 2026', title: 'Fee Structure Revision for Academic Year 2026–27', file: './documents%20website/AHWS%20Mandatory%20disclosures/Fee%20structure-%20Mandatory%20Disclosure.pdf' },
    { date: 'June 10, 2026', title: 'Admission Circular – Session 2027–28', file: './documents%20website/Enquiry%20form%20-AHWS%20FINAL.pdf' },
    { date: 'May 25, 2026', title: 'Examination Schedule – First Term 2026–27', file: './documents%20website/HVM%20Syllabus%20Class%201-12-%202026-27.pdf' },
    { date: 'May 15, 2026', title: 'POCSO Act – School Compliance Circular', file: './documents%20website/POCSO%20ACT%20circular.pdf' },
  ]

  return (
    <main className="noticeboard-page">
      <PageBanner title="School Notice Board & Circulars" image="./WEBSITE GALLERY/1st Day of 2026/WhatsApp Image 2026-01-01 at 4.29.58 PM.jpeg" />

      {/* ───── Academic Calendar Banner ───── */}
      <section className="calendar-banner-section">
        <div className="container">
          <div className="calendar-banner">
            <div className="calendar-text">
              <h3>📅 Academic Calendar 2026-27</h3>
              <p>Download the complete academic schedule, including holidays and exam dates.</p>
            </div>
            <a href="./documents%20website/Academic%20Planner%20(2026-27).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download PDF</a>
          </div>
        </div>
      </section>

      {/* ───── Notice Board Section ───── */}
      <section className="events-notices">
        <div className="container">
          <h2 className="section-title" id="notices">📢 Notice Board</h2>
          <div className="divider-line" />
          <div className="notices-list">
            {notices.map((n, i) => (
              <div className="notice-item" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="notice-date-badge">
                  <span className="notice-day">{n.day}</span>
                  <span className="notice-month">{n.month}</span>
                </div>
                <div className="notice-body">
                  <h4 className="notice-title">
                    {n.title}
                    {n.isNew && <span className="new-badge">NEW</span>}
                  </h4>
                  <p className="notice-desc">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Upcoming Events Section ───── */}
      <section className="events-upcoming">
        <div className="container">
          <h2 className="section-title" id="upcoming-events">🗓️ Upcoming Events</h2>
          <div className="divider-line" />
          <div className="upcoming-grid">
            {upcomingEvents.map((ev, i) => (
              <div className="upcoming-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="upcoming-card-inner">
                  <span className="upcoming-date">{ev.date}</span>
                  <h4 className="upcoming-name">{ev.name}</h4>
                  <p className="upcoming-desc">{ev.desc}</p>
                  <span className="upcoming-venue">{ev.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── School Circulars Section ───── */}
      <section className="events-circulars bg-light">
        <div className="container">
          <h2 className="section-title" id="circulars">📜 School Circulars</h2>
          <div className="divider-line" />
          <div className="circulars-table-wrap">
            <table className="circulars-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Circular Title</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {circulars.map((c, i) => (
                  <tr key={i} style={{ animationDelay: `${i * 0.06}s` }}>
                    <td className="circ-date">{c.date}</td>
                    <td className="circ-title">{c.title}</td>
                    <td>
                      <a href={c.file} className="circ-download" target="_blank" rel="noreferrer">
                        📄 PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
