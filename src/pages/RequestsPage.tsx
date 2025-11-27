import Header from '../components/Header';

export default function RequestsPage() {
  return (
    <>
      <Header
        title="Requests"
        primaryButtonLabel="New Request"
        onPrimaryClick={() => {}}
      />
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-40 h-40 mb-8 relative">
            <div className="w-full h-full bg-amber-200 rounded-full flex items-center justify-center">
              <svg
                className="w-24 h-24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="18" y="22" width="64" height="56" rx="2" fill="#E5E7EB" />
                <line x1="18" y1="32" x2="82" y2="32" stroke="#D1D5DB" strokeWidth="2" />
                <line x1="28" y1="45" x2="72" y2="45" stroke="#9CA3AF" strokeWidth="1.5" />
                <line x1="28" y1="55" x2="72" y2="55" stroke="#9CA3AF" strokeWidth="1.5" />
                <line x1="28" y1="65" x2="50" y2="65" stroke="#9CA3AF" strokeWidth="1.5" />
                <rect x="64" y="70" width="16" height="8" rx="2" fill="#22C55E" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Capture the right details upfront
          </h2>
          <p className="text-gray-600 text-center max-w-md mb-8">
            Use Jobber's Residential Cleaning requests to gather key information and better understand a job's potential profitability.
          </p>

          <button className="px-6 py-2.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors mb-6">
            Create Your First Request
          </button>

          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline">
            Tips for creating effective requests
          </a>
        </div>
      </main>
    </>
  );
}
