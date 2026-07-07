import { useState } from 'react'
import './Blog.css'
import PageBanner from '../components/PageBanner'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  const categories = ['All', 'Academics & Pedagogy', 'Technology & AI', 'Student Life', 'Sports & Fitness']

  const allBlogs = [
    { 
      id: 1,
      title: 'The Importance of Holistic Education in the 21st Century', 
      category: 'Academics & Pedagogy',
      excerpt: 'Discover how holistic education prepares students for future challenges beyond academic success, focusing on emotional intelligence and critical thinking.', 
      img: 'https://ahws.edu.in/images/slider-1.webp' 
    },
    { 
      id: 2,
      title: 'Integrating Technology & AI in Modern Classrooms', 
      category: 'Technology & AI',
      excerpt: 'A look into how smart classrooms, interactive 3D panels, and robotics labs enhance learning retention and engagement among young minds.', 
      img: 'https://ahws.edu.in/images/slider-2.webp' 
    },
    { 
      id: 3,
      title: 'Extracurricular Activities: Shaping Well-Rounded Personalities', 
      category: 'Student Life',
      excerpt: 'Why sports, performing arts, and music are just as crucial as mathematics and science in early child development.', 
      img: 'https://ahws.edu.in/images/slider-3.webp' 
    },
    { 
      id: 4,
      title: 'Fostering Entrepreneurial Leadership with Decode Startup', 
      category: 'Academics & Pedagogy',
      excerpt: 'How our signature Decode Startup program teaches young learners business modeling, pitch presentations, and innovative problem solving.', 
      img: './WEBSITE GALLERY/other images/smart class room with 3D modes in the smart screen .jpeg' 
    },
    { 
      id: 5,
      title: 'Nurturing Physical Fitness & Team Spirit Through Sports', 
      category: 'Sports & Fitness',
      excerpt: 'From basketball arenas to taekwondo and cricket, explore how sports build resilience, stamina, and lifelong sportsmanship.', 
      img: './images/Basketball 1.jpeg' 
    },
    { 
      id: 6,
      title: 'Language Mastery & Confidence in Words Worth Language Lab', 
      category: 'Technology & AI',
      excerpt: 'Eliminating mother tongue interference and developing fluent public speaking skills using interactive digital audio tools.', 
      img: './WEBSITE GALLERY/other images/Computer lab.jpg' 
    },
    { 
      id: 7,
      title: 'Overcoming Stage Fear Through Theater & Expression', 
      category: 'Student Life',
      excerpt: 'How stage exposure and character portrayal help children build empathy, expressiveness, and unshakeable self-confidence.', 
      img: './WEBSITE GALLERY/other images/kids Dance .jpg' 
    }
  ]

  // Filter blogs based on selected category
  const filteredBlogs = activeCategory === 'All' 
    ? allBlogs 
    : allBlogs.filter(b => b.category === activeCategory)

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    document.getElementById('blog-top-heading')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="blog-page">
      <PageBanner title="School Blogs" image="./WEBSITE GALLERY/other images/Kids walking to school .png" />

      <section className="blog-section">
        <div className="container">
          <div id="blog-top-heading">
            <h2 className="section-title">Articles</h2>
            <div className="divider-line" />
          </div>

          {/* Category Filter Bar */}
          <div className="blog-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="blog-grid">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="blog-card fade-in-up">
                <div className="blog-img-wrap">
                  <img src={blog.img} alt={blog.title} loading="lazy" />
                  <span className="blog-category-tag">{blog.category}</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <button className="blog-read-more">Read More <span>â†’</span></button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="blog-pagination">
              <button 
                className="pagination-btn prev"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                â† Previous
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`page-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button 
                className="pagination-btn next"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next â†’
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  )
}
