import { motion } from 'framer-motion';
import { Trophy, Percent, Gift, CreditCard, GraduationCap } from 'lucide-react';

const RewardsSection = () => {
  const rewards = [
    {
      icon: Trophy,
      title: "Jackpot of Rs9999 everyday",
      description: "Make your rent payment through SpacesWala and stand a chance to win ₹9,999 daily! Every transaction brings you closer to the jackpot",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Percent,
      title: "100% cashback on first payment",
      description: "First time users get a full cashback on their first rent transaction through SpacesWala. Pay rent seamlessly and earn rewards instantly!",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Gift,
      title: "Exciting rewards",
      description: "Unlock bonus rewards, exclusive credit card benefits, and premium offers with each rent payment. Get more value while managing your monthly expenses",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: CreditCard,
      title: "Guaranteed cashbacks",
      description: "Earn assured cashback every time you pay rent using your credit card via SpacesWala. Save more with every transaction!",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "20% off on education",
      description: "Save 20% on tuition fees, coaching classes, and other education expenses when paying via SpaceWala. Pay Rent. Valid twice per month!",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white"> {/* Changed background from bg-black to bg-gray-900 */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Rewards</h2>
          <p className="text-xl text-gray-300 mb-2"> {/* text-gray-300 is good for dark background */}
            Pay online and earn cashback, discounts, and bonus offers.
          </p>
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maximize savings with every payment!
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rewards.map((reward, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700/50 hover:bg-gray-700 transition-all duration-300 group" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reward.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <reward.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                {reward.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed"> {/* text-gray-300 is good for dark background */}
                {reward.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RewardsSection;