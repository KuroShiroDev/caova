import clsx from 'clsx';

export const MaxWidthWrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={clsx(className, 'mx-auto w-full max-w-screen-2xl mt-28 px-2 md:px-10')}>{children}</div>;
};
