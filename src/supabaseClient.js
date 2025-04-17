import { createClient } from '@supabase/supabase-js'

// Ensure that the environment variable is correctly accessed
const supabaseUrl = 'https://xhwgrmvomynlacfwjfvl.supabase.co'
// Access the environment variable (make sure the .env file has this key)
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
