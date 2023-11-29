import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import * as fireStoreFunctions from "firebase/firestore";
import { db } from "@/firebase.config";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/login",
  },
  adapter: FirebaseAdapter({ db, ...fireStoreFunctions }),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
