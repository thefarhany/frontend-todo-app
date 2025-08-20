import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} TodoApp. All rights reserved.
    </footer>
  );
};

export default Footer;
