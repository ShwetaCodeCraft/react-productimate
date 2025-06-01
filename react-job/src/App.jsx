import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListing from './components/JobListing';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      {/* Sample job card rendering */}
      <JobListing
        job={{
          id: 1,
          type: 'Full-Time',
          title: 'Frontend Developer',
          description: 'We are looking for a passionate React developer to join our team and build beautiful UIs.',
          salary: '$60,000',
          location: 'Remote',
        }}
      />

      {/* Footer inside a Card */}
      <Card bg="bg-gray-200">
        <p className="text-center text-gray-800 font-medium">
          © 2025 React Jobs. All rights reserved.
        </p>
      </Card>
    </>
  );
};

export default App;
