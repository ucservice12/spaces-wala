import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';
import SplineScene from './SplineScene';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to simplify{' '}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                rent payments?
              </span>
            </motion.h2>

            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8" // Changed from text-xl to text-lg sm:text-xl for better mobile readability
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Smart, Rewarding and Hassle-Free
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg pulse-glow"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download our app
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-primary text-primary hover:bg-white hover:text-primary-foreground bg-gray-900"
              >
                <Download className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-900 rounded-full animate-pulse" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Instant Receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Earn Rewards</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Spline Scene */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md">
              <SplineScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
    </section>
  );
};

export default CTASection;