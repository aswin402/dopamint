import React from 'react';
import { DollarSign, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface MetricProgressCardProps {
  title?: string;
  value?: string;
  percentage?: string;
  className?: string;
}

export const MetricProgressCard: React.FC<MetricProgressCardProps> = ({
  title = "Volume Cleared",
  value = "$2.4M",
  percentage = "+20%",
  className = "",
}) => {
  return (
    <div className={`metric-progress-card ${className}`}>
      <div className="card-metric-title">
        <span className="metric-icon-badge">
          <DollarSign className="w-4 h-4 text-white" />
        </span>
        <p className="metric-title-text">{title}</p>
        <div className="percent-badge">
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span>{percentage}</span>
        </div>
      </div>
      <div className="metric-data">
        <p>{value}</p>
        <div className="range-track">
          <div className="range-fill"></div>
        </div>
      </div>
    </div>
  );
};
