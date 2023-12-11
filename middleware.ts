import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/config/locale';

export default createMiddleware({
  locales: locales,
  defaultLocale: "vn",
});

export const config = {
  matcher: ['/', '/(de|en)/:path*'],
};
