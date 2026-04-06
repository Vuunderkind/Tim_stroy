import { i18n } from '@/i18n.config'

export default function RootPage() {
  const url = `/Tim_stroy/${i18n.defaultLocale}/`

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(url)});`,
        }}
      />
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${url}`} />
      </noscript>
    </>
  )
}
