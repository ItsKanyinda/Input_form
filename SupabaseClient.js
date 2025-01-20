
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nggucsasyksohvjnjzru.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZ3Vjc2FzeWtzb2h2am5qenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2ODU5NzYsImV4cCI6MjA1MjI2MTk3Nn0.AaogHxq1WAJPHyrn8t4fZ9I_VjXchAAUP5bQVEqwcSI
const supabase = createClient(supabaseUrl, supabaseKey)
