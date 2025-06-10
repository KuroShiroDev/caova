import React from 'react';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-content">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>

        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-gray-100 rounded-full animate-spin animate-reverse border-t-secondary"></div>

        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default PageLoader;
