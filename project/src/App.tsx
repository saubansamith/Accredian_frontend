import React, { useState } from 'react';
import { Gift, Users, Trophy, ArrowRight, Star, GraduationCap } from 'lucide-react';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
            alt="Students collaborating"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 relative z-10">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <GraduationCap size={32} />
              Accredian
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star size={16} className="text-yellow-500" />
                Earn up to $100 per referral
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Share Knowledge,<br />
              <span className="text-blue-600">Earn Rewards</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Accredian's referral program and earn exciting rewards while helping your friends unlock their potential through quality education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Refer Now
                <ArrowRight className="ml-2" size={20} />
              </button>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Learn how it works →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Successful Referrals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$250K+</div>
              <div className="text-gray-600">Rewards Paid</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Accredian's Referral Program?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who are earning rewards while helping their friends access quality education
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Generous Rewards</h3>
            <p className="text-gray-600">Earn up to $100 for every successful referral you make. The more you share, the more you earn!</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Help Friends Learn</h3>
            <p className="text-gray-600">Share valuable learning opportunities with your network and help them advance their careers</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
            <p className="text-gray-600">Monitor your referrals and rewards in real-time through our intuitive dashboard</p>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Accredian Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our most popular courses to share with your friends
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                alt="Web Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-600 mb-4">Master modern web development with our comprehensive course</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">$499</span>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Refer Now →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src="https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=1974"
                alt="Data Science"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600 mb-4">Learn data analysis, visualization, and machine learning</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">$699</span>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Refer Now →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=2070"
                alt="Mobile Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-600 mb-4">Build iOS and Android apps with React Native</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">$599</span>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Refer Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start earning rewards in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">1</div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-100"></div>
              <h3 className="text-xl font-semibold mb-2">Invite Friends</h3>
              <p className="text-gray-600">Share your unique referral link with friends interested in learning</p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">2</div>
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-100"></div>
              <h3 className="text-xl font-semibold mb-2">Friends Enroll</h3>
              <p className="text-gray-600">When they enroll in a course using your referral link</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-600">Get rewarded with up to $100 for each successful referral</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people who have successfully referred their friends to Accredian
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  alt="Sarah M."
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <div className="text-gray-600 text-sm">Web Developer</div>
                </div>
              </div>
              <p className="text-gray-600">"I've referred 5 friends to Accredian's web development course, and they all loved it. The referral rewards are just a bonus!"</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                  alt="John D."
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">John D.</h4>
                  <div className="text-gray-600 text-sm">Data Scientist</div>
                </div>
              </div>
              <p className="text-gray-600">"The referral process is super smooth, and the support team is always helpful. I've earned over $500 in rewards!"</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                  alt="Emma R."
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Emma R.</h4>
                  <div className="text-gray-600 text-sm">Mobile Developer</div>
                </div>
              </div>
              <p className="text-gray-600">"I love being able to help my friends start their coding journey while earning rewards. Accredian makes it a win-win!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Accredian's referral program today and start earning rewards while helping your friends succeed
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              Start Referring Now
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Referral Modal */}
      <ReferralModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;