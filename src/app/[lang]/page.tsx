import Typography from '@/components/common/Typography'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import LocaleSwitcher from './components/locale-switcher'
import Header from '@/components/Header'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>
      <LocaleSwitcher />
      <Header />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
        {dictionary['server-component'].welcome}
      </p>
      <Typography variant='h4' font='primary' weight='bold'>
        {dictionary['server-component'].welcome}
      </Typography>
    </div>
  )
}