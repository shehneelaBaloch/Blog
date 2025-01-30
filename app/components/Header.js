"use client";

import Link from "next/link";
import { useState } from "react";
import "../globals.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <h2 className="logo">
          <Link href="/">My Blog</Link>
        </h2>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navbar Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </nav>
      </div>
    </header>
  );
}
