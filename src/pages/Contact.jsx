import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071d38] px-6 py-16">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-6xl text-center">

          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[4px] text-[#ed1c24]">
            <span className="h-[2px] w-8 bg-[#ed1c24]" />

            Get In Touch

            <span className="h-[2px] w-8 bg-[#ed1c24]" />
          </div>

          <h1 className="mt-4 text-5xl font-extrabold text-white md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-300">
            Have a question about admissions or our programs?
            We would love to hear from you.
          </p>

        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="px-5 py-12 md:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">


            {/* Location */}
            <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <MapPin className="text-[#ed1c24]" size={24} />
              </div>

              <h3 className="mt-5 font-bold text-[#071d38]">
                Our Location
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Punjab College
                <br />
                Ahmed Pur East
              </p>

            </div>


            {/* Phone */}
            <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <Phone className="text-[#ed1c24]" size={24} />
              </div>

              <h3 className="mt-5 font-bold text-[#071d38]">
                Call Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Contact college administration
                <br />
                for admission information.
              </p>

            </div>


            {/* Email */}
            <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <Mail className="text-[#ed1c24]" size={24} />
              </div>

              <h3 className="mt-5 font-bold text-[#071d38]">
                Email Us
              </h3>

              <p className="mt-2 break-words text-sm leading-6 text-gray-500">
                info@punjabcollege.edu.pk
              </p>

            </div>


            {/* Timing */}
            <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <Clock className="text-[#ed1c24]" size={24} />
              </div>

              <h3 className="mt-5 font-bold text-[#071d38]">
                College Hours
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Monday - Saturday
                <br />
                8:00 AM - 2:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FORM + MAP ================= */}
      <section className="px-5 pb-16 md:px-8">

        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-2">


          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl bg-white p-7 shadow-xl md:p-9">

            {sent ? (

              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-bold text-[#071d38]">
                  Message Sent!
                </h2>

                <p className="mt-3 max-w-md text-gray-500">
                  Thank you for contacting Punjab College.
                  Our team will get back to you.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-xl bg-[#ed1c24] px-7 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <>

                <p className="text-sm font-bold uppercase tracking-[3px] text-[#ed1c24]">
                  Send Us A Message
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#071d38]">
                  How Can We Help?
                </h2>

                <p className="mt-2 text-gray-500">
                  Fill out the form and send us your message.
                </p>


                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >

                  {/* Name */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Name
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
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                      />

                    </div>

                  </div>


                  {/* Email */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
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
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                      />

                    </div>

                  </div>


                  {/* Phone */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
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
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                      />

                    </div>

                  </div>


                  {/* Message */}
                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Message
                    </label>

                    <div className="relative">

                      <MessageSquare
                        size={18}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        rows="5"
                        required
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#ed1c24] focus:bg-white focus:ring-2 focus:ring-red-100"
                      />

                    </div>

                  </div>


                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#ed1c24] px-6 py-4 font-bold text-white shadow-lg shadow-red-100 transition duration-300 hover:-translate-y-1 hover:bg-red-700"
                  >
                    Send Message →
                  </button>

                </form>

              </>

            )}

          </div>


          {/* ================= MAP / LOCATION ================= */}
          <div className="overflow-hidden rounded-3xl bg-[#071d38] shadow-xl">

            <div className="flex h-full min-h-[500px] flex-col">

              {/* Map area */}
              <div className="relative flex flex-1 items-center justify-center bg-[#e9edf2]">

                <div className="absolute inset-0 opacity-30">
                  <div className="h-full w-full bg-[linear-gradient(45deg,#d7dce2_25%,transparent_25%,transparent_75%,#d7dce2_75%),linear-gradient(45deg,#d7dce2_25%,transparent_25%,transparent_75%,#d7dce2_75%)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]" />
                </div>

                <div className="relative z-10 text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ed1c24] shadow-xl">

                    <MapPin
                      size={38}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#071d38]">
                    Punjab College
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Ahmed Pur East
                  </p>

                </div>

              </div>


              {/* Location footer */}
              <div className="p-7 text-white">

                <p className="text-sm font-bold uppercase tracking-[2px] text-[#ed1c24]">
                  Visit Us
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Punjab College Ahmed Pur East
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Visit our campus to learn more about our
                  programs, facilities and admission process.
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <MapPin
                    size={20}
                    className="text-[#ed1c24]"
                  />

                  <span className="text-sm">
                    Ahmed Pur East, Punjab, Pakistan
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;