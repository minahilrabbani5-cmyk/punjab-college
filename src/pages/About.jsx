import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-white">

      {/* ================= PAGE HERO ================= */}
      <section className="relative overflow-hidden bg-[#0B1F3A] px-6 py-24">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D71920]/20" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl text-center">

          <p className="font-semibold uppercase tracking-[4px] text-[#D71920]">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-white md:text-6xl">
            About Punjab College
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover our journey, educational programs and
            commitment to student development.
          </p>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=80"
              alt="Punjab College Campus"
              className="h-[430px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#D71920] px-7 py-5 text-white shadow-xl">
              <p className="text-3xl font-bold">
                2017
              </p>

              <p className="text-sm">
                Established
              </p>
            </div>

          </div>


          {/* Content */}
          <div>

            <p className="font-semibold uppercase tracking-[3px] text-[#D71920]">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B1F3A] md:text-5xl">
              Education That
              <span className="block text-[#D71920]">
                Builds Futures
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Punjab College Ahmed Pur East was established in 2017
              with a focus on providing students with quality
              educational opportunities.
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              Our college provides education at the intermediate
              level, including 1st Year and 2nd Year, as well as
              higher education programs such as ADP and BSc.
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              We aim to create a supportive environment where
              students can learn, develop their abilities and
              prepare for their future.
            </p>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION LEVELS ================= */}
      <section className="bg-gray-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-[#D71920]">
              Education
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0B1F3A] md:text-5xl">
              Our Education Levels
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Educational opportunities for students at
              intermediate and higher education levels.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* 1st Year */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A] text-2xl">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                1st Year
              </h3>

              <p className="mt-3 text-gray-600">
                Intermediate-level education to build
                a strong academic foundation.
              </p>

            </div>


            {/* 2nd Year */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D71920] text-2xl text-white">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                2nd Year
              </h3>

              <p className="mt-3 text-gray-600">
                Advanced intermediate studies preparing
                students for higher education.
              </p>

            </div>


            {/* ADP */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A] text-2xl">
                ADP
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                ADP
              </h3>

              <p className="mt-3 text-gray-600">
                Higher education opportunity for
                students continuing their studies.
              </p>

            </div>


            {/* BSc */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D71920] text-xl font-bold text-white">
                BSc
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">
                BSc
              </h3>

              <p className="mt-3 text-gray-600">
                Higher education focused on academic
                and professional development.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FACILITIES ================= */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-semibold uppercase tracking-[3px] text-[#D71920]">
              Campus
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0B1F3A] md:text-5xl">
              Facilities for Students
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {/* Library */}
            <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-2xl">
                📚
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  Library
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  A dedicated space where students can
                  read, study and explore educational resources.
                </p>
              </div>

            </div>


            {/* Computer Lab */}
            <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#D71920] text-2xl">
                💻
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  Computer Lab
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  A practical learning environment for
                  computer and technology-based education.
                </p>
              </div>

            </div>


            {/* Playground */}
            <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-2xl">
                ⚽
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  Playground
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  Space for sports, recreation and healthy
                  activities for students.
                </p>
              </div>

            </div>


            {/* Canteen */}
            <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#D71920] text-2xl">
                🍽️
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  Canteen
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  A convenient campus space where students
                  can relax and enjoy refreshments.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VISION ================= */}
      <section className="bg-[#0B1F3A] px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[3px] text-[#D71920]">
            Our Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Inspiring Students to Reach Their Potential
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            We believe education is not only about academic
            knowledge. It is about developing confidence,
            skills and a positive approach toward the future.
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl rounded-3xl bg-gray-50 px-8 py-14 text-center">

          <h2 className="text-3xl font-bold text-[#0B1F3A] md:text-4xl">
            Start Your Educational Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our programs and take the next step
            toward your future.
          </p>

          <Link
            to="/admission"
            className="mt-7 inline-block rounded-lg bg-[#D71920] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-700"
          >
            Apply Now →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;