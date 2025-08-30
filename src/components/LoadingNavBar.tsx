// components/SkeletonNavbar.tsx
const LoadingNavBar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo skeleton con shimmer */}
        <div className="w-[30%] relative overflow-hidden">
          <div className="h-8 bg-gradient-to-r from-purple-200 to-purple-300 rounded animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>

        {/* Nav items con shimmer */}
        <div className="flex justify-evenly w-[40%]">
          <div className="flex space-x-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative overflow-hidden">
                <div className="h-6 bg-gradient-to-r from-purple-200 to-purple-300 rounded w-16 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón con shimmer */}
        <div className="w-[30%] flex justify-end relative overflow-hidden">
          <div className="h-10 bg-gradient-to-r from-purple-200 to-purple-300 rounded w-24 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer"></div>
        </div>
      </div>
    </nav>
  );
};

export default LoadingNavBar;
