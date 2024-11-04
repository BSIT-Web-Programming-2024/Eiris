import { environment } from '../../../environments/environment.development';
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
