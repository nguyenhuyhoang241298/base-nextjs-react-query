import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations()
  return <div>{t('Index.title')}</div>
}

export default Page
