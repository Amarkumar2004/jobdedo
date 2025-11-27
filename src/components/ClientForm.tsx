import { useState } from 'react';
import { X } from 'lucide-react';
import { ClientFormData, Client } from '../types';
import { supabase } from '../lib/supabase';

interface ClientFormProps {
  onClose: () => void;
  onSave: (client: Client) => void;
}

export default function ClientForm({ onClose, onSave }: ClientFormProps) {
  const [formData, setFormData] = useState<ClientFormData>({
    title: 'No title',
    first_name: '',
    last_name: '',
    company_name: '',
    phone_number: '',
    email: '',
    lead_source: '',
    street1: '',
    street2: '',
    city: '',
    province: '',
    postal_code: '',
    country: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([formData])
        .select()
        .single();

      if (error) throw error;

      onSave(data);
      onClose();
    } catch (err) {
      console.error('Error saving client:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-8 overflow-y-auto z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">New Client</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Primary contact details</h3>
            <p className="text-sm text-gray-600 mb-4">Provide the main point of contact to ensure smooth communication and reliable client records.</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>No title</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
                <option>Dr.</option>
              </select>
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="text"
              name="company_name"
              placeholder="Company name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-blue-700 mb-4">Communication</h3>
            <input
              type="tel"
              name="phone_number"
              placeholder="Phone number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <a href="#" className="text-sm text-blue-700 mt-2 inline-block">Communication settings</a>
          </div>

          <div>
            <h3 className="text-sm font-medium text-blue-700 mb-4">Lead information</h3>
            <input
              type="text"
              name="lead_source"
              placeholder="Lead source"
              value={formData.lead_source}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Property address</h3>
            <p className="text-sm text-gray-600 mb-4">Enter the primary service address, billing address, or any additional locations where services may take place.</p>

            <div className="space-y-3 mb-4">
              <input
                type="text"
                name="street1"
                placeholder="Street 1"
                value={formData.street1}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="street2"
                placeholder="Street 2"
                value={formData.street2}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="province"
                  placeholder="Province"
                  value={formData.province}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="postal_code"
                  placeholder="Postal code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select a country</option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-green-700 rounded"
              />
              <span className="text-sm text-gray-700">Billing address is the same as property address</span>
            </label>
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save client'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
