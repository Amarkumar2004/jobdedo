interface EmptyStateProps {
  onAddClick?: () => void;
}

export default function EmptyState({ onAddClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-40 h-40 mb-8 relative">
        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
          <svg
            className="w-24 h-24"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="20" y="25" width="60" height="50" rx="2" fill="#E5E7EB" />
            <rect x="20" y="25" width="60" height="8" rx="2" fill="#9CA3AF" />
            <line x1="28" y1="42" x2="52" y2="42" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="50" x2="52" y2="50" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="58" x2="42" y2="58" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
            <rect x="64" y="64" width="16" height="8" rx="2" fill="#22C55E" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        All your clients in one place
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Keep your client details organized and your day running smoothly with Jobber's Residential Cleaning client tools.
      </p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={onAddClick}
          className="px-6 py-2.5 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors"
        >
          Add Your First Client
        </button>
        <button className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-md transition-colors">
          Import Clients
        </button>
      </div>

      <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline">
        Tips for managing clients effectively
      </a>
    </div>
  );
}
