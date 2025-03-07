import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = 'inline-block rounded-md font-medium transition-all duration-300 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-propiz-primary text-white hover:bg-opacity-90',
    secondary: 'bg-propiz-accent text-white hover:bg-opacity-90',
  };
  
  const sizeClasses = {
    small: 'px-4 py-1.5 text-sm',
    medium: 'px-6 py-2 text-base',
    large: 'px-8 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center"
    >
      {text}
    </motion.span>
  );

  if (link) {
    // Check if it's an external link
    if (link.startsWith('http')) {
      return (
        <a href={link} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    
    // Internal link
    return (
      <Link to={link} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }
  
  // Button with onClick
  return (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
};

export default Button;