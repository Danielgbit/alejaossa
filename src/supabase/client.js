import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jfjioikdluhpsdnkfhdj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmamlvaWtkbHVocHNkbmtmaGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NTE0NjgsImV4cCI6MjA3MjQyNzQ2OH0.WtLaKLhRvfIfp7XEVZhfAxaOqld-7pbaOGMPbrAl10g"
);
