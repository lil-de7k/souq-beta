const CategoryScroll = ({ categories }) => {
  return (
    <div className="w-full px-4 sm:px-0 md:px-15 py-6 ">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-4 justify-items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden shadow">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-1 text-xs sm:text-sm md:text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroll;