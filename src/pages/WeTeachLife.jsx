import { useInView } from 'react-intersection-observer'
import PageBanner from '../components/PageBanner'
import './WeTeachLife.css'

/* ─── Section data ─────────────────────────────────────────────────── */
const sections = [
  {
    id: 'community',
    label: 'Community',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#002147" strokeWidth="1.8"/>
        <circle cx="15" cy="7" r="3" stroke="#FFC700" strokeWidth="1.8"/>
        <path d="M3 20c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" stroke="#002147" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    quote: 'Alone we can do little; together we can do so much.',
    quoteBy: 'Helen Keller',
    accent: '#002147',
    image: './WEBSITE GALLERY/AHWS Baby Show (02-10-2024)/DSC_0200.jpeg',
    body: `A child's growth is closely connected to the strength of the community around them. At Academic Heights World School, we work to create an inclusive, caring community where every student, parent and teacher feels valued and genuinely part of something bigger. We believe children learn best when people respect one another, work together and share a sense of purpose.\n\nWhen you become part of the Academic Heights World School family, you become part of a community that cares about your child and wants to see them thrive. We encourage parents, teachers and students to work closely together because children grow best when the people around them are connected. Here, your child will have people who know them, encourage them and stand by them.`,
  },
  {
    id: 'parents',
    label: 'Parents',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 21c-4.5-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-3.5 7-8 11z" stroke="#FFC700" strokeWidth="1.8" fill="#fff5cc"/>
        <circle cx="12" cy="10" r="2.5" stroke="#002147" strokeWidth="1.8"/>
      </svg>
    ),
    quote: 'The child is both a hope and a promise for mankind.',
    quoteBy: 'Maria Montessori',
    accent: '#FFC700',
    image: './WEBSITE GALLERY/RWA Health Check-up Camp (28-09-2025)/WhatsApp Image 2025-09-28 at 1.50.55 PM.jpeg',
    body: `We know that parents are a child's first and most important teachers. Your hopes for your child, the values you want them to carry and the future you imagine for them all matter to us. We do not try to take your place. We work alongside you, as trusted partners who can support your child's learning and growth.\n\nWe value your thoughts, we listen to your concerns and we welcome your involvement in your child's education. We believe children benefit most when families and schools work as partners. When you choose Academic Heights World School, you place an important trust in us, and we take that trust seriously. Your hopes for your child become part of what we work towards every day.`,
  },
  {
    id: 'educators',
    label: 'Educators',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="13" rx="2" stroke="#002147" strokeWidth="1.8"/>
        <path d="M8 19l4 2 4-2" stroke="#002147" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 11h6M9 8h4" stroke="#FFC700" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    quote: 'A teacher affects eternity; he can never tell where his influence stops.',
    quoteBy: 'Henry Brooks Adams',
    accent: '#002147',
    image: './WEBSITE GALLERY/AHWS Baby Show (02-10-2024)/DSC_0257.jpeg',
    body: `Behind every great student is a teacher who believes in them. At Academic Heights World School, our educators are more than instructors; they are mentors, guides and lifelong learners who genuinely enjoy helping young minds grow. We are proud of our dedicated team and the care they bring to each child, from everyday encouragement to meaningful individual attention.\n\nWe choose our educators for their knowledge, warmth and commitment to the whole child. They create classrooms where curiosity is encouraged, questions are welcomed and children feel comfortable being themselves. Your child will be known, listened to and challenged to grow by teachers who care about their progress and their potential.`,
  },
  {
    id: 'helpers',
    label: 'Helpers',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l2 5h5l-4 3 1.5 5L12 13l-4.5 3L9 11 5 8h5z" stroke="#FFC700" strokeWidth="1.6" fill="#fff5cc"/>
      </svg>
    ),
    quote: 'Everyone can be great because everyone can serve.',
    quoteBy: 'Martin Luther King Jr.',
    accent: '#FFC700',
    image: './WEBSITE GALLERY/Gurupurab Celebration (04-11-2025)/IMG_20251104_083911.jpeg',
    body: `A school works because of many people, including those who often work quietly behind the scenes. At Academic Heights World School, our support staff help keep the school clean, welcoming and ready for learning each day. Their work may happen in the background, but it has a real impact on the experience children have at school.\n\nFrom the warm welcome at the front desk to the care taken throughout our classrooms and hallways, our staff work hard to make the school feel comfortable and well cared for. They are here to help, to keep things running smoothly and, most importantly, to help your child feel happy and supported during the school day.`,
  },
  {
    id: 'environment',
    label: 'Environment',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 4 6 4 10c0 5 5 10 8 12 3-2 8-7 8-12 0-4-4-8-8-8z" stroke="#002147" strokeWidth="1.8" fill="#e8f5e9"/>
        <path d="M9 13c1-2 3-3 3-3s2 1 3 3" stroke="#002147" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    quote: 'Space is the breath of art.',
    quoteBy: 'Frank Lloyd Wright',
    accent: '#002147',
    image: './images/Green campus.png',
    body: `Children learn best when they feel safe, comfortable and inspired by the space around them. At Academic Heights World School, our environment is designed to encourage curiosity, creativity and a sense of discovery. Our classrooms are airy and welcoming, our green spaces give children room to breathe, and every part of the campus is planned with their experience in mind.\n\nA thoughtful learning environment can help children feel calmer, stay focused and enjoy their time at school. We take pride in keeping our spaces clean, comfortable and well equipped for learning, while also giving students opportunities to spend time outdoors and connect with nature. We want every child to walk into school each day feeling that they are in a place where they can learn and belong.`,
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="#FFC700" strokeWidth="1.7" fill="#fff5cc"/>
      </svg>
    ),
    quote: 'Skills make you valuable.',
    quoteBy: 'Jim Rohn',
    accent: '#FFC700',
    image: './WEBSITE GALLERY/other images/Technology_and_App_010.jpg',
    body: `In a changing world, knowledge alone is not enough. At Academic Heights World School, we also help students build practical skills they can carry into everyday life. These include critical thinking, problem-solving, communication, collaboration and the confident use of technology. Our learning experiences are designed to prepare children for real situations, not simply for tests.\n\nFrom learning how to think deeply and speak with confidence to creating art and working as part of a team, students are encouraged to build a broad range of abilities. Along the way, they develop confidence, flexibility and the belief that they can keep learning and improving. These are qualities that can continue to serve them long after school.`,
  },
  {
    id: 'extra-curricular',
    label: 'Extra Curricular',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#002147" strokeWidth="1.8"/>
        <path d="M12 7v5l3 3" stroke="#FFC700" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    quote: 'Every child is an artist. The problem is how to remain an artist once we grow up.',
    quoteBy: 'Pablo Picasso',
    accent: '#002147',
    image: './WEBSITE GALLERY/other images/kid making art 02.png',
    body: `We believe school should give children opportunities to discover interests beyond the regular classroom. At Academic Heights World School, our co-curricular activities give students space to try new things, discover what they enjoy and learn how to work with others. These experiences are an important part of becoming a confident, well-rounded individual.\n\nTaking part in activities outside the classroom teaches children how to cooperate, stay committed and keep going when something is difficult. It also gives them chances to build confidence, friendships and memories they will carry with them. With guidance from our staff, students can explore new interests at their own pace and discover new sides of themselves.`,
  },
  {
    id: 'motivation',
    label: 'Motivation & Inspiration',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.5 4.5H18l-3.75 2.75 1.5 4.5L12 11l-3.75 2.75 1.5-4.5L6 6.5h4.5z" stroke="#FFC700" strokeWidth="1.7" fill="#fff5cc"/>
        <path d="M12 14v6M9 17h6" stroke="#002147" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    quote: 'Nothing will work unless you do.',
    quoteBy: 'Maya Angelou',
    accent: '#FFC700',
    image: './WEBSITE GALLERY/Dental Check-up Drive (13-05-2026)/IMG_1062.jpeg',
    body: `A child's mindset can make a meaningful difference to how they approach learning and challenges. At Academic Heights World School, we want students to believe in their ability to grow, to keep going when things are difficult and to have the courage to try again. We celebrate effort and resilience, not just outcomes.\n\nThrough assemblies, stories, encouragement and personal mentoring, we help students develop the confidence to face challenges and pursue their goals. We teach them that setbacks are part of learning and that mistakes can become opportunities to improve. We want every child to leave Academic Heights World School with knowledge, but also with a strong belief in their own ability to learn and grow.`,
  },
  {
    id: 'gratitude',
    label: 'Gratitude',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 21l-1.5-1.35C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.5 11.15L12 21z" stroke="#002147" strokeWidth="1.8" fill="#fff0f0"/>
      </svg>
    ),
    quote: 'In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.',
    quoteBy: 'Dietrich Bonhoeffer',
    accent: '#002147',
    image: './WEBSITE GALLERY/Sports Day (17-02-2026)/IMG_20260217_101527.jpeg',
    body: `We believe gratitude can shape the way children see themselves, other people and the world around them. At Academic Heights World School, we encourage students to notice and appreciate the people, opportunities and experiences that enrich their lives. In doing so, we nurture kindness, empathy and a generous spirit.\n\nAs children learn to be grateful, they can become more aware of the people who support them and more thoughtful in the way they treat others. Gratitude can encourage empathy, resilience and a positive outlook through both good days and difficult ones. At Academic Heights World School, we want academic growth to go hand in hand with becoming a thoughtful, caring human being who can make a positive difference in the world.`,
  },
]

/* ─── Single section component ─────────────────────────────────────── */
function LifeSection({ section, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })
  const isEven = index % 2 === 0

  return (
    <section
      id={section.id}
      ref={ref}
      className={`wtl-section ${isEven ? 'wtl-section--normal' : 'wtl-section--reverse'} ${inView ? 'wtl-visible' : ''}`}
    >
      <div className="container wtl-section-inner">
        {/* Text side */}
        <div className="wtl-text-side">
          <h2 className="wtl-section-title">{section.label}</h2>
          <div className="wtl-divider" style={{ background: `linear-gradient(90deg, ${section.accent}, ${section.accent === '#002147' ? '#FFC700' : '#002147'})` }} />
          <blockquote className="wtl-quote">
            <span className="wtl-quote-mark">"</span>
            {section.quote}
            <cite className="wtl-quote-by">— {section.quoteBy}</cite>
          </blockquote>
          {section.body.split('\n\n').map((para, i) => (
            <p key={i} className="wtl-body">{para}</p>
          ))}
        </div>

        {/* Image side */}
        <div className="wtl-image-side">
          <div className="wtl-image-frame">
            <img
              src={section.image}
              alt={section.label}
              loading="lazy"
              onError={e => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement.classList.add('wtl-image-placeholder')
              }}
            />
            <div className="wtl-image-badge" style={{ background: section.accent }}>
              {section.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function WeTeachLife() {
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <PageBanner
        title="We Teach Life"
      />

      {/* Intro hero strip */}
      <div ref={introRef} className={`wtl-intro ${introInView ? 'wtl-visible' : ''}`}>
        <div className="container wtl-intro-inner">
          <div className="wtl-intro-text">
            <h1 className="wtl-intro-heading">We Teach Life</h1>
            <p>
              At Academic Heights World School, we believe education should prepare children for more than exams.
              It should prepare them for <em>life</em>. Our aim is to help every child grow into a kind, confident
              and capable person who can adapt to a world that is constantly changing. Every lesson, conversation
              and experience is designed to help them become ready for whatever tomorrow brings.
            </p>
            <p>
              Choosing Academic Heights World School means choosing more than strong academics. It means choosing a
              school that will walk alongside your child as they grow. We care about their minds, their character
              and their sense of who they are. At Academic Heights World School, we do not simply teach subjects;
              we help children learn how to live well.
            </p>
          </div>
        </div>
      </div>

      {/* Quick nav pills */}
      <nav className="wtl-nav" aria-label="Page sections">
        <div className="container">
          <ul className="wtl-nav-list">
            {sections.map(s => (
              <li key={s.id}>
                <button 
                  onClick={() => {
                    const el = document.getElementById(s.id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80; // Offset for sticky nav
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }} 
                  className="wtl-nav-pill"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* All sections */}
      <main className="wtl-main">
        {sections.map((section, i) => (
          <LifeSection key={section.id} section={section} index={i} />
        ))}
      </main>

      {/* CTA strip */}
      <div className="wtl-cta">
        <div className="container wtl-cta-inner">
          <h2 className="wtl-cta-title">Give Your Child the Gift of a Grateful Heart</h2>
          <p className="wtl-cta-sub">
            Enrol at Academic Heights World School and help nurture a lifetime of growth, happiness and purpose.
          </p>
          <a href="#/admission" className="btn-primary-ahws">Apply for Admission</a>
        </div>
      </div>
    </>
  )
}
