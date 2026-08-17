import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-muted-foreground/10 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl font-heading font-black tracking-tight">PAGE NOT FOUND</p>
        </div>
      </div>
      
      <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
        The page you are looking for doesn't exist or has been moved to another universe.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold transition-all hover:gap-4 hover:pr-10 hover:shadow-xl active:scale-95"
      >
        <MoveLeft className="w-5 h-5" /> Back to Home
      </Link>
    </div>
  );
}
