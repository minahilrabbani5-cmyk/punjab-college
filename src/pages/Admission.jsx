import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    course: "",
    education: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071d38] px-6 py-14 md:py-16">

        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-6xl text-center">

          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[4px] text-[#ed1c24]">
            <span className="h-[2px] w-8 bg-[#ed1c24]" />
            Admissions Open
            <span className="h-[2px] w-8 bg-[#ed1c24]" />
          </div>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Start Your Journey
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Take the first step toward your future with
            <br className="hidden md:block" />
            Punjab College Ahmed Pur East.
          </p>

        </div>
      </section>


      {/* ================= MAIN ================= */}
      <section className="px-5 py-9 md:px-8 md:py-10">

        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-5">


          {/* =====================================================
              LEFT CARD
          ===================================================== */}
          <div className="overflow-hidden rounded-3xl bg-[#071d38] shadow-xl lg:col-span-2">

            <div className="p-6 md:p-7">

              {/* Heading */}
              <p className="text-sm font-bold uppercase tracking-[2.5px] text-[#ed1c24]">
                Admission Information
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Join Punjab College
              </h2>

              <div className="mt-3 h-[2px] w-14 bg-[#ed1c24]" />

              <p className="mt-5 text-[15px] leading-7 text-gray-300">
                Start your educational journey in a supportive
                environment designed to help students learn,
                grow and prepare for their future.
              </p>


              {/* ================= PROGRAM 1 ================= */}
              <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 transition duration-300 hover:bg-white/[0.12]">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]">
                  <GraduationCap
                    size={25}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Intermediate Programs
                  </h3>

                  <p className="mt-1 text-sm text-gray-300">
                    F.A, F.Sc, I.Com and ICS
                  </p>
                </div>

              </div>


              {/* ================= PROGRAM 2 ================= */}
              <div className="mt-3 flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 transition duration-300 hover:bg-white/[0.12]">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]">
                  <BookOpen
                    size={24}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Higher Education
                  </h3>

                  <p className="mt-1 text-sm text-gray-300">
                    ADP and BSc programs
                  </p>
                </div>

              </div>


              {/* ================= LOCATION ================= */}
              <div className="mt-3 flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 transition duration-300 hover:bg-white/[0.12]">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]">
                  <MapPin
                    size={24}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Campus Location
                  </h3>

                  <p className="mt-1 text-sm text-gray-300">
                    Ahmed Pur East
                  </p>
                </div>

              </div>


              {/* ================= ESTABLISHED ================= */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl bg-white p-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50">
                  <CalendarDays
                    size={23}
                    className="text-[#ed1c24]"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Established Since
                  </p>

                  <p className="font-bold text-[#ed1c24]">
                    2017
                  </p>
                </div>

              </div>

            </div>
          </div>


          {/* =====================================================
              RIGHT FORM
          ===================================================== */}
          <div className="rounded-3xl bg-white p-7 shadow-xl md:p-8 lg:col-span-3">

            {submitted ? (

              /* ================= SUCCESS ================= */
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-bold text-[#071d38]">
                  Application Submitted!
                </h2>

                <p className="mt-3 max-w-md text-gray-500">
                  Thank you for choosing Punjab College.
                  Your admission information has been received.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl bg-[#ed1c24] px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Submit Another Application
                </button>

              </div>

            ) : (

              <>

                {/* ================= FORM HEADER ================= */}
                <div className="border-b border-gray-100 pb-5">

                  <p className="text-sm font-bold uppercase tracking-[2.5px] text-[#ed1c24]">
                    Application Form
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#071d38] md:text-4xl">
                    Apply for Admission
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Please provide your information below.
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="mt-6"
                >

                  {/* ================= PERSONAL ================= */}
                  <div>

                    <h3 className="mb-4 flex items-center gap-2 font-bold text-[#071d38]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-[#ed1c24]">
                        1
                      </span>

                      Personal Information
                    </h3>


                    <div className="grid gap-4 md:grid-cols-2">

                      {/* Student Name */}
                      <div>

                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Student Name
                        </label>

                        <div className="relative">

                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter student name"
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                          />

                        </div>

                      </div>


                      {/* Father Name */}
                      <div>

                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Father Name
                        </label>

                        <div className="relative">

                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="Enter father name"
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                          />

                        </div>

                      </div>


                      {/* Phone */}
                      <div>

                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>

                        <div className="relative">

                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="03XX-XXXXXXX"
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                          />

                        </div>

                      </div>


                      {/* Email */}
                      <div>

                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Email
                        </label>

                        <div className="relative">

                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                          />

                        </div>

                      </div>

                    </div>
                  </div>


                  {/* ================= ACADEMIC ================= */}
                  <div className="mt-6 border-t border-gray-100 pt-5">

                    <h3 className="mb-4 flex items-center gap-2 font-bold text-[#071d38]">

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-[#ed1c24]">
                        2
                      </span>

                      Academic Information

                    </h3>


                    <div className="grid gap-4 md:grid-cols-2">

                      {/* Course */}
                      <div>

                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Select Course
                        </label>

                        <div className="relative">

                          <BookOpen
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                          >

                            <option value="">
                              Select a course
                            </option>

                            <option value="FA">
                              F.A
                            </option>

                            <option value="FSc">
                              F.Sc
                            </option>

                            <option value="ICom">
                              I.Com
                            </option>

                            <option value="ICS">
                              ICS
                            </option>

                            <option value="ADP">
                              ADP
                            </option>

                            <option value="BSc">
                              BSc
                            </option>

                          </select>

                          <ChevronDown
                            size={18}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />

                        </div>

                      </div>


                      {/* Education */}
                      <div>

                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Previous Education
                        </label>

                        <div className="relative">

                          <GraduationCap
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            placeholder="e.g. Matric / Intermediate"
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                          />

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* ================= ADDRESS ================= */}
                  <div className="mt-6 border-t border-gray-100 pt-5">

                    <h3 className="mb-4 flex items-center gap-2 font-bold text-[#071d38]">

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-[#ed1c24]">
                        3
                      </span>

                      Contact Information

                    </h3>


                    <div className="relative">

                      <MapPin
                        size={18}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete address"
                        rows="3"
                        required
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                      />

                    </div>

                  </div>


                  {/* ================= BUTTON ================= */}
                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#ed1c24] px-6 py-3.5 font-bold text-white shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-1 hover:bg-red-700"
                  >
                    Submit Application

                    <span className="text-xl">
                      →
                    </span>

                  </button>

                  <p className="mt-3 text-center text-xs text-gray-400">
                    Your information is used only for admission purposes.
                  </p>

                </form>

              </>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Admission;