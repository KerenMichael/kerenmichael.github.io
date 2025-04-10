import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <img src="image.png" alt="Keren Michael" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg" />
          <h1 className="text-4xl font-bold">Dr. Keren Michael</h1>
          <p className="text-lg text-gray-600 mt-2">
            Senior Lecturer | Department of Human Services & Social Work<br />
            Max Stern Yezreel Valley College, Israel
          </p>
        </header>

        <nav className="mb-12 text-center">
          <ul className="flex flex-wrap justify-center gap-4 text-blue-700 text-lg font-medium">
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

        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a senior lecturer at the Max Stern Yezreel Valley College in the Departments of Human Services and Social Work. My work bridges academic research, community outreach, and clinical practice, with expertise in stress, resilience, well-being, and coping mechanisms.
          </p>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Research & Publications</h2>
          <p>
            My research addresses psychological resilience and social adaptation in adolescents and professionals. I have authored peer-reviewed articles in international journals, exploring coping, burnout, and mental health in educational and medical contexts.
          </p>
        </section>

        <section id="teaching" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Teaching</h2>
          <p>
            I teach courses on adolescent development, group dynamics, and crisis intervention, blending theoretical knowledge with practical applications to empower students in human services.
          </p>
        </section>
        <section id="grants" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Grants & Projects</h2>
          <ul className="list-disc list-inside">
            <li>Resilience and Stress During the Iron Swords War – longitudinal research project (PI)</li>
            <li>Mental health and moral courage among medical students – collaborative study</li>
            <li>Group supervision for youth-protection social workers – intervention & evaluation</li>
            <li>Organizational burnout and commitment in nonprofit agencies</li>
          </ul>
        </section>

        <section id="awards" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Awards & Scholarships</h2>
          <ul className="list-disc list-inside">
            <li>President’s Scholarship for Doctoral Students, University of Haifa</li>
            <li>Academic Excellence Award, M.S.Y.V. College</li>
            <li>Travel Grants for international conferences (ICOPH, ICQI, IACCP)</li>
          </ul>
        </section>

        <section id="conferences" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Conferences & Presentations</h2>
          <p>Selected presentations:</p>
          <ul className="list-disc list-inside">
            <li>"Moral courage in clinical practice" – ICOPH, Thailand</li>
            <li>"Group supervision in youth protection" – ICQI, USA</li>
            <li>"Stress and resilience under war" – NIHP Conference, Israel</li>
            <li>"Ethnic identity and youth risk" – IACCP (Virtual)</li>
          </ul>
        </section>

        <section id="editorial" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Editorial & Reviewer Roles</h2>
          <p>
            I serve as a peer reviewer for multiple journals including Plos One, BMC Psychology, and the Journal of Adolescent Research. I participate in academic editorial boards and ethics committees.
          </p>
        </section>

        <section id="roles" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Academic Leadership</h2>
          <ul className="list-disc list-inside">
            <li>Member, Teaching & Ethics Committees</li>
            <li>Chair, Admissions Committee for B.A. in Human Services</li>
            <li>Coordinator, Student Supervision and Evaluation</li>
          </ul>
        </section>
        <section id="community" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
          <ul className="list-disc list-inside">
            <li>Volunteer trauma counselor during COVID-19 and Iron Swords War</li>
            <li>Lectures and outreach to parents, youth, and educators</li>
            <li>Municipal committee member for youth welfare and violence prevention</li>
          </ul>
        </section>

        <section id="contact" className="text-center mt-16">
          <a
            href="mailto:kerenmi@yvc.ac.il"
            className="inline-block bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow hover:bg-blue-800"
          >
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
}


