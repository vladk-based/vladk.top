import React from "react";

interface Job {
  title: string;
  company: string;
  url: string;
  term: string;
  achievements: string[];
  image: string; // image path
}

const jobs: Job[] = [
  {
    title: "Full Stack Engineer",
    company: "FirstPay.Me",
    url: "https://theletsgo.app/",
    term: "March 2025 - Present",
    achievements: [
        "Built a full stack financial service application for automated structured p2p repayments.",
        "Build the client using React, Typescript, TailwindCss and Vite.",
        "Build the server using Nodejs and Express.",
        "Integrated Stripe's payment processing under PCI DSS compliance.",
        "Deployed a CMS panel using React to manually control transactions for administrators and prevent abuse",
    ],
    image: "/public/fpm.png"
  },
  {
    title: "Backend Lead",
    company: "Theletsgoapp Inc.",
    url: "https://firstpay.me/",
    term: "May 2024 - March 2025",
    achievements: [
        "Built backend API on EC2 using Node.js, Mongodb for iOS and Android clients.",
        "Integrated Yelp, Google Places, S3 Bucket and Cloudflare Stream APIs.",
        "Integrated a websocket server using socketio for live chat.",
        "Implemented docker and git actions CI/CD pipeline for automated tests, builds and deployments.",
        "Deployed a CMS panel using Vue.js and Quasar framework for content management and analytics."
    ],
    image: "/public/tlga.png"
  }
];

const WorkExperienceSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center py-16 w-full">
    <h2 className="text-4xl font-bold text-blue-200 mb-8">Work Experience</h2>
    <div className="w-full max-w-4xl flex flex-col gap-8">
      {jobs.map((job) => (
        <div
          key={job.title}
          className="mx-4 border-x-3 border-blue-900 rounded-3xl bg-transparent flex flex-col lg:flex-row items-center px-10 lg:px-15 py-8 gap-6"
        >
          <div className="flex-2 flex flex-col items-center text-center ml-8">
            <h3 className="text-xl font-bold text-blue-100 mb-1">{job.title}</h3>
            <div className="text-blue-300 mb-1">{job.company}</div>
            <div className="text-blue-400 mb-3 text-sm">{job.term}</div>
            <ul className="list-disc text-blue-200 text-left mx-auto lg:mx-0">
              {job.achievements.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <img src={job.image} alt={job.company + ' work preview'} className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperienceSection;
