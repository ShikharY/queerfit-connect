import { useState } from 'react';
import './Courses.css';

interface Course {
  id: number;
  name: string;
  description: string;
  language: 'English' | 'German';
  level: string;
  instructor: string;
  instructorBio: string;
  location: string;
  time: string;
  genderNeutralBathroom: boolean;
  reviews: { author: string; rating: number; comment: string }[];
  participantCount: number;
  rating: number;
}

const dummyCourses: Course[] = [
  {
    id: 1,
    name: 'Yoga for All',
    description: 'Relaxing yoga session open to everyone. Perfect for beginners and experienced practitioners.',
    language: 'English',
    level: 'Beginner',
    instructor: 'Alex',
    instructorBio: 'Alex is a certified yoga instructor with 8 years of experience in creating inclusive spaces for LGBTQ+ communities.',
    location: 'Fitness Center Bayreuth',
    time: 'Mon 7 PM',
    genderNeutralBathroom: true,
    reviews: [
      { author: 'Sam', rating: 5, comment: 'Welcoming and supportive environment!' },
      { author: 'Jordan', rating: 5, comment: 'Best yoga class I\'ve attended.' },
    ],
    participantCount: 12,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'HIIT Workout',
    description: 'High-intensity interval training to build strength and endurance.',
    language: 'German',
    level: 'Intermediate',
    instructor: 'Maria',
    instructorBio: 'Maria is a passionate fitness trainer dedicated to empowering queer individuals through fitness.',
    location: 'Gym Plus',
    time: 'Wed 6 PM',
    genderNeutralBathroom: true,
    reviews: [
      { author: 'Alex', rating: 4, comment: 'Great workout, very inclusive!' },
    ],
    participantCount: 8,
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Dance Fitness',
    description: 'Fun dance moves to get fit. No experience necessary!',
    language: 'English',
    level: 'All Levels',
    instructor: 'Jordan',
    instructorBio: 'Jordan loves bringing joy and energy to fitness classes while building community.',
    location: 'Dance Studio',
    time: 'Fri 8 PM',
    genderNeutralBathroom: false,
    reviews: [
      { author: 'Casey', rating: 5, comment: 'So much fun and inclusive!' },
      { author: 'Morgan', rating: 5, comment: 'Love the energy!' },
    ],
    participantCount: 15,
    rating: 5.0,
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  if (selectedCourse) {
    return (
      <div className="courses-container">
        <div className="detail-header">
          <button className="back-button" onClick={() => setSelectedCourse(null)}>← Back</button>
        </div>
        <div className="detail-content">
          <h1>{selectedCourse.name}</h1>
          <div className="detail-meta">
            <div className="rating-box">
              <span className="stars">{'⭐'.repeat(Math.round(selectedCourse.rating))}</span>
              <span className="rating-num">{selectedCourse.rating}</span>
            </div>
            <div className="participants">👥 {selectedCourse.participantCount} participants</div>
          </div>
          
          <div className="tags">
            <span className={`tag language ${selectedCourse.language.toLowerCase()}`}>{selectedCourse.language}</span>
            <span className="tag level">{selectedCourse.level}</span>
            {selectedCourse.genderNeutralBathroom && <span className="tag bathroom">🚻 Gender-Neutral Bathrooms</span>}
          </div>

          <div className="detail-section">
            <h2>About</h2>
            <p>{selectedCourse.description}</p>
            <p><strong>📍 Location:</strong> {selectedCourse.location}</p>
            <p><strong>⏰ Time:</strong> {selectedCourse.time}</p>
          </div>

          <div className="detail-section">
            <h2>Instructor</h2>
            <div className="instructor-card">
              <h3>{selectedCourse.instructor}</h3>
              <p>{selectedCourse.instructorBio}</p>
            </div>
          </div>

          <div className="detail-section">
            <h2>Reviews ({selectedCourse.reviews.length})</h2>
            {selectedCourse.reviews.length > 0 ? (
              selectedCourse.reviews.map((review, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-header">
                    <strong>{review.author}</strong>
                    <span className="review-stars">{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Discover Classes</h1>
        <p>Find your perfect queer-friendly fitness experience</p>
      </div>
      
      <div className="courses-feed">
        {dummyCourses.map(course => (
          <div
            key={course.id}
            className="course-feed-item"
            onClick={() => setSelectedCourse(course)}
          >
            <div className="course-header">
              <div>
                <h3>{course.name}</h3>
                <p className="course-instructor">by {course.instructor}</p>
              </div>
              <div className="course-rating">
                <span className="rating-badge">{course.rating}</span>
              </div>
            </div>

            <p className="course-description">{course.description}</p>

            <div className="course-meta">
              <span className="meta-item">📍 {course.location}</span>
              <span className="meta-item">⏰ {course.time}</span>
              <span className="meta-item">👥 {course.participantCount}</span>
            </div>

            <div className="course-tags">
              <span className={`mini-tag language ${course.language.toLowerCase()}`}>{course.language}</span>
              <span className="mini-tag level">{course.level}</span>
              {course.genderNeutralBathroom && <span className="mini-tag bathroom">🚻</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;