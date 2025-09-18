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
      <div className="relative z-10 container  mx-auto px-6 text-center" style={{ marginTop: '50px' }}>
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground mb-2">Hello, I'm</span>
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Bhagwat Prasad
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer crafting beautiful digital experiences with modern technologies
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl">
              <a key="Contact" href="#projects">View My Work</a>
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
              href="https://www.linkedin.com/in/bhagwat-prasad-9a8672223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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