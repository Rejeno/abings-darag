'use client'

import ContactSection from '@/components/Contact';
import SuppliersSection from '@/components/Suppliers';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './globals.css';


const HomePage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center py-16 -mt-6 md:py-32 lg:py-52"
        style={{
          backgroundImage: 'url("/images/store.jpg")',
          backgroundSize: 'cover', // Ensure it still covers the section
          backgroundPosition: 'top', // Default position for larger screens
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div className="container mx-auto text-center text-white relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 -mt-12">
            Discover the Pride of West Visayas
          </h1>
          <p className="mt-7 text-sm md:text-lg lg:text-3xl">
            Abing&apos;s Darag Chicken - Bringing the best of local flavors
          </p>
          <a
            href="#about"
            className="mt-12 inline-block bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Learn More About Darag
          </a>
        </div>

        {/* Media Query for Mobile Adjustments */}
        <style jsx>{`
          @media (max-width: 768px) {
            section {
              background-position: right 20%; /* Shift image to the right on mobile */
            }
          }
        `}</style>
      </section>



      {/* What is Darag Chicken? */}
      <section id="about" className="p-4 md:p-8 text-black mt-8 md:mt-16">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">What is Darag Chicken?</h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-10">
          {/* Video visible only on web view */}
          <div className="justify-center items-center w-full md:w-auto mb-10 sm:mt-20 hidden md:flex">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/okVNNoqwRHA"
              title="Darag Chicken Video Web"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-full h-[250px] sm:w-[590px] sm:h-[315px]"
            />
          </div>

          <div className="flex-1 text-lg ">
            <p className="md:flex-2 text-justify">
              This chicken breed originates from Panay Island in the Western Visayas, near the world-famous beaches of Boracay.
              It is rapidly rising in popularity for very good reason. The typical plumage for roosters, locally called Labuyo or Alimbuyog,
              is a deep red hackle and wings, plus ebony feathers and a matching black tail, though other color morphs are seen.
              Hens have sandy or yellowish-brown plumage. Cocks weigh an average of 1.3 kilogrammes while hens reach about 1.1 kilogrammes.
              Known for their economical feeding habits, Darag chickens are ready for harvest after around 10 weeks.
              <br /><br />
              Traditionally used for the region&apos;s famed Inasal or barbecued chicken or the more ubiquitous Filipino Tinola or chicken soup, the breed offers distinctively-lean,
              smokey and flavourful meat.  Darag refers to Philippine native chicken that predominates primarily in Western Visayas most especially in the island of Panay.
              These chickens descended from the indigenous Red Jungle Fowl &apos;Gallus bankiva&apos;. They are known as having the same color and they forage
              in the wild and look for their own food. They can reproduce and survive with minimal care and management.
            </p>
          </div>

          {/* Video visible only on mobile view */}
          <div className="flex justify-center items-center w-full md:w-auto mb-10 mt-10 md:hidden">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/okVNNoqwRHA"
              title="Darag Chicken Video Mobile"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-full h-[250px] sm:w-[590px] sm:h-[315px]"
            />
          </div>
        </div>


        <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-10">
          <div className="flex-1 text-lg">
            <p className="md:flex-2 text-justify mb-10 -mt-6 sm:mt-10">
              Darag is one of the many native chicken breeds of the Philippines.
              It is endemic to the islands of Panay and Guimaras and evolved from the Red Jungle Fowl (Gallus gallus bankiva), which has been roaming around Southeast Asia for thousands of years.
              To the uninitiated, Darag might seem indistinguishable from other types of native chicken breeds.
              One must be on the lookout for certain characteristics to identify a genuine Darag.
              <br></br><br></br>
              Darag, meaning yellow in &apos;Kinaray-a&apos;s or Ilonggo, is most recognizable for its yellowish-brown plumage.
              The color of its feathers is a combination of dark brown and golden yellow with a distinguishable stroke of
              yellow line on the middle part, from base to tip of each feather.
              Accompanying the golden coat of Darag are its gray shanks or chicken feet.
              While other breeds may have a similar yellowish plumage, a genuine Darag must have gray shanks.
              Interestingly, farmers and breeders intentionally choose to breed chickens with gray
              shanks because they directly associate gray shanks with tastier meat.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="md:flex-1 -mt-6 sm:mt-20 ">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows={false}
              autoPlay
              dynamicHeight={false} // Prevent dynamic height adjustments
              showStatus={false}
              showIndicators
              showArrows
              swipeable={!isMobile}
            >
              <div>
                <Image
                  src="/images/d1.jpg"
                  alt="Darag Chicken Breeding"
                  layout="responsive"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/d2.jpg"
                  alt="Darag Chicken Preparation"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </Carousel>
          </div>

        </div>
      </section>

      {/* Why Darag? */}
      <section id="benefits" className="bg-gray-100 p-4 md:p-8 text-black mt-2 sm:pt-24">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-20 text-center">Why Darag Chicken?</h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">

          {/* Superior Taste */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Superior Taste</h3>
            </div>
            <p className="text-sm md:text-base text-justify">
              Darag chicken offers a rich and unique flavor profile that stands out from other breeds. Its savory meat and distinct eating experience are claimed to be better than commercial chicken meat. The slower growth of Darag chickens also leads to a richer taste, with less gamy flavor often associated with native and wild meats.
            </p>
            {/* Image with description */}
            <figure className="mt-4 flex flex-col items-center">
              <Image
                src="/images/Taste.jpg"
                alt="Delicious Darag Chicken Dish"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </figure>
          </div>

          {/* Health Benefits */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Health Benefits</h3>
            </div>
            <p className="text-sm md:text-base text-justify">
              Packed with essential nutrients and lower in fat, Darag chicken is a healthier choice. Darag chicken&apos;s natural diet and organic dietary provide plenty of health benefits. Compared to broiler chickens, these chickens are usually leaner, have less fat, and have higher protein content. They&apos;sre also healthy since they&apos;re full of vitamins and other important nutrients.
            </p>
            {/* Image with description */}
            <figure className="mt-4 flex flex-col items-center">
              <Image
                src="/images/Healthy.jpg"
                alt="Healthy Meal with Darag Chicken"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </figure>
          </div>

          {/* Sustainable Farming */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Sustainable Farming</h3>
            </div>
            <p className="text-sm md:text-base text-justify">
              Darag chicken farming has a lower environmental impact, making it a sustainable choice. Organic materials like natural feeds and organic supplements contribute to the chicken&apos;s better nutritional profile, and it also minimizes the environmental impact by reducing reliance on synthetic products in farming.
            </p>
            {/* Image with description */}
            <figure className="mt-4 flex flex-col items-center">
              <Image
                src="/images/sustainable2.jpg"
                alt="Sustainable Chicken Farming"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <figcaption className="text-xs text-gray-400 mt-2 opacity-75 text-center">
                PHOTO COURTESY OF DOST
              </figcaption>
            </figure>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center mt-12 items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-2">
        {/* YouTube Video on the Left */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start mt-12 space-y-6 sm:space-y-0 sm:space-x-6">
  
        {/* left Side Text */}
        <div className="w-full sm:w-1/3 px-4 sm:px-8 -pl-4">
          <p className="text-gray-700 text-justify mb-4 -mt-12 sm:mt-10">
          Darag chicken is a native breed that offers richer flavor and better nutritional value compared to broiler chickens. Raised organically, they benefit from a natural diet, resulting in meat that is not only healthier but also more flavorful. This traditional breed has been cherished for its unique taste and superior quality for generations. Discover more about its remarkable qualities and benefits by checking out the video!
          </p>
        </div>
        {/* YouTube Video on the right */}
        <div className="w-full sm:w-2/3">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/x3JsMkvMFPg?si=yfMLs9KFlykSMPp3"
            title="Darag Chicken Benefits Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg h-[250px] sm:h-[350px]"
          />
        </div>
      </div>
      </div>
      </section>


      {/* Success Story with Carousel */}
      <section id="story" className="p-4 md:p-8 text-black mt-10 mb-16">
        <h2 className="text-2xl md:text-5xl font-bold mb-16 text-center mt-12">
          What is Abing&apos;s Darag Chicken Trading?
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          {/* Story Text */}
          <div className="md:flex-1 text-justify">
            <p className="text-base md:text-lg">


              What began as a small &quot;karinderia&quot; has grown into a leading business,
              renowned for studying and trading the native Darag chicken. The journey started at West Visayas State University,
              where Ma&apos;am Ladd recognized the potential for a startup focused on Darag chicken, a breed unique to the Philippines.

              <br></br><br></br>

              During Martial Law, a group of Filipino scientists and researchers was sent abroad to gather knowledge and expertise to
              improve the Philippine livestock industry. It was in the farmlands of Tokyo where Dr. Bernabe Cocjin first encountered the
              Hinai-dori, Japan&apos;s native chicken. This moment sparked an inspiration in the young researcher from Panay, igniting a vision
              that would revolutionize the local poultry industry. After 20 years and eight generations of careful breeding and purification,
              the study of the Darag chicken was perfected.


              <br></br><br></br>
              Dr. Cocjin&apos;s dream was to make Abing&apos;s Darag not just a household name, but a destination—a place where visitors could savor
              the unique flavors of Darag chicken dishes. Today, Abing&apos;s Darag stands as a testament to Filipino innovation, offering a taste
              of tradition perfected over decades.

            </p>
            <br></br>
            <p className="text-base md:text-lg">
              The brand stands as a symbol of dedication to quality and local tradition. Abings Darag dishes sticks to the traditional
              dishes here in the Philippines like Adobong manok, Tinola, Lechon, and Tinuom.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="md:flex-1 mt-8 sm:mt-24 ">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows={false}
              autoPlay
              dynamicHeight={false} // Prevent dynamic height adjustments
              showStatus={false}
              showIndicators
              showArrows
              swipeable={!isMobile}
            >
              <div>
                <Image
                  src="/images/store.jpg"
                  alt="Darag Chicken Breeding"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/store2.jpg"
                  alt="Darag Chicken Preparation"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/darag2.jpg"
                  alt="Abing's Darag Farm"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </Carousel>
          </div>
        </div>
   </section>   

   <section id="behindAbingsDarag" className="p-4 md:p-8 text-black mt-10">
        <h3 className="text-2xl md:text-5xl font-bold mb-16 text-center">
          Who&apos;s Behind Abing&apos;s Darag Chicken Trading?
        </h3>
        
        <div className="flex flex-col md:flex-row items-start md:space-x-8 mt-12">
        <div className="hidden md:block md:flex-1 mt-24">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows={false}
              autoPlay
              dynamicHeight={false} // Prevent dynamic height adjustments
              showStatus={false}
              showIndicators
              showArrows
              swipeable={!isMobile}
            >
              <div>
                <Image
                  src="/images/Image3.jpg"
                  alt="Darag Chicken Preparation"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/Image4.jpg"
                  alt="Abing's Darag Farm"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/Image5.jpg"
                  alt="Abing's Darag Farm"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/Image6.jpg"
                  alt="Abing's Darag Farm"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/Image8.jpg"
                  alt="Abing's Darag Farm"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </Carousel>
          </div>
        {/* Description Text */}
        <div className="md:flex-1 text-justify">
          <p className="text-base md:text-lg">
            Abing&apos;s Darag might be small in size, but it carries immense significance. During the grand opening, high-ranking officials, business leaders, and faculty from West Visayas State University (WVSU) attended, not because of the store’s physical scale, but because of its symbolic importance. The event marked an essential step in establishing a regional trademark for Iloilo City—a brand deeply rooted in local culture and agricultural innovation. 
            <br></br><br></br>
            Abing&apos;s Darag was the perfect choice for this effort because of its commitment to promoting the native Darag chicken, a breed that is unique to Panay Island. The store’s ability to preserve tradition while promoting local sustainability made it an attractive platform for creating a distinct culinary identity for Iloilo City. Many of those present at the opening recognized this opportunity and wanted to be part of shaping the city’s cultural and economic landscape through this new culinary movement.
          </p>
          <br></br>
          <p className="text-base md:text-lg">
            Moreover, the store&apos;s manager, Ma&apos;am Ladd Penaranda, played a crucial role in making the establishment a central figure in this larger effort. As a WVSU graduate and a respected entrepreneur, she has helped bring together the academic, agricultural, and business sectors to support the growth of the local economy through a focus on the Darag chicken. Abing’s Darag, despite its modest size, now stands at the forefront of this growing movement, paving the way for Iloilo City to be recognized as a culinary destination.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="md:hidden md:flex-1 mt-6 sm:mt-24">
                <Carousel
                  showThumbs={false}
                  infiniteLoop
                  useKeyboardArrows={false}
                  autoPlay
                  dynamicHeight={false} // Prevent dynamic height adjustments
                  showStatus={false}
                  showIndicators
                  showArrows
                  swipeable={!isMobile}
                >
                  <div>
                    <Image
                      src="/images/Image3.jpg"
                      alt="Darag Chicken Preparation"
                      layout="responsive"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/Image4.jpg"
                      alt="Abing's Darag Farm"
                      layout="responsive"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/Image5.jpg"
                      alt="Abing's Darag Farm"
                      layout="responsive"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/Image6.jpg"
                      alt="Abing's Darag Farm"
                      layout="responsive"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/Image8.jpg"
                      alt="Abing's Darag Farm"
                      layout="responsive"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </Carousel>
              </div>
      </div>
    </section>     

      <SuppliersSection />
      <ContactSection />


    </>
  );
};

export default HomePage;
