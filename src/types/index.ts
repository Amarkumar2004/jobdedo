export interface Client {
  id: string;
  title: string;
  first_name: string;
  last_name: string;
  company_name?: string;
  phone_number?: string;
  email?: string;
  lead_source?: string;
  street1?: string;
  street2?: string;
  city?: string;
  province?: string;
  postal_code?: string;
  country?: string;
  created_at: string;
  updated_at: string;
}

export interface ClientFormData {
  title: string;
  first_name: string;
  last_name: string;
  company_name?: string;
  phone_number?: string;
  email?: string;
  lead_source?: string;
  street1?: string;
  street2?: string;
  city?: string;
  province?: string;
  postal_code?: string;
  country?: string;
}
