// components/AboutUs.js

import Head from 'next/head';

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <header className="bg-white border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
                <div className="flex items-center justify-between mb-4 md:mb-0">
                    <h1 className="leading-none text-2xl text-gray-800">Our Company</h1>
                </div>
                <nav>
                    {/* Navigation Links */}
                </nav>
            </header>

            <div className="container mx-auto mt-6 p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">About Us</h2>
                    <p className="mb-4">Welcome to our platform! We are dedicated to providing you with the best shopping experience possible. Our mission is to offer high-quality products at affordable prices, ensuring customer satisfaction every step of the way.</p>
                    <p>Explore our wide range of products and discover amazing deals that suit your needs. Whether you're searching for electronics, fashion, home essentials, or more, we've got you covered!</p>
                </div>
            </div>

            <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
                <p>&copy; 2024 Our Company. All rights reserved.</p>
            </footer>
        </>
    );
};

export default AboutUs;
