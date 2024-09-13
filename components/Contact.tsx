'use client'

import React from 'react';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Map from './Map';

const ContactSection: React.FC = () => {
    const center: [number, number] = [10.715319, 122.562476];
    const zoom = 17;

    return (
        <section id="contact" className="relative p-4 md:p-8 pt-10">
            <div className="max-w-6xl mx-auto p-4 bg-gradient-to-br from-red-500 via-green-300 to-green-500 text-black rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Contact Us</h2>
                <div className="flex flex-col md:flex-row">
                    {/* Contact Information */}
                    <div className="flex-1 p-4 md:pr-6 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                        <p className="flex items-center mb-4 mt-16">
                            <FaMapMarkerAlt className="mr-2 text-red-500" />
                            WVSU Coop Complex, Mission Road, Jaro, Iloilo City
                        </p>
                        <p className="flex items-center mb-4">
                            <FaPhone className="mr-2 text-green-500" />
                            <a href="tel:+639272741920" className="hover:underline">0927 274 1920</a>
                        </p>
                        <p className="flex items-center mb-4">
                            <FaEnvelope className="mr-2 text-blue-500" />
                            <a href="mailto:ladd.penaranda@gmail.com" className="hover:underline">ladd.penaranda@gmail.com</a>
                        </p>
                        <p className="flex items-center">
                            <FaFacebook className="mr-2 text-blue-600" />
                            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Abings Darag Chicken
                            </a>
                        </p>
                    </div>

                    {/* Map Section */}
                    <div className="flex-1 p-4 md:pl-6">
                        <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                        <div className="relative" style={{ height: '300px' }}>
                            <Map center={center} zoom={zoom} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
