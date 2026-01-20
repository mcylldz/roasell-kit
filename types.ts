export interface StatItem {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  trend?: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  type: 'video' | 'image';
  videoSrc?: string;
  image?: string;
  platform?: string;
  resultValue?: string;
}

export interface BrandLogo {
  name: string;
  image: string;
  className?: string;
}

export interface ProgramStep {
  day: string;
  title: string;
}