// \src\app\components\AboutUs.tsx

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 via-white to-yellow-50 px-6 py-12">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Savannah Honey: A Taste of Pure Nature
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          For over a decade, the Savannah Honey family has been dedicated to bringing you the purest, most natural honey straight from the heart of St. Elizabeth, Jamaica. Our commitment to sustainable beekeeping practices and environmental conservation ensures that every jar of our honey is a gift from nature.
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          We understand that honey is more than just a sweetener; it's a symbol of health, purity, and the beauty of the natural world. That's why we’re passionate about providing you with the finest honey, harvested with care and love.
        </p>
      </div>

      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V9a1 1 0 00-1-1H5a1 1 0 00-1 1v4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Pure and Natural</h3>
          <p className="text-gray-600">
            Our honey is unprocessed and free from any artificial additives.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Sustainable Practices</h3>
          <p className="text-gray-600">
            We’re committed to protecting the environment and the delicate balance of nature.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M3 14h18M4 6h16M4 18h16"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Rich Flavor</h3>
          <p className="text-gray-600">
            Taste the unique flavors of Jamaican flora, captured in every drop.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Family Tradition</h3>
          <p className="text-gray-600">
            Our family’s legacy of beekeeping ensures quality and authenticity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
