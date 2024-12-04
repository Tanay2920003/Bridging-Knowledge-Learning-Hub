// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase URL and Anon key
const supabaseUrl = 'https://cvkafzumzfwazexeooie.supabase.co';  // Your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2a2FmenVtemZ3YXpleGVvb2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMTQyNTUsImV4cCI6MjA0ODg5MDI1NX0.DMjbxVV5BwO85BDa-V11XD6eZOsPJcXNyRV497Gx96c';  // Your Supabase Anon Key

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
