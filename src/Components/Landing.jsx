import React, { useState } from "react";
import NavBar from "../Sharable/NavBar";
import Footer from "../Sharable/Footer";
import Spline from "@splinetool/react-spline";
import Img1 from "../assets/Img1.jpg";
import Im2 from "../assets/Im2.jpg"
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";
import Img6 from "../assets/Img6.jpg";
import Img7 from "../assets/Img7.jpg";
import Img8 from "../assets/Img8.jpg";


const faqs = [
    {
        question: "What is this platform about?",
        answer: "This platform helps users with placement preparation, networking, and more.",
    },
    {
        question: "How can I register?",
        answer: "Click on the Sign Up button and fill in the required details.",
    },
    {
        question: "Is the platform free to use?",
        answer: "Yes, students can use it for free.",
    },
];

const speakers = [
    { id: 1, name: "AMIT SIRCAR", title: "AI Researcher", image: "https://outstandingspeakersbureau.in/wp-content/uploads/2023/10/AMIT-SIRCAR.jpg" },
    { id: 2, name: "ATUL KULSHRESHTHA", title: "Software Engineer", image: "https://outstandingspeakersbureau.in/wp-content/uploads/2023/10/ATUL-KULSHRESHTHA.webp" },
    { id: 3, name: "BALAJI VISWANATHAN", title: "Cybersecurity Expert", image: "https://outstandingspeakersbureau.in/wp-content/uploads/2023/10/balaji-644.webp" },
];

const Landing = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <NavBar />

            {/* Spline Background Section */}
            <div className="relative h-[70vh] w-full flex flex-col md:flex-row items-center justify-center text-white">
                {/* Spline Model */}
                <div className="absolute inset-0 w-full h-full">
                    <Spline scene="https://prod.spline.design/tULxKLLoYMYBnZ62/scene.splinecode" />
                </div>

                {/* Content Over Spline */}
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                        "Be a part of the future—showcase your skills, innovate, and compete with the brightest minds. Join us at <span className="text-green-500">TechUdaan</span> and make your mark in the world of technology!"
                    </h1>
                    <div className="mt-4 space-x-2 cursor-pointer">
                        <button className="bg-green-600 p-3 rounded-md">Get Registered</button>
                        <button className="bg-green-600 p-3 rounded-md">Add to Calendar</button>
                    </div>
                </div>
            </div>

            {/* Second Section with Background */}
            <div className="relative h-[50vh] w-full flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl text-center font-semibold p-2">
                    "Trusted by <span className="text-green-500">Leading Companies</span> & Empowering <span className="text-green-500">Top Colleges</span> with Cutting-Edge Solutions"
                </h1>
            </div>

            <div className="">
                <h1 className="text-white text-4xl font-Inter text-center">Our Events</h1>
                <div class="flex flex-col md:flex-row gap-4 justify-center items-center m-3">
                    <div class="h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full rounded-md" src={Img1} alt="Girl Image" />
                    </div>
                    <div class="h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full rounded-md" src={Im2} alt="Girl Image" />                    </div>

                    <div class="p-4 h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full" src={Img3} alt="boy Image" />
                    </div>
                    <div class="h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full" src={Img4} alt="boy Image" />
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-4 justify-center items-center m-3">
                    <div class="h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full rounded-md" src={Img5} alt="Girl Image" />
                    </div>
                    <div class="h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full rounded-md" src={Img6} alt="Girl Image" />                    </div>

                    <div class="p-4 h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full" src={Img7} alt="boy Image" />
                    </div>
                    <div class="h-[40vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[40vh] md:w-[50vw] bg-slate-900 rounded-3xl">
                        <img className="flex justify-center items-center object-contain h-full w-full" src={Img8} alt="boy Image" />
                    </div>
                </div>
            </div>

            <div className="bg-black min-h-screen py-10 px-4">
            {/* Speakers Section */}
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-400 mb-8">Our Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {speakers.map((speaker) => (
                        <div
                            key={speaker.id}
                            className="bg-gray-900 p-5 rounded-lg text-center border border-gray-700 shadow-md hover:shadow-lg transition"
                        >
                            <img src={speaker.image} alt={speaker.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
                            <div className="text-xl font-semibold text-white">{speaker.name}</div>
                            <div className="text-green-400">{speaker.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto bg-gray-900 p-6 mt-12 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-green-400 mb-4 text-center">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 pb-2">
                            <button
                                className="w-full text-left text-lg font-medium flex justify-between items-center p-3 text-white"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="text-green-400">{openIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === index && <p className="p-3 text-green-400 bg-gray-800 rounded">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>

            <Footer />
        </div>
    );
};

export default Landing;
