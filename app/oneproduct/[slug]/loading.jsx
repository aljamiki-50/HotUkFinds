import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-yellow-900 text-center">
        <span className="visually-hidden">Loading...</span>
      <h1 className="mt-5">Loading...</h1>
      <p className="lead">Please wait while we load the content...</p>
    </div>
  );
};

export default Loading;