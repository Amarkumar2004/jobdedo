import { Search, Sparkles, Bell, HelpCircle, Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
  primaryButtonLabel: string;
  secondaryButtonLabel?: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
}

export default function Header({
  title,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPrimaryClick,
  onSecondaryClick
}: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-16 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
            /
          </span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Sparkles className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        {secondaryButtonLabel && (
          <button
            onClick={onSecondaryClick}
            className="ml-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 font-medium border border-gray-300 rounded-md transition-colors text-sm"
          >
            {secondaryButtonLabel}
          </button>
        )}
        <button
          onClick={onPrimaryClick}
          className="ml-2 px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors text-sm"
        >
          {primaryButtonLabel}
        </button>
      </div>
    </div>
  );
}
