import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig"; // Ensure correct import

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log("✅ Authenticated user:", firebaseUser.email);
        try {
          const userRef = doc(db, "users", firebaseUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            console.log("✅ Firestore user role:", userData.role);
            setUser({ uid: firebaseUser.uid, email: firebaseUser.email, role: userData.role });
          } else {
            console.error("❌ No Firestore document found for user.");
            setUser({ uid: firebaseUser.uid, email: firebaseUser.email, role: "unknown" });
          }
        } catch (error) {
          console.error("❌ Firestore fetch error:", error);
          setUser(null);
        }
      } else {
        console.warn("⚠️ No authenticated user found.");
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful:", userCredential.user.email);

      // Fetch role after login
      const userRef = doc(db, "users", userCredential.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        console.log("✅ Assigned role:", userSnap.data().role);
        setUser({ uid: userCredential.user.uid, email: userCredential.user.email, role: userSnap.data().role });
      } else {
        console.warn("⚠️ Role not found in Firestore.");
        setUser({ uid: userCredential.user.uid, email: userCredential.user.email, role: "unknown" });
      }

      return userCredential.user;
    } catch (error) {
      console.error("❌ Login error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("✅ User logged out");
      setUser(null);
    } catch (error) {
      console.error("❌ Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
