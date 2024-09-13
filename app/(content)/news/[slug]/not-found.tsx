import React from "react";

export default function NewNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl">New Not Found</h2>
      <p className="text-gray-300 text-xl">
        That specific New you are looking for could not be found.
      </p>
    </div>
  );
}
