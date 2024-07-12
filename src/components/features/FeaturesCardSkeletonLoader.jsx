const FeaturesCardSkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 2xl:gap-16">
      <div className="w-[300px] xl:w-[400px] h-[500px] lg:h-[750px] bg-csDarkBlue rounded-lg" />
      <div className="w-[300px] xl:w-[400px] h-[500px] lg:h-[750px] bg-csDarkBlue rounded-lg hidden md:block" />
      <div className="w-[300px] xl:w-[400px] h-[500px] lg:h-[750px] bg-csDarkBlue rounded-lg hidden md:block" />
    </div>
  );
};

export default FeaturesCardSkeletonLoader;
