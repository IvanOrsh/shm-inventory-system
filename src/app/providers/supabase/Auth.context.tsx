import { useState, useEffect, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

import { supabase } from "./supabase.config";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  // TODO: add types
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const fetchUser = async (
          event: AuthChangeEvent,
          session: Session | null,
        ) => {
          // TODO: remove console log
          console.log(event, session);
          if (session?.user == null) {
            setUser(null);
          } else {
            setUser(session?.user);
          }
        };

        fetchUser(event, session);
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
