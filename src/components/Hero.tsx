import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

import React from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/#contact');
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />

      {/* Content */}
      <div className="relative z-10 container  mx-auto px-6 text-center" style={{ marginTop: '80px' }}>
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/myimage.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* Availability Badge */}
          <div className="flex justify-center mb-3">
            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              Available for work!
            </span>
          </div>

          {/* Location Line */}
          <p className="text-sm text-gray-500 text-center mb-6">
            Currently based in India — open to relocate
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hi I'm{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Bhagwat Prasad
            </span>{" "}
            — Full-Stack Developer
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Developed scalable applications using .NET 9 Web API, .NET MVC,
            Entity Framework, ADO.NET, React, Node.js, JavaScript and TypeScript and implemented clean-architecture–based
            RESTful backend services.  
            I have 3.6+ years of full-stack experience with .NET Core 9, C#,
            React.js, Node.js, PostgreSQL/MS SQL, HTML5, CSS3, Bootstrap, jQuery, JavaScript, TypeScript and APM tools like SigNoz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button variant="hero" size="xl">
              <a key="Contact" href="#projects">View My Work</a>
            </Button>

            <Button variant="hero" size="xl">
              <a href="/myresume/BhagwatPrasad_Resume.pdf" download>
                Download CV
              </a>
            </Button>

            <Button variant="hero" size="xl" onClick={handleGetInTouch}>
              <a key="Contact" href="#contact">Get in Touch</a>
            </Button>



          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/bhagwat0001"
              className="p-3 rounded-full bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-110"
               aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhagwat-prasad-9a8672223"
              className="p-3 rounded-full bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:bhagvaty83@gmail.com"
              className="p-3 rounded-full bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>

             {/* Twitter (X) */}
  <a
    href="https://x.com/Bhagvat07934006?t=APLc--ZZkkQRv5IlpsWWEw&s=09"
    className="p-3 rounded-full bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-110"
    aria-label="Twitter"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24H16.17l-5.214-6.817-5.97 6.817H1.68l7.73-8.823L1.254 2.25H8.08l4.713 6.231 5.451-6.231z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/s.e.bhagwat_1?igsh=dTN1YWNkbzI4b3Vy"
    className="p-3 rounded-full bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-110"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
  </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;