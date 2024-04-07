"use client"

import Head from "next/head";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact us for any inquiries or feedback."
        />
        <meta property="og:image" content="/opengraph-image.jpg" />
      </Head>
      <div className=" h-screen container mx-auto mt-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
