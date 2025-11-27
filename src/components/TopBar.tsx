import { Search, Sparkles, Bell, HelpCircle, Settings } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm">
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs">i</span>
          </div>
          <span className="font-medium">1 day left in trial</span>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <span className="text-gray-700 font-medium">Brownie Point</span>
      </div>
      <div className="flex items-center gap-1">
        <button className="px-4 py-2 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-md transition-colors">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
