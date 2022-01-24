import React from 'react';

export default function Loading() {
  return (
    <div className="border-x-red-600 animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
