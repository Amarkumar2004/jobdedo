/*
  # Create clients table

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `title` (text, e.g., "No title", "Mr.", "Mrs.", etc.)
      - `first_name` (text)
      - `last_name` (text)
      - `company_name` (text)
      - `phone_number` (text)
      - `email` (text)
      - `lead_source` (text)
      - `street1` (text)
      - `street2` (text)
      - `city` (text)
      - `province` (text)
      - `postal_code` (text)
      - `country` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `clients` table
    - Add policy for all users to read and write clients (for demo purposes)
*/

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text DEFAULT 'No title',
  first_name text NOT NULL,
  last_name text NOT NULL,
  company_name text,
  phone_number text,
  email text,
  lead_source text,
  street1 text,
  street2 text,
  city text,
  province text,
  postal_code text,
  country text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all access to clients"
  ON clients
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
