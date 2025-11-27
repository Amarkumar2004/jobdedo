import { useState, useEffect } from 'react';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';
import ClientForm from '../components/ClientForm';
import ClientsList from '../components/ClientsList';
import { Client } from '../types';
import { supabase } from '../lib/supabase';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (err) {
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveClient = (newClient: Client) => {
    setClients([newClient, ...clients]);
  };

  if (loading) {
    return (
      <>
        <Header
          title="Clients"
          primaryButtonLabel="New Client"
          onPrimaryClick={() => setShowForm(true)}
        />
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header
        title="Clients"
        primaryButtonLabel="New Client"
        onPrimaryClick={() => setShowForm(true)}
      />
      <main className="flex-1 overflow-y-auto bg-white">
        {clients.length === 0 ? (
          <EmptyState onAddClick={() => setShowForm(true)} />
        ) : (
          <div className="p-6">
            <ClientsList clients={clients} />
          </div>
        )}
      </main>
      {showForm && (
        <ClientForm
          onClose={() => setShowForm(false)}
          onSave={handleSaveClient}
        />
      )}
    </>
  );
}
