function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-bold text-[#071d38]">
          Our Courses
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Punjab College Ahmed Pur East
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#071d38]">
              F.A
            </h2>
            <p className="mt-3 text-gray-600">
              Faculty of Arts
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#071d38]">
              F.Sc
            </h2>
            <p className="mt-3 text-gray-600">
              Faculty of Science
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#071d38]">
              I.Com
            </h2>
            <p className="mt-3 text-gray-600">
              Intermediate in Commerce
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#071d38]">
              ICS
            </h2>
            <p className="mt-3 text-gray-600">
              Intermediate in Computer Science
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#071d38]">
              ADP
            </h2>
            <p className="mt-3 text-gray-600">
              Associate Degree Program
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#071d38]">
              BSc
            </h2>
            <p className="mt-3 text-gray-600">
              Bachelor of Science
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Courses;