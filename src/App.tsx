import { useState } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import ClientsPage from './pages/ClientsPage';
import QuotesPage from './pages/QuotesPage';
import RequestsPage from './pages/RequestsPage';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('clients');

  const renderPage = () => {
    switch (currentPage) {
      case 'clients':
        return <ClientsPage />;
      case 'quotes':
        return <QuotesPage />;
      case 'requests':
        return <RequestsPage />;
      default:
        return <ClientsPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          onNavigate={setCurrentPage}
          currentPage={currentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
