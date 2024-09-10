import React from "react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl">404 Not Found</h2>
      <p className="text-gray-300 text-xl">
        The resource you are looking for could not be found.
      </p>
    </div>
  );
}
