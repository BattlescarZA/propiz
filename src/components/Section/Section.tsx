import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  children: ReactNode;
  reverse?: boolean;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = 'bg-propiz-dark',
  textColor = 'text-white',
  children,
  reverse = false,
  fullHeight = true,
}) => {
  const sectionStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundColor: !backgroundImage ? backgroundColor : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section
      className={`relative ${fullHeight ? 'min-h-screen' : ''} w-full py-16 overflow-hidden`}
      style={{
        ...sectionStyle,
        backgroundBlendMode: 'multiply',
        backgroundColor: backgroundColor === 'bg-propiz-dark' ? '#3a0ca3' : '#7209b7'
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-propiz-dark to-propiz-primary opacity-80" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className={`flex flex-col ${fullHeight ? 'min-h-[80vh]' : ''} ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center gap-8 md:gap-16`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex-1" variants={itemVariants}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${backgroundImage ? 'text-white' : textColor}`}>
              {title}
            </h2>
            
            {subtitle && (
              <p className={`text-lg md:text-xl mb-6 ${backgroundImage ? 'text-white' : textColor}`}>
                {subtitle}
              </p>
            )}
            
            <div className={backgroundImage ? 'text-white' : textColor}>
              {children}
            </div>
          </motion.div>
          
          <motion.div className="flex-1 w-full" variants={itemVariants}>
            {/* Content for the other side of the section, typically an image or form */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;