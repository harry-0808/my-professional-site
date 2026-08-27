import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          About Spice Garden
        </h1>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src="https://source.unsplash.com/random/800x600?restaurant,interior"
              alt="Restaurant interior"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Spice Garden Restaurant brings the authentic flavors of India to your table. Our chefs use traditional recipes and fresh, locally sourced ingredients to create dishes that are both comforting and exciting.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2024, we have quickly become a favorite destination for families, couples, and food enthusiasts seeking a memorable dining experience. Our warm ambiance, attentive service, and commitment to quality make every visit special.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're craving classic butter chicken, exploring regional specialties, or enjoying our freshly baked naan, Spice Garden promises a culinary journey that celebrates the rich diversity of Indian cuisine.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              Our Values
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-2 border-l-4 border-indigo-500 bg-indigo-50 rounded">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-indigo-800">Quality Ingredients</h3>
                  <p className="text-sm text-gray-600">
                    We source the freshest produce, finest spices, and highest quality meats and dairy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-2 border-l-4 border-indigo-500 bg-indigo-50 rounded">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20H1a2 2 0 01-2-2V6a2 2 0 012-2h2.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-indigo-800">Authentic Flavors</h3>
                  <p className="text-sm text-gray-600">
                    Our recipes are passed down through generations, ensuring genuine taste and aroma.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-2 border-l-4 border-indigo-500 bg-indigo-50 rounded">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H3m8 4H3m8 4H3m11-8H9m8 4h-5m8 4h-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-indigo-800">Warm Hospitality</h3>
                  <p className="text-sm text-gray-600">
                    Our friendly staff treats every guest like family, ensuring a welcoming atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/menu" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all">
              View Our Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}