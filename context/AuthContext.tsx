"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/lib/types";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, name?: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password?: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "luma_user_session";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const login = async (email: string, name?: string): Promise<boolean> => {
    const displayName = name || email.split("@")[0];
    const newUser: User = {
      id: "usr_" + Math.random().toString(36).substring(2, 9),
      name: displayName,
      email,
      token: "tok_" + Math.random().toString(36).substring(2, 15)
    };
    setUser(newUser);
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
      document.cookie = `${AUTH_STORAGE_KEY}=${JSON.stringify(newUser)}; path=/; max-age=604800; SameSite=Lax`;
    } catch {}
    return true;
  };

  const register = async (name: string, email: string): Promise<boolean> => {
    return login(email, name);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      document.cookie = `${AUTH_STORAGE_KEY}=; path=/; max-age=0; SameSite=Lax`;
    } catch {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
