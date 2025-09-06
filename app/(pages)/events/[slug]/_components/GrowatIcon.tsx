import React from "react";
import {
  Globe,
  Calendar,
  Clock,
  Link,
  Users,
  Cog,
  Eye,
  Landmark,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  OctagonAlert,
  Monitor,
  CloudAlert,
} from "lucide-react";

const iconMap = {
  globe: Globe,
  calendar: Calendar,
  clock: Clock,
  link: Link,
  users: Users,
  cog: Cog,
  eye: Eye,
  landmark: Landmark,
  "book-open": BookOpen,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  "octagon-alert": OctagonAlert,
  monitor: Monitor,
};

type GrowatIconProps = {
  name?: string;
  className?: string;
};

const GrowatIcon = ({ name, className = "" }: GrowatIconProps) => {
  let iconKey;
  if (!name) {
    iconKey = "cloud-alert";
  } else {
    iconKey = name.toLowerCase();
  }

  let IconComponent;

  if (!(iconKey in iconMap)) {
    console.warn(`Icon "${name}" not found in permitted icons; default to CloudAlert.`);
    IconComponent = CloudAlert; // Default icon if not found
  } else {
    IconComponent = iconMap[iconKey as keyof typeof iconMap];
  }

  return <IconComponent className={className} />;
};

export default GrowatIcon;
