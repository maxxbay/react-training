import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Click me!
    </motion.button>
  );
};

export default Button;
