"use client";
import React from "react";
const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return <div>
    <div style={{ color: "red" }}>error page viewsId: {error.message}</div>
    <button style={{backgroundColor: 'red'}} onClick={reset}>reload page</button>
  </div>;
};

export default ErrorBoundary;
