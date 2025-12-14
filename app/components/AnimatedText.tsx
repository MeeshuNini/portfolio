'use client';

import { useEffect, useState } from 'react';

export default function AnimatedText() {
  const roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Enthusiast',
    'Coffee Lover ☕',
    'Cat Enthusiast 🐱',
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = roles[currentRole];

      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentFullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(100);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, typingSpeed, roles]);

  return (
    <div className="h-8 md:h-10">
      <span className="text-xl md:text-2xl text-[#D291BC] dark:text-pink-200">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}
