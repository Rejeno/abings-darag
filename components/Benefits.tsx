'use client'

import Image from 'next/image';

const Benefits = () => {
    return (
        <section id="benefits" className="bg-gray-100 p-4 md:p-8 text-black mt-2 sm:pt-24">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-20 text-center">Why Darag Native Chicken?</h2>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {/* Superior Taste */}
                <div className="relative bg-gradient-to-br from-red-400 to-green-300 p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                    <div className="relative z-10">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            <h3 className="text-lg md:text-xl font-semibold text-black">Superior Taste</h3>
                        </div>
                        <p className="text-sm md:text-base text-black text-justify">
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
                </div>

                {/* Health Benefits */}
                <div className="relative bg-gradient-to-br from-red-400 to-green-300 p-4 md:p-6 rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl">
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                    <div className="relative z-10">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            <h3 className="text-lg md:text-xl font-semibold text-black">Health Benefits</h3>
                        </div>
                        <p className="text-sm md:text-base text-black text-justify">
                            Packed with essential nutrients and lower in fat, Darag chicken is a healthier choice. Darag chicken&apos;s natural diet and organic dietary provide plenty of health benefits. Compared to broiler chickens, these chickens are usually leaner, have less fat, and have higher protein content. They&apos;re also healthy since they&apos;re full of vitamins and other important nutrients.
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
                </div>

                {/* Sustainable Farming */}
                <div className="relative bg-gradient-to-br from-red-400 to-green-300 p-4 md:p-6 rounded-lg  transform transition-transform hover:scale-105 hover:shadow-xl">
                    <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
                    <div className="relative z-10">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            <h3 className="text-lg md:text-xl font-semibold text-black">Sustainable Farming</h3>
                        </div>
                        <p className="text-sm md:text-base text-black text-justify">
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
            </div>

            <div className="flex flex-col sm:flex-row justify-center mt-12 items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-2">
                {/* YouTube Video on the Left */}
                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start mt-12 space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Left Side Text */}
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
    );
};

export default Benefits;
