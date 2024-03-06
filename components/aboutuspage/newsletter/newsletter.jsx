"use client"
import { useState } from 'react';
import Head from 'next/head';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your subscribe logic here
        console.log('Subscribed with email:', email);
        // Reset email input
        setEmail('');
    };

    return (
        <>
            <Head>
                <title>Subscribe to Our  Newsletter</title>
            </Head>
            <div className="container mx-auto mt-6 py-8 p-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">Subscribe to Newsletter</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 mb-1">Email Address</label>
                            <input type="email" id="email" className="w-full border rounded-md py-2 px-3" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <button type="submit" className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Subscribe;
