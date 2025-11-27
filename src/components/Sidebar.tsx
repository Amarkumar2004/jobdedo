import {
  Home,
  Calendar,
  Users,
  FileText,
  Search,
  Wrench,
  FileCheck,
  Megaphone,
  BarChart3,
  Receipt,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active, hasDropdown, collapsed, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
        active
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-700 hover:bg-gray-100'
      } ${collapsed ? 'justify-center px-2' : ''}`}
      title={collapsed ? label : ''}
    >
      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">{icon}</span>
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {hasDropdown && <ChevronDown className="w-4 h-4" />}
        </>
      )}
    </button>
  );
}

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Sidebar({ collapsed, onToggle, onNavigate, currentPage }: SidebarProps) {
  return (
    <div className={`${collapsed ? 'w-20' : 'w-48'} bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300`}>
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
          <LayoutGrid className="w-6 h-6 text-white" />
        </div>
      </div>

      {!collapsed && (
        <button className="mx-4 my-4 flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-300 rounded-md text-sm font-medium text-gray-700 transition-colors flex-shrink-0">
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </button>
      )}

      <nav className="flex-1 overflow-y-auto min-h-0">
        <NavItem
          icon={<Home className="w-5 h-5" />}
          label="Home"
          collapsed={collapsed}
          onClick={() => onNavigate('home')}
        />
        <NavItem
          icon={<Calendar className="w-5 h-5" />}
          label="Schedule"
          collapsed={collapsed}
          onClick={() => onNavigate('schedule')}
        />
        <NavItem
          icon={<Users className="w-5 h-5" />}
          label="Clients"
          active={currentPage === 'clients'}
          collapsed={collapsed}
          onClick={() => onNavigate('clients')}
        />
        <NavItem
          icon={<FileText className="w-5 h-5" />}
          label="Requests"
          active={currentPage === 'requests'}
          collapsed={collapsed}
          onClick={() => onNavigate('requests')}
        />
        <NavItem
          icon={<Search className="w-5 h-5" />}
          label="Quotes"
          active={currentPage === 'quotes'}
          collapsed={collapsed}
          onClick={() => onNavigate('quotes')}
        />
        <NavItem
          icon={<Wrench className="w-5 h-5" />}
          label="Jobs"
          collapsed={collapsed}
          onClick={() => onNavigate('jobs')}
        />
        <NavItem
          icon={<FileCheck className="w-5 h-5" />}
          label="Invoices"
          collapsed={collapsed}
          onClick={() => onNavigate('invoices')}
        />
        <NavItem
          icon={<Megaphone className="w-5 h-5" />}
          label="Marketing"
          hasDropdown
          collapsed={collapsed}
        />
        <NavItem
          icon={<BarChart3 className="w-5 h-5" />}
          label="Insights"
          hasDropdown
          collapsed={collapsed}
        />
        <NavItem
          icon={<Receipt className="w-5 h-5" />}
          label="Expenses"
          collapsed={collapsed}
        />
      </nav>

      <button
        onClick={onToggle}
        className="p-4 border-t border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
      >
        {collapsed ? (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
  );
}
