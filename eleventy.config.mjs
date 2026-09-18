import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

const serviceName = 'National Triage Standards'

// Root locally; set by CI (e.g. "/national-triage-standards/") for GitHub Pages
const pathPrefix = process.env.PATH_PREFIX || '/'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    titleSuffix: serviceName,
    stylesheets: ['/assets/application.css'],
    header: {
      service: {
        text: serviceName,
        href: '/'
      },
      navigation: {
        items: [
          { text: 'Foundations', href: '/foundations' },
          { text: 'Clinical safety', href: '/clinical-safety' },
          { text: 'Interoperability', href: '/interoperability' },
          { text: 'User experience', href: '/user-experience' },
          { text: 'Governance', href: '/governance' },
          { text: 'Examples', href: '/component-examples' }
        ]
      }
    }
  })

  return {
    pathPrefix,
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      includes: '_components',
      layouts: '_layouts'
    }
  }
}
