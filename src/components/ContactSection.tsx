import React from "react";

const ContactSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center py-16">
    <h2 className="text-3xl font-bold text-blue-200 mb-4">Contact</h2>
    <p className="text-blue-300 mb-2">Email: <a href="mailto:krstevski.vlad@gmail.com" className="underline">krstevski.vlad@gmail.com</a></p>
    <p className="text-blue-300">LinkedIn: <a href="https://www.linkedin.com/in/krstevski-vlad/" className="underline">linkedin.com/in/krstevski-vlad</a></p>
  </section>
);

export default ContactSection;
