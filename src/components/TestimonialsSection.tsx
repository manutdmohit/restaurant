// components/TestimonialsSection.js
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: 'The food here is simply exceptional. Every dish is a work of art, both in terms of presentation and flavor. Highly recommended!',
      author: 'John Doe',
    },
    {
      id: 2,
      text: "I've been coming to this restaurant for years, and it never fails to impress. The service is outstanding, and the ambiance is perfect for a romantic evening.",
      author: 'Jane Smith',
    },
    {
      id: 3,
      text: "Not only is the food delicious, but the staff is also incredibly friendly and attentive. It's truly a dining experience like no other.",
      author: 'Michael Johnson',
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <p className="text-lg mb-4">{testimonial.text}</p>
            <p className="text-gray-600 font-semibold">
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
