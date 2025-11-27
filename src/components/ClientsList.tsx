import { Client } from '../types';

interface ClientsListProps {
  clients: Client[];
}

export default function ClientsList({ clients }: ClientsListProps) {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 text-sm font-semibold text-gray-900">Name</th>
            <th className="text-left py-3 text-sm font-semibold text-gray-900">Company</th>
            <th className="text-left py-3 text-sm font-semibold text-gray-900">Phone</th>
            <th className="text-left py-3 text-sm font-semibold text-gray-900">Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td className="py-4 text-sm text-gray-900">
                {client.first_name} {client.last_name}
              </td>
              <td className="py-4 text-sm text-gray-600">
                {client.company_name || '-'}
              </td>
              <td className="py-4 text-sm text-gray-600">
                {client.phone_number || '-'}
              </td>
              <td className="py-4 text-sm text-gray-600">
                {client.email || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
