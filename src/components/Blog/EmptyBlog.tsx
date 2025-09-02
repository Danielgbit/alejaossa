import Image from 'next/image';
import emptyBlog from '@/../public/ilustrations/empty-blog.svg';

const EmptyBlog = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <Image 
        src={emptyBlog} 
        alt="No hay blogs"
        width={96}
        height={96}
        className="mb-4"
        priority
      />
      <h3 className="text-lg font-semibold text-dark-01 font-lexend tracking-brand mb-2">No hay blogs aún</h3>
      <p className="text-dark-03 font-lexend tracking-sub text-sm">Comienza creando tu primer blog</p>
    </div>
  );
};

export default EmptyBlog;