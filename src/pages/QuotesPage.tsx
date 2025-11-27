import Header from '../components/Header';

export default function QuotesPage() {
  return (
    <>
      <Header
        title="Quotes"
        primaryButtonLabel="New Quote"
        secondaryButtonLabel="Templates"
        onPrimaryClick={() => {}}
        onSecondaryClick={() => {}}
      />
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-40 h-40 mb-8 relative">
            <div className="w-full h-full bg-pink-200 rounded-full flex items-center justify-center">
              <svg
                className="w-24 h-24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="15" y="20" width="70" height="60" rx="2" fill="#E5E7EB" />
                <line x1="15" y1="30" x2="85" y2="30" stroke="#D1D5DB" strokeWidth="2" />
                <line x1="25" y1="20" x2="25" y2="25" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                <path d="M 45 45 Q 50 50 55 45" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="64" y="70" width="16" height="8" rx="2" fill="#22C55E" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Create winning quotes
          </h2>
          <p className="text-gray-600 text-center max-w-md mb-8">
            Build Residential Cleaning quotes in seconds with tailored descriptions and line items that will help you win work.
          </p>

          <div className="flex gap-3 mb-6">
            <button className="px-6 py-2.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors">
              Create Your First Quote
            </button>
            <button className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-md transition-colors">
              Start from a Template
            </button>
          </div>

          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline">
            Tips for creating effective quotes
          </a>
        </div>
      </main>
    </>
  );
}
