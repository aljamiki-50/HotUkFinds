"use client";
import { useState } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const { data: session, status, ClientSafeProvider } = useSession();
  const sessionEmail = session?.user?.email;
  const router = useRouter();

  // console.log("your session is ", session);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch("/api/mailchimp", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ email: email || sessionEmail }),
  //   });

  //   const data = await res.json();

  //   if (data.error) {
  //     console.log(data.error);
  //     return;
  //   }

  //   // console.log("here's your data: ", data);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email input
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const res = await fetch("/api/mailchimp", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email || sessionEmail }),
    });

    const data = await res.json();

    if (data.error) {
      console.log(data.error);
      return;
    }

    router.push("/"); // Change "/success" to the desired success page URL
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Head>
        <title>Subscribe to Our Newsletter</title>
      </Head>
      <div className="container mx-auto mt-6 py-8 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Subscribe to Newsletter</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md py-2 px-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
