import { locales } from '@/lib/config/locale'
import { cn } from '@/lib/utils'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Inter as FontSans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type Props = {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Index' })

  return {
    title: t('title'),
  }
}

export default function RootLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
