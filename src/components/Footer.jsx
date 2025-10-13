import React, { useState } from 'react';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await axios.post(`${API}/newsletter`, { email });
      
      if (response.data.success) {
        toast.success('Subscribed!', {
          description: response.data.message,
        });
        setEmail('');
      } else {
        toast.warning('Already Subscribed', {
          description: response.data.message,
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Subscription Failed', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <a href="mailto:rgtechcoder@gmail.com" className="hover:text-cyan-400 transition-colors">
                  rgtechcoder@gmail.com
                </a>
              </li>
              <li className="text-gray-300">
                <a href="tel:+919907725429" className="hover:text-cyan-400 transition-colors">
                  +91 99077 25429
                </a>
              </li>
              <li className="text-gray-300">Indore, India</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to stay updated with latest insights</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
                disabled={isSubscribing}
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={20} />
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="RG TechCoder" className="h-20 md:h-24 w-auto object-contain" />
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/rgtechcoder" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8">
          © 2025 RG TechCoder. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;