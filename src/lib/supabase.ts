
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lcrwcumbjkqifegnbwmo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcndjdW1iamtxaWZlZ25id21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTkxOTQsImV4cCI6MjA1NzM3NTE5NH0.RH3KcfF9Qlys0xaVgsNUEkjiRlS7XhHfwV5XVdFFHxI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
