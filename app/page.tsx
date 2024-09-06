import Image from 'next/image';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <section
        className="relative flex-grow py-52 -mt-2"
        style={{
          backgroundImage: 'url("/images/store.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto text-center text-white relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Discover the Pride of West Visayas</h2>
        <p className="mt-4 text-lg">Abing&apos;s Darag Chicken - Bringing the best of local flavors</p>
          <a
            href="#what-is-darag"
            className="mt-8 inline-block bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Learn More About Darag
          </a>
        </div>
      </section>

      <section id="what-is-darag" className="p-8 text-black">
        <h2 className="text-3xl font-semibold mb-4">What is Darag Chicken?</h2>
        <p>Darag chicken is a unique breed native to the Philippines, known for its superior flavor and quality...</p>
        <Image src="/images/darag.jpg" alt="Darag Chicken" width={600} height={400} className="mt-4 rounded-lg shadow-lg"/>
      </section>

      <section id="why-darag" className="bg-gray-100 p-8 text-black">
        <h2 className="text-3xl font-semibold mb-8">Why Darag Chicken?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-xl font-semibold">Superior Taste</h3>
            </div>
            <p>Darag chicken offers a rich and unique flavor profile that stands out from other breeds...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-xl font-semibold">Health Benefits</h3>
            </div>
            <p>Packed with essential nutrients and lower in fat, Darag chicken is a healthier choice...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-xl font-semibold">Sustainable Farming</h3>
            </div>
            <p>Darag chicken farming has a lower environmental impact, making it a sustainable choice...</p>
          </div>
        </div>
      </section>

      <section id="success-story" className="p-8 text-black">
        <h2 className="text-3xl font-semibold mb-4">Our Success Story</h2>
        <p>From a humble karinderia to a leading Darag chicken breeding business, our journey has been remarkable...</p>
        <Image src="/images/success.jpg" alt="Success Story" width={600} height={400} className="mt-4 rounded-lg shadow-lg"/>
      </section>

      <section id="contact" className="bg-gray-100 p-8 text-black">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>For inquiries, please reach out to us at contact@abingsdaragchicken.com or visit us in West Visayas.</p>
      </section>
    </>
  );
};

export default HomePage
