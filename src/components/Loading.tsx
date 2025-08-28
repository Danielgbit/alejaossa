const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-violet-600"></div>
        <p className="text-dark-01 font-lexend tracking-brand text-sm">Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
