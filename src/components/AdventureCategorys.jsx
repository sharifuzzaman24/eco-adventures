const AdventureCategories = ({ adventures }) => {
  const categories = adventures.reduce((acc, adventure) => {
    if (!acc[adventure.category]) acc[adventure.category] = [];
    acc[adventure.category].push(adventure);
    return acc;
  }, {});

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-10 text-[#2ECC71] mt-20">
        Browse Adventures by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {Object.entries(categories).map(([category, adventures], index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden">
            <img
              src={adventures[0].image}
              alt={category}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{category}</h3>
              <p className="text-gray-500 text-sm">
                {adventures.length} adventures available
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdventureCategories;