import React from "react";

const ContactSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center py-16">
    <h2 className="text-2xl font-bold text-blue-200 mb-4">Contact</h2>
    <p className="text-blue-300 mb-2">Email: <a href="mailto:vlad@example.com" className="underline">vlad@example.com</a></p>
    <p className="text-blue-300">LinkedIn: <a href="https://linkedin.com/in/vladkrstevski" className="underline">linkedin.com/in/vladkrstevski</a></p>
  </section>
);

export default ContactSection;
