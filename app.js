import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 py-4 px-6 border-b">
        <ul className="flex flex-wrap justify-center gap-4 text-blue-700 text-sm md:text-lg font-medium">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#research" className="hover:underline">Research</a></li>
          <li><a href="#teaching" className="hover:underline">Teaching</a></li>
          <li><a href="#grants" className="hover:underline">Grants</a></li>
          <li><a href="#awards" className="hover:underline">Awards</a></li>
          <li><a href="#conferences" className="hover:underline">Conferences</a></li>
          <li><a href="#editorial" className="hover:underline">Editorial</a></li>
          <li><a href="#roles" className="hover:underline">Academic Roles</a></li>
          <li><a href="#community" className="hover:underline">Community</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-12">
        <header className="text-center mb-12">
          <img src="image.png" alt="Keren Michael" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 shadow-lg" />
          <h1 className="text-3xl md:text-4xl font-bold">Dr. Keren Michael</h1>
          <p className="text-md md:text-lg text-gray-600 mt-2">
            Senior Lecturer | Department of Human Services & Social Work<br />
            Max Stern Yezreel Valley College, Israel
          </p>
        </header>
      </div>
    </div>
  );
}

ReactDOM.render(<HomePage />, document.getElementById('root'));