import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn: boolean = !!auth?.user;
      const isOnDashboard: boolean = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        // 未認証のユーザーをログインページにリダイレクト
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
  // 現時点では空の配列を使用してプロバイダーを追加
  providers: [],
} satisfies NextAuthConfig;
