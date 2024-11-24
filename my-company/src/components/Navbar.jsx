// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Li
