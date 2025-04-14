// Placeholder for potential React logic
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Fixed top navbar */}
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
          <img src="https://kerenmichael.github.io/image.png" alt="Keren Michael" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 shadow-lg" />
          <h1 className="text-3xl md:text-4xl font-bold">Dr. Keren Michael</h1>
          <p className="text-md md:text-lg text-gray-600 mt-2">
            Senior Lecturer | Department of Human Services & Social Work<br />
            Max Stern Yezreel Valley College, Israel
          </p>
        </header>

        <section id="about" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p>
            I am a senior lecturer at the Max Stern Yezreel Valley College in the Department of Human Services and the Department of Social Work. My research focuses on stress-related situations in life and at work. I am actively involved in institutional academic committees, peer-review processes, and professional counseling. My publications, lectures, and research projects address coping, risk-taking, burnout, resilience, and professionalism.
          </p>
        </section>

        <section id="research" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Research</h2>
          <p>
            My work addresses life and organizational coping with stressful events. I have published over 20 articles and chapters in peer-reviewed journals, participated in dozens of conferences, and received multiple research grants. Current projects address emotional responses, burnout, and resilience, including studies following the October 7 events.
          </p>
        </section>

        <section id="teaching" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Teaching</h2>
          <p>
            I teach courses such as Quantitative Research Methods, SPSS Statistics, Sexuality and Social Problems, and Practicum Skills. I have supervised numerous undergraduate and graduate students in topics ranging from cyberbullying to moral courage among medical students.
          </p>
        </section>

        <section id="grants" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Grants</h2>
          <p>
            I have been awarded research funding from institutions like the Israel National Institute for Health Policy Research and Yezreel Valley College, totaling over 400,000 NIS. My grants explore burnout, resilience, autism-related interventions, and marginalized youth.
          </p>
        </section>

        <section id="awards" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Awards</h2>
          <p>
            I received over 15 academic excellence awards from Max Stern Yezreel Valley College, as well as early-career recognition from the Jacobs Foundation and Haifa University.
          </p>
        </section>

        <section id="conferences" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Conferences</h2>
          <p>
            I have presented in over 60 conferences internationally and nationally, including ICOPH, ICCH, STAR, and HEALER. Topics include adolescent behavior, burnout, professionalism, and sexual health.
          </p>
        </section>

        <section id="editorial" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Editorial</h2>
          <p>
            I serve as a reviewer and editorial board member for journals such as Frontiers in Medicine, Sage Open, Patient Education & Counseling, and BMC Psychology.
          </p>
        </section>

        <section id="roles" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Academic Roles</h2>
          <p>
            I have held many academic positions at Max Stern Yezreel Valley College, including Member of the Academic Council, Teaching and Admissions Committees, and Organizer of academic conferences.
          </p>
        </section>

        <section id="community" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <p>
            I provide counseling and education to community organizations such as ERAN and Open Door, and volunteer in emergency and youth initiatives. My work integrates academic expertise with real-world impact.
          </p>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: kerenmi@yvc.ac.il</p>
          <p>Phone: +972-50-6437530</p>
        </section>
      </div>
    </div>
  );
}
