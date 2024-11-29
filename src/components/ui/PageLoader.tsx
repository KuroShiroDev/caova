import { LoaderIcon } from 'lucide-react';
import React from 'react';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center w-100 h-2/3 min-h-content">
      <LoaderIcon className="animate-spin text-4xl" />
    </div>
  );
};

export default PageLoader;
