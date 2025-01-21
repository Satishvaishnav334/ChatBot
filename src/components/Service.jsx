// Mental Health Chatbot Services Page in React.js with Tailwind CSS

import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: '24/7 Chat Support',
            description: 'Get access to our AI chatbot anytime for emotional support and guidance.',
            icon: '💬'
        },
        {
            id: 2,
            title: 'Sentiment Analysis',
            description: 'Understand your emotional state with real-time sentiment analysis.',
            icon: '📊'
        },
        {
            id: 3,
            title: 'Therapy Recommendations',
            description: 'Receive recommendations for therapy resources tailored to your needs.',
            icon: '🧠'
        },
        {
            id: 4,
            title: 'Mindfulness Exercises',
            description: 'Explore mindfulness techniques to help reduce stress and improve focus.',
            icon: '🧘'
        },
        {
            id: 5,
            title: 'Mental Health Articles',
            description: 'Access a library of articles to learn more about mental health topics.',
            icon: '📚'
        },
    ];

    return (
        <div className="px-6 py-10 bg-gray-50 text-center mt-5">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-lg text-gray-600 mb-10">Explore the range of services provided by our Mental Health Chatbot to support your well-being.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <div key={service.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-transform transform hover:scale-105">
                        <div className="text-4xl mb-4 text-indigo-500">{service.icon}</div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;