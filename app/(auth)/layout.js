import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
