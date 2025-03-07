import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-discord-dark p-6 rounded-lg border border-discord-gold/20 shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-discord-blurple/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-2 text-discord-text">{title}</h3>
      <p className="text-discord-muted">{description}</p>
    </div>
  );
}; 