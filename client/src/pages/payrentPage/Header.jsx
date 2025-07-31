import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-border"
     
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
            <span className="text-black font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-white">SpacesWala</span>
        </motion.div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white hover:text-white">
            <Heart className="w-4 h-4 mr-2" />
            Saved
          </Button>
         
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
