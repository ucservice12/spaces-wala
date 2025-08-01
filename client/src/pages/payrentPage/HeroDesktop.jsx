import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Input from './input';
import { Star, Download } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const scrollingTexts = [
    'Pay Rent',
    'Brokerage',
    'Maintenance',
    'Deposit',
    'Education Fees'
  ];

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20 pb-10 bg-gray-900 text-white"> {/* Changed background from bg-black to bg-gray-900 */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Scrolling Text */}
            <div className="mb-8 overflow-hidden">
              <motion.div 
                className="flex space-x-8 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
             >
                {[...scrollingTexts, ...scrollingTexts].map((text, index) => (
                  <span 
                    key={index}
                    className="text-2xl md:text-3xl font-semibold text-gray-400" // Good for dark background
                  >
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pay{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Brokerage
              </span>
              <br />
              on Credit
            </motion.h1>

            {/* Phone Input */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex">
                <span className="bg-gray-800 text-gray-400 px-3 py-2 rounded-l-md border border-r-0 border-gray-700"> {/* Good for dark theme */}
                  +91
                </span>
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="rounded-l-none flex-1 bg-gray-900 text-white border border-gray-700 placeholder-gray-500" // Good for dark theme
                />
              </div>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 pulse-glow"
                size="lg"
              >
                Send
              </Button>
            </motion.div>

            {/* QR Code and App Download */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-20 h-20 bg-white rounded-lg p-2">
                <div className="w-full h-full bg-black rounded grid grid-cols-3 gap-1 p-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`bg-white rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-30'}`} />
                  ))}
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-400 mb-2">or scan to Download</p> {/* Good for dark theme */}
                <p className="font-semibold">SpacesWala.com</p>
              </div>
            </motion.div>

            {/* App Store Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button variant="outline" className="bg-gray-900 text-white border-gray-700 hover:bg-gray-800"> {/* Good for dark theme */}
                <Download className="w-4 h-4 mr-2" />
                Download on App Store
              </Button>
              <Button variant="outline" className="bg-gray-900 text-white border-gray-700 hover:bg-gray-800"> {/* Good for dark theme */}
                <Download className="w-4 h-4 mr-2" />
                GET IT ON Google Play
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-2xl font-bold">4.7</span>
                  <span className="text-lg text-gray-400">/5</span> {/* Good for dark theme */}
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">App Rating</p> {/* Good for dark theme */}
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">5M+</div>
                <p className="text-xs text-gray-400">Transactions so far</p> {/* Good for dark theme */}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="phone-mockup w-80 h-[500px] p-4 float-animation bg-gray-900 border border-gray-700 rounded-3xl shadow-lg" // Good for dark theme
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="phone-screen w-full h-full p-6 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl"> {/* Good for dark theme */}
                  {/* Phone Content */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">₹</span>
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">Smarter Payments</h3> {/* Good for dark theme */}
                    <div className="bg-gray-700 rounded-lg p-3 mb-4"> {/* Good for dark theme */}
                      <p className="text-gray-300 text-sm">More Rewards</p>
                    </div>
                  </div>

                  {/* Mock App Interface */}
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4"> {/* Good for dark theme */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">Riya Gupta</span>
                        <span className="text-green-400 text-xs">CREDIT</span>
                      </div>
                      <div className="text-white text-lg font-bold">₹30,000</div>
                      <Button className="w-full mt-3 bg-primary hover:bg-primary/90">
                        Pay Now
                      </Button>
                    </div>

                    <div className="bg-gray-700 rounded-lg p-3"> {/* Good for dark theme */}
                      <p className="text-gray-300 text-sm">Bigger Savings</p>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400"> {/* Good for dark theme */}
                      <span>Payments</span>
                      <span>Policies</span>
                      <span>Rewards</span>
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-2 left-4 bg-primary rounded-full p-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;