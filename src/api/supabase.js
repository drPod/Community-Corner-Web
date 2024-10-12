import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rsusuweuyabymzefqvbh.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzdXN1d2V1eWFieW16ZWZxdmJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MTYwMTAsImV4cCI6MjA0NDI5MjAxMH0.u5OQAjC-fngPHqxkqPTO6jbGtWP0aQSi4n5ZjTZIKwo";
const supabase = createClient(supabaseUrl, SUPABASE_KEY);

export { supabase, supabaseUrl };
