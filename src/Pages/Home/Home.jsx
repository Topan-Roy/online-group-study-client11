import React from 'react';
import Banner from '../Banner/Banner';
import FeatureSection from '../FeatureSection/FeatureSection';
import FAQ from '../FAQ/FAQ';
import RecentAssignments from '../RecentAssignments/RecentAssignments';
import Testimonials from '../Testimonials/Testimonials';
import AboutWhyChooseUs from '../AboutWhyChooseUs/AboutWhyChooseUs';
import ReviewsSection from '../ReviewsSection/ReviewsSection';


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner></Banner>
            <FeatureSection></FeatureSection>
          
           
            <RecentAssignments></RecentAssignments>
             <Testimonials></Testimonials>
             <ReviewsSection></ReviewsSection>
             <FAQ></FAQ>
             <AboutWhyChooseUs></AboutWhyChooseUs>
           
        </div>
    );
};

export default Home;