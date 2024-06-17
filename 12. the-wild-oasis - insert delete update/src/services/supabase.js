import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pyzpgrstqsjcqygowhpm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5enBncnN0cXNqY3F5Z293aHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNTE3NjEsImV4cCI6MjAyNTkyNzc2MX0.hECyyt-4QyjlPG2yxuIFc3tpVrstQ_Ga5tOOEPctQUU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
