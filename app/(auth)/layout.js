import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-pink-300 h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
