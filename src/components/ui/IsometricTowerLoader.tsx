import React from 'react';

export const IsometricTowerLoader: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-6 ${className}`}>
      <div className="tower-loader">
        <div className="tower-box box-1">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="tower-box box-2">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="tower-box box-3">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="tower-box box-4">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
      </div>
    </div>
  );
};
