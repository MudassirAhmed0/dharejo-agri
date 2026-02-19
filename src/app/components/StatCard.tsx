import { motion } from 'motion/react';
import { LucideIcon, MapPin, TrendingUp, Award, BarChart3 } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  location: MapPin,
  trend: TrendingUp,
  award: Award,
  chart: BarChart3
};

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon?: string;
  delay?: number;
}

export function StatCard({ label, value, subtext, icon, delay = 0 }: StatCardProps) {
  const IconComponent = icon && iconMap[icon] ? iconMap[icon] : BarChart3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{label}</h3>
        <div className="p-2 bg-primary/5 rounded-lg text-primary">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>
      
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
        {value}
      </div>
      
      {subtext && (
        <p className="text-sm text-muted-foreground font-medium">
          {subtext}
        </p>
      )}
    </motion.div>
  );
}
