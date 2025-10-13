import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Blog = ({ blogPosts }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in technology and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>
            ))
          ) : (
            <div className="col-span-full py-12 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Details not found</p>
            </div>
          )}
        </div>

        {blogPosts && blogPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
              Read More Articles
              <ArrowRight size={20} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;