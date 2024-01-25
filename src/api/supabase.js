import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iympzhxeknnubroqedml.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bXB6aHhla25udWJyb3FlZG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyOTkxNjQsImV4cCI6MjAyMDg3NTE2NH0.skFzW03QZK_cA2AwxbtmUOHqmLoWtdjIDLw3JxaSKak";
export const supabase = createClient(supabaseUrl, SUPABASE_KEY);
