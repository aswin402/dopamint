import React, { useState } from 'react';
import { Heart, Repeat2, MessageCircle, Share2, CheckCircle2, Sparkles } from 'lucide-react';
import { COMMUNITY_POSTS } from '../data/twins';
import type { CommunityPost } from '../types';

export const CommunityFeed: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);

  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleRetweet = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, retweets: p.retweets + 1 } : p))
    );
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <span>LIVE CREATOR TELEMETRY & FEED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Real Creator Milestones & Fan Reactions.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            See how creators and fans are experiencing 24/7 autonomous digital twins in the wild.
          </p>
        </div>

        {/* 2x2 Grid of Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                      <span>{post.author}</span>
                      {post.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                    <div className="text-xs font-mono text-slate-400">{post.handle}</div>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400">{post.timeAgo}</span>
              </div>

              {/* Post Body */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {post.content}
              </p>

              {/* Post Interactive Metrics */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1.5 hover:text-rose-600 transition-colors cursor-pointer group"
                >
                  <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{post.likes.toLocaleString()}</span>
                </button>

                <button
                  onClick={() => handleRetweet(post.id)}
                  className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors cursor-pointer group"
                >
                  <Repeat2 className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span>{post.retweets.toLocaleString()}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>

                <div className="text-slate-400 hidden sm:inline">
                  {post.views} views
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
