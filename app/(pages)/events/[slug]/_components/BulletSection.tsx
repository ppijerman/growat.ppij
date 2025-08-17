import React from "react";
import { Globe, Camera, Code, Cpu, Cloud, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Camera,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Code,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Cpu,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Cloud,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: Shield,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

type FeatureCardProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, text }) => (
  <div className="flex flex-col items-center text-center p-6">
    <Icon className="w-15 h-15 mb-4 md:w-20 md:h-20 md:mb-6" />
    <p className="text-lg md:text-xl">{text}</p>
  </div>
);

const ResponsiveGrid = () => {
  return (
    <div className="min-h screen flex items-center justify-center bg-white px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} Icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
