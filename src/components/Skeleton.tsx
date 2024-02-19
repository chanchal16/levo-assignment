const Skeleton = () => {
  const skeletonClass = "bg-gray animate-pulse";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 justify-center items-stretch">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((index) => (
        <div
          key={index}
          className="flex flex-col px-4 py-5 max-h-72 justify-between"
        >
          <div className="flex flex-col gap-3">
            <span className={`w-1/5 h-4 ${skeletonClass}`}></span>
            <p className={`w-full h-7 ${skeletonClass}`}></p>
            <p className={`w-full h-16 ${skeletonClass}`}></p>
            <div className={`w-1/4 h-10 self-start ${skeletonClass}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
