import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Home() {
  return (
    <div className="text-center mt-4">
      <h2 className="mb-3">Welcome to the Home Page</h2>

      {/* External Link */}
      <p>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="btn btn-primary m-1">
          Go to React Docs
        </a>
      </p>

      {/* Document Links */}
      <p>
        <a href="/files/guide.pdf" target="_blank" className="btn btn-success m-1">
          Download Guide (PDF)
        </a>
        <a href="/files/manual.docx" target="_blank" className="btn btn-warning m-1">
          Download Manual (DOCX)
        </a>
      </p>

      {/* Section Links */}
      <p>
        <a href="#section1" className="btn btn-info m-1">Jump to Section 1</a>
        <a href="#section2" className="btn btn-danger m-1">Jump to Section 2</a>
      </p>

      {/* Sections */}
      <div style={{ marginTop: "200px" }} id="section1" className="alert alert-primary">
        <h3>Section 1</h3>
        <p>This is a specific point in the page.</p>
      </div>

      <div style={{ marginTop: "200px" }} id="section2" className="alert alert-secondary">
        <h3>Section 2</h3>
        <p>This is another section created for the lab task.</p>
      </div>
    </div>
  );
}

function Services() {
  return <h2>Our Services Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">My React Lab</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
