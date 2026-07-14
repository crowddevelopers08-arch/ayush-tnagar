"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BackconsultationModal } from './backpopupform';

const BackcombinedComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+919150900387';
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      
      <div 
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10" 
        style={{fontFamily: "'Outfit', sans-serif"}}
        ref={bannerRef}
      >
        {/* Appointment Banner Section - Centered */}
        <div className="flex justify-center">
          <div className={`w-full bg-[#0f1524] text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
              {/* Main content - Centered */}
              <div className="text-center w-full max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-5 leading-tight">
                  Book Your Appointment Today
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
                  Don't let back pain control your life. Get safe, natural & lasting relief at Ayush Ortho.
                </p>
                
                {/* Information section - Centered */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-4 w-full max-w-xl mx-auto">
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 text-[#e13e20]">
                      <MapPin className="w-full h-full" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">C Block, Lakshmi Homes, Mariamman Koil St, Vinoba nagar, Saram, Puducherry, Tamil Nadu 605008</p>
                  </div>
{/*                   
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 text-[#e13e20]">
                      <Phone className="w-full h-full" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">Call Now: +91 91509 00387</p>
                  </div> */}
                  
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0 text-[#e13e20]">
                      <Clock className="w-full h-full" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">Open Daily: 10 AM – 8 PM</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Section - Centered */}
              <div className="w-full max-w-md flex flex-col items-center space-y-3 sm:space-y-4">
                <button 
                  onClick={handleOpenModal}
                  className="w-full bg-[#e13e20] hover:bg-[#c5361b] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-base sm:text-lg md:text-xl shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e13e20] focus:ring-opacity-50"
                >
                  Book Your Appointment Today
                </button>
                
                <button 
                  onClick={handleCall}
                  className="w-full flex items-center justify-center text-white border-2 border-[#e13e20] hover:bg-[#e13e20] font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e13e20] focus:ring-opacity-50 text-sm sm:text-base md:text-lg"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Call Now: +91 91509 00387
                </button>
                
                {/* Additional info */}
                {/* <div className="text-center text-sm text-gray-300 mt-2">
                  <p>✨ Free consultation for senior citizens every Thursday</p>
                </div> */}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-[#e13e20] opacity-10"></div>
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#e13e20] opacity-5"></div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <BackconsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 6s infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
};

export default BackcombinedComponent;
