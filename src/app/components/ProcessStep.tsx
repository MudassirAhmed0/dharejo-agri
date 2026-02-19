import { motion } from 'motion/react';
import { LucideIcon, Tractor, Droplets, Activity, Scissors, Sun, Package } from 'lucide-react';

// Map icon strings to components since we can't store functions in JSON easily
const iconMap: Record<string, LucideIcon> = {
  tractor: Tractor,
  water: Droplets,
  activity: Activity,
  scissors: Scissors,
  sun: Sun,
  package: Package
};

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export function ProcessStep({ step, title, description, icon }: ProcessStepProps) {
  const IconComponent = iconMap[icon] || Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-border -z-10 group-last:hidden md:hidden" />
      
      <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 md:h-full">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
              {step}
            </span>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
