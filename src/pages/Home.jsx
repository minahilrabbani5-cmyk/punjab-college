import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-white text-[#0B1F3A]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#F4F8FC]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-[#07162b]/65" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 py-16 lg:px-8">

          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              🎓 Established in 2017
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Welcome to
              <span className="block text-[#E51B23]">
                Punjab College
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg">
              Empowering students through quality education,
              knowledge and opportunities for a brighter future.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/admission"
                className="rounded-xl bg-[#E51B23] px-6 py-3 text-center text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Apply Now →
              </Link>

              <Link
                to="/courses"
                className="rounded-xl border border-white/50 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B1F3A]"
              >
                Explore Courses
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="relative z-20 -mt-7 px-5">

        <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg md:grid-cols-4">

          <div className="border-b border-gray-100 p-5 text-center md:border-b-0 md:border-r">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              2017
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Established
            </p>
          </div>

          <div className="border-b border-gray-100 p-5 text-center md:border-b-0 md:border-r">
            <h2 className="text-2xl font-bold text-[#E51B23]">
              6+
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Programs
            </p>
          </div>

          <div className="border-b border-gray-100 p-5 text-center md:border-b-0 md:border-r">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              4+
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Facilities
            </p>
          </div>

          <div className="p-5 text-center">
            <h2 className="text-2xl font-bold text-[#E51B23]">
              100%
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Commitment
            </p>
          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="px-6 py-16 md:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <img
              src="assets/images/campus.jpg"
              alt="College Campus"
              className="h-[350px] w-full rounded-2xl object-cover shadow-md md:h-[390px]"
            />

            {/* Small Badge */}
          <div className="absolute -bottom-6 right-4 rounded-xl bg-[#D71920] px-6 py-5 text-white shadow-x1 md:-right-1">
             
              <p className="text-xs font-bold">
                2017
              </p>
              <p className="text-xs">
                Since
              </p>
            </div>

          </div>


          {/* Text */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#E51B23]">
              About Punjab College
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B1F3A] md:text-4xl">
              Building Knowledge.
              <span className="block text-[#E51B23]">
                Shaping Futures.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Punjab College Ahmed Pur East was established in 2017.
              The college provides education from 1st Year and 2nd Year
              to higher education programs including ADP and BSc.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Our goal is to provide students with a supportive
              environment where they can learn, develop their skills
              and prepare for their future.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#E51B23]"
            >
              Discover More →
            </Link>

          </div>

        </div>
      </section>


      {/* ================= FACILITIES ================= */}
      <section className="bg-[#F8FAFC] px-6 py-16 md:py-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#E51B23]">
              Campus Life
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0B1F3A] md:text-4xl">
              Our Facilities
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
              Everything students need for learning, growth
              and a comfortable college experience.
            </p>

          </div>


          {/* Facility Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


            {/* Library */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="flex h-28 items-center justify-center bg-[#EAF4FF]">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  📚
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  Library
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  A peaceful space for reading, studying
                  and exploring knowledge.
                </p>

              </div>

            </div>


            {/* Computer Lab */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="flex h-28 items-center justify-center bg-[#FFF1F2]">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  💻
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  Computer Lab
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Practical technology learning in a
                  dedicated computer lab.
                </p>

              </div>

            </div>


            {/* Playground */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="flex h-28 items-center justify-center bg-[#ECFDF5]">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  ⚽
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  Playground
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Space for sports, recreation and
                  healthy student activities.
                </p>

              </div>

            </div>


            {/* Canteen */}
            <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">

              <div className="flex h-28 items-center justify-center bg-[#FFF8E7]">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  🍽️
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#0B1F3A]">
                  Canteen
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  A comfortable place for students to relax
                  and enjoy refreshments.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= COURSES ================= */}
      <section className="bg-white px-6 py-16 md:py-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[2px] text-[#E51B23]">
                Our Programs
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0B1F3A] md:text-4xl">
                Explore Our Courses
              </h2>

            </div>

            <Link
              to="/courses"
              className="text-sm font-bold text-[#E51B23] transition hover:translate-x-1"
            >
              View All Courses →
            </Link>

          </div>


          {/* Course Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


            {/* F.A */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-lg">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FF] text-2xl">
                  📚
                </div>

                <span className="rounded-full bg-[#FFF1F2] px-3 py-1 text-xs font-semibold text-[#E51B23]">
                  Intermediate
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                F.A
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Build a strong foundation in arts and humanities
                with our intermediate program.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block text-sm font-bold text-[#E51B23]"
              >
                View Details →
              </Link>

            </div>


            {/* F.Sc */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-lg">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1F2] text-2xl">
                  🔬
                </div>

                <span className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
                  Intermediate
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                F.Sc
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Develop scientific knowledge and prepare for
                higher education in science fields.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block text-sm font-bold text-[#E51B23]"
              >
                View Details →
              </Link>

            </div>


            {/* I.Com */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-lg">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8E7] text-2xl">
                  💼
                </div>

                <span className="rounded-full bg-[#FFF1F2] px-3 py-1 text-xs font-semibold text-[#E51B23]">
                  Intermediate
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                I.Com
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Learn commerce, accounting and business concepts
                for your academic journey.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block text-sm font-bold text-[#E51B23]"
              >
                View Details →
              </Link>

            </div>


            {/* ICS */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-lg">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FF] text-2xl">
                  💻
                </div>

                <span className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
                  Intermediate
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                ICS
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Explore computer science, technology and
                problem-solving skills.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block text-sm font-bold text-[#E51B23]"
              >
                View Details →
              </Link>

            </div>


            {/* ADP */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-lg">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFDF5] text-2xl">
                  🎓
                </div>

                <span className="rounded-full bg-[#FFF1F2] px-3 py-1 text-xs font-semibold text-[#E51B23]">
                  Higher Education
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                ADP
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Continue your higher education with an
                associate degree program.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block text-sm font-bold text-[#E51B23]"
              >
                View Details →
              </Link>

            </div>


            {/* BSc */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-lg">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8E7] text-2xl">
                  🎓
                </div>

                <span className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
                  Higher Education
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                BSc
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Build advanced knowledge and prepare for
                further academic and professional opportunities.
              </p>

              <Link
                to="/courses"
                className="mt-4 inline-block text-sm font-bold text-[#E51B23]"
              >
                View Details →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-14">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#F1F6FC] px-7 py-10 text-center md:flex-row md:text-left">

          <div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#E51B23]" >
              Start Your Journey
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] md:text-3xl">
              Ready to Begin Your Future?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore our programs and take the next step.
            </p>

          </div>

          <Link
            to="/admission"
            className="shrink-0 rounded-xl bg-[#E51B23] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            Apply for Admission →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;