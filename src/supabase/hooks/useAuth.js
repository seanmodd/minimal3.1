import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import { supabase } from 'src/supabase/initSupabase';

//* below is from here: https://github.com/supabase/supabase/blob/master/examples/nextjs-auth-tailwind/pages/auth.js
export const RequireAuth = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);
};

export const useUser = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};

export const AuthUser = () => {
  const { user } = useAuth();
  return user;
};

//* below is from youtube tutorial: https://github.com/dom-the-dev/movie-tinder-YouTube/blob/bucket-storage/src/auth.js

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// export const useAuth = () => useContext(authContext);
export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = async (email) => {
    const { error, user } = await supabase.auth.signIn({ email });

    if (error) {
      console.log(error);
    }

    return { error, user };
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }

    setUser(null);
  };

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);

    const auth = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user);
      }

      if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => auth.data.unsubscribe();
  }, []);

  return {
    user,
    login,
    logout,
  };
}
