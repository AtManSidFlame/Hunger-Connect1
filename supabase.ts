import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL="https://gkaghcyvzvpaisukyvry.supabase.co"
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYWdoY3l2enZwYWlzdWt5dnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MzUwNDEsImV4cCI6MjA4MDAxMTA0MX0.VcC9AKY94xzFWhKSxBPLoia9YWDrZAV_ER6WBSBzEUo"

if (!SUPABASE_URL) {
  throw new Error("supabaseUrl is required.");
}

if (!SUPABASE_ANON_KEY) {
  throw new Error("supabaseAnonKey is required.");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
