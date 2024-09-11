
const suppliersData = [
  { id: 1, location: "Province of Guimaras", image: "/images/location1.jpg" },
  { id: 2, location: "Ajuy, Iloilo", image: "/images/location2.jpg" },
  { id: 3, location: "New Lucena, Iloilo", image: "/images/suppliers/new-lucena.jpg" },
  { id: 4, location: "Province of Capiz", image: "/images/suppliers/capiz.jpg" },
  { id: 5, location: "San Joaquin", image: "/images/suppliers/san-joaquin.jpg" },
  { id: 6, location: "Guimbal", image: "/images/suppliers/guimbal.jpg" },
];

const SuppliersSection: React.FC = () => {
  return (
    <section id="suppliers" className="p-4 md:p-8 text-black bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Our Suppliers</h2>
      <p className="text-base md:text-lg text-center mb-8">
        Diri namon gina kuha ang amon nga mga manok
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
        {suppliersData.map((supplier) => (
          <div
            key={supplier.id}
            className="relative bg-gray-300 rounded-lg shadow-lg overflow-hidden h-48 sm:h-56 md:h-64 text-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${supplier.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">{supplier.location}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuppliersSection;
