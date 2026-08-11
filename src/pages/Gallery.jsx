function Gallery() {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
      title: "College Campus",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80",
      title: "Students",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80",
      title: "Learning Environment",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1000&q=80",
      title: "Classroom",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      title: "Computer Lab",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
      title: "Sports & Activities",
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">

          <p className="font-semibold uppercase tracking-[4px] text-[#D71920]">
            College Moments
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-white md:text-6xl">
            Our Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore moments, campus life and activities at
            Punjab College Ahmed Pur East.
          </p>

        </div>
      </section>


      {/* Gallery Section */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100">

                  <div className="p-6">

                    <h2 className="text-xl font-bold text-white">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-200">
                      Punjab College
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Bottom Section */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-[#0B1F3A] md:text-4xl">
            Life at Punjab College
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Education, activities, friendships and memorable
            moments come together to create a vibrant college life.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Gallery;