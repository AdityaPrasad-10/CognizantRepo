import { useState } from 'react';
import './App.css';
import BlogDetails from './components/BlogDetails';
import BookDetails from './components/BookDetails';
import CourseDetails from './components/CourseDetails';
import { books } from './data/books';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlog, setShowBlog] = useState(true);
  const [showCourse, setShowCourse] = useState(true);

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <div>
        <h1>Book Details</h1>
        {showBooks ? <BookDetails books={books} /> : <p>Books hidden</p>}
      </div>

      <div>
        <h1>Blog Details</h1>
        <BlogDetails showBlog={showBlog} />
      </div>

      <div>
        <h1>Course Details</h1>
        <CourseDetails showCourse={showCourse} />
      </div>
    </div>
  );
}

export default App;
