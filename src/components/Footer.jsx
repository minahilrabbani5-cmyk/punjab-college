import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#071d38] text-white">

      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= COLLEGE ================= */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ed1c24] text-xl font-extrabold">
                PC
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Punjab College
                </h2>

                <p className="text-xs text-gray-400">
                  Ahmed Pur East
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Empowering students through quality education,
              academic excellence and a supportive learning
              environment since 2017.
            </p>


            {/* ================= SOCIAL ICONS ================= */}
            <div className="mt-6 flex gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold transition hover:bg-[#ed1c24]"
              >
                f
              </a>


              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold transition hover:bg-[#ed1c24]"
              >
                ◎
              </a>


              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition hover:bg-[#ed1c24]"
              >
                ▶
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-5 h-[2px] w-10 bg-[#ed1c24]" />

            <ul className="mt-5 space-y-3 text-sm text-gray-300">

              <li>
                <a
                  href="/"
                  className="transition hover:text-[#ed1c24]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition hover:text-[#ed1c24]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="transition hover:text-[#ed1c24]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="/courses"
                  className="transition hover:text-[#ed1c24]"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="/admission"
                  className="transition hover:text-[#ed1c24]"
                >
                  Admissions
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-[#ed1c24]"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* ================= PROGRAMS ================= */}
          <div>

            <h3 className="text-lg font-bold">
              Our Programs
            </h3>

            <div className="mt-5 h-[2px] w-10 bg-[#ed1c24]" />

            <ul className="mt-5 space-y-3 text-sm text-gray-300">

              <li className="transition hover:text-white">
                F.A
              </li>

              <li className="transition hover:text-white">
                F.Sc
              </li>

              <li className="transition hover:text-white">
                I.Com
              </li>

              <li className="transition hover:text-white">
                ICS
              </li>

              <li className="transition hover:text-white">
                ADP
              </li>

              <li className="transition hover:text-white">
                BSc
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-lg font-bold">
              Contact Information
            </h3>

            <div className="mt-5 h-[2px] w-10 bg-[#ed1c24]" />

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#ed1c24]"
                />

                <p className="text-sm leading-6 text-gray-300">
                  Punjab College
                  <br />
                  Ahmed Pur East, Punjab
                </p>

              </div>


              {/* Phone */}
              <div className="flex gap-3">

                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-[#ed1c24]"
                />

                <p className="text-sm text-gray-300">
                  Contact College Administration
                </p>

              </div>


              {/* Email */}
              <div className="flex gap-3">

                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#ed1c24]"
                />

                <p className="break-all text-sm text-gray-300">
                  info@punjabcollege.edu.pk
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center md:flex-row md:text-left">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Punjab College Ahmed Pur East.
            All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Established Since 2017
          </p>

        </div>

      </div>


      {/* ================= BACK TO TOP ================= */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#ed1c24] text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-700"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

    </footer>
  );
}

export default Footer;