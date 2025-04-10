import { motion } from "framer-motion";

export default function NotFound() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
    };

    return (
        <motion.div
            className="flex justify-center items-center min-h-screen bg-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="text-center">
                {/* Image and content without any unnecessary padding/margin */}
                <img src="/assets/not-found.jpg" alt="404 Not Found" className="max-w-full h-auto" />
            </div>
        </motion.div>
    );
}
