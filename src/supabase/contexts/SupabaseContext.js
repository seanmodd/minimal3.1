import { Auth } from '@supabase/ui';
import { supabase } from 'src/supabase/initSupabase';

// ----------------------------------------------------------------------

export default function MyApp({ children }) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      {children}
    </Auth.UserContextProvider>
  );
}
