import React, { Component } from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AISolutions from './components/AISolutions';
import About from './components/about';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { services, aiSolutions, portfolioProjects, testimonials, blogPosts, stats } from './data/mock';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // You can log errorInfo here if needed
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: 'center', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <pre>{this.state.error && this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Hero />
        <Services services={services} />
        <AISolutions aiSolutions={aiSolutions} />
        <About stats={stats} />
        <Portfolio projects={portfolioProjects} />
    {/* <Testimonials testimonials={testimonials} /> */}
        <CTABanner />
        <Blog blogPosts={blogPosts} />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;