import './Wellbeing.css'
import PageBanner from '../components/PageBanner'

export default function Wellbeing() {
    const sections = [
    {
      title: "Mentor-Mentee Programme",
      icon: "\uD83E\uDD1D",
      desc: "Our Mentor-Mentee programme ensures that every child is personally known, valued, and guided. Faculty mentors provide academic support, emotional guidance, and serve as the primary link between the school and parents."
    },
    {
      title: "Student Well-being & Counselling",
      icon: "\uD83E\uDDE0",
      desc: "We provide dedicated on-campus counselors and safe spaces where students can talk freely about academic stress, peer relationships, and emotional struggles without judgment."
    },
    {
      title: "Life Skills Education",
      icon: "\uD83C\uDF31",
      desc: "Integrated into our daily curriculum, we teach essential life skills such as resilience, financial literacy, effective communication, and critical problem-solving to prepare students for the real world."
    },
    {
      title: "Health & Nutrition",
      icon: "\uD83C\uDF4E",
      desc: "Our 'Nourish Room' and robust physical education programs ensure students develop healthy eating habits. We conduct regular health checkups and promote a balanced, active lifestyle."
    },
    {
      title: "Values & Character Building",
      icon: "\uD83C\uDF1F",
      desc: "Through our 'We Teach Life' initiative and daily mindfulness practices, we actively instill core values like empathy, respect, integrity, and gratitude into our students' daily lives."
    },
    {
      title: "Inclusion & Diversity",
      icon: "\uD83C\uDF08",
      desc: "AHWS is a safe haven for every child. We strictly enforce anti-bullying policies and offer tailored support for special educational needs, ensuring an inclusive environment where everyone thrives."
    }
  ]

  return (
    <main className="wellbeing-page">
      <PageBanner 
        title="Well-being & Mentoring" 
        image="./WEBSITE GALLERY/other images/First-Aid education.jpeg"
      />

      <section className="wellbeing-intro-section" id="overview">
        <div className="container">
          <div className="wb-intro-content">
            <h2 className="section-title">Nurturing Minds, Building Character</h2>
            <div className="divider-line" />
            <p className="wb-lead-text">
              At Academic Heights World School, we believe that education extends far beyond academics. 
              Our holistic approach prioritizes the emotional, mental, and physical well-being of every student. 
              By providing robust mentoring and an inclusive, safe environment, we empower our students to grow into confident, resilient, and compassionate individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="wellbeing-grid-section">
        <div className="container">
          <div className="wb-grid">
            {sections.map((sec, idx) => (
              <div key={idx} className="wb-card" id={sec.title.includes("Mentor") ? "mentor-mentee" : sec.title.includes("Life") ? "life-skills" : ""}>
                <div className="wb-card-icon">{sec.icon}</div>
                <h3 className="wb-card-title">{sec.title}</h3>
                <p className="wb-card-desc">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Counselling Team Highlight (Optional integration) */}
                  <section className="counsellor-section" id="counselling-team">
        <div className="container">
          <div className="counsellor-box">
            <h2>Meet Our Wellness & Counseling Team</h2>
            <p>Our dedicated wellness and counseling team provides expert guidance to support emotional health, stress management, and personal development for both students and parents.</p>
            
            <div className="counsellor-profiles">
              <div className="counsellor-profile">
                <div className="counsellor-img-wrap">
                  <img src="./images/dr-rashmi.jpg" alt="Dr. Rashmi Bajaj Singh" className="counsellor-img" />
                </div>
                <h4>Dr. Rashmi Bajaj Singh</h4>
                <span className="counsellor-role">Senior Counselor</span>
              </div>
              <div className="counsellor-profile">
                <div className="counsellor-img-wrap">
                  <img src="./images/dr-rekha.jpg" alt="Dr. Rekha Jha" className="counsellor-img" />
                </div>
                <h4>Dr. Rekha Jha</h4>
                <span className="counsellor-role">Counselor</span>
              </div>
              <div className="counsellor-profile">
                <div className="counsellor-img-wrap">
                  <img src="./images/ms-urvashi.jpg" alt="Ms. Urvashi" className="counsellor-img" />
                </div>
                <h4>Ms. Urvashi</h4>
                <span className="counsellor-role">Counselor</span>
              </div>
            </div>

            <div className="counsellor-gallery">
              <div className="cg-item">
                <img src="./images/counseling-parents.jpg" alt="Counseling Session with Parents" className="cg-img" />
                <h5>Support for Parents</h5>
              </div>
              <div className="cg-item">
                <img src="./images/counseling-students.jpg" alt="Counseling Session with Students" className="cg-img" />
                <h5>Support for Students</h5>
              </div>
            </div>

            <a href="#/contact" className="btn-primary-ahws" style={{ marginTop: '30px' }}>Reach Out for Support</a>
          </div>
        </div>
      </section>

    </main>
  )
}






