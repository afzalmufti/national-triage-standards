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

  // Inject a site-wide demo banner at the top of every rendered page
  eleventyConfig.addTransform('demoBanner', function (content) {
    const outputPath = this.page?.outputPath
    if (typeof outputPath !== 'string' || !outputPath.endsWith('.html')) {
      return content
    }

    const banner =
      '<div class="app-demo-banner" id="app-demo-banner" role="region" aria-label="Demo notice">' +
      '<div class="app-demo-banner__content">' +
      '<p class="app-demo-banner__text"><strong>Demo</strong> \u2014 this is a proof of concept, not a live NHS service. Content is for demonstration only.</p>' +
      '<button class="app-demo-banner__dismiss" type="button" aria-controls="app-demo-banner">Hide<span class="nhsuk-u-visually-hidden"> demo notice</span></button>' +
      '</div>' +
      '</div>' +
      // sessionStorage: dismissal lasts for this visit only, banner returns next visit
      '<script>(function(){var k="ntsDemoBannerDismissed",b=document.getElementById("app-demo-banner");if(!b)return;try{if(sessionStorage.getItem(k)==="true"){b.hidden=true;return}}catch(e){}var d=b.querySelector(".app-demo-banner__dismiss");if(d){d.addEventListener("click",function(){b.hidden=true;try{sessionStorage.setItem(k,"true")}catch(e){}})}})();</script>'

    return content.replace(/<body[^>]*>/i, (match) => `${match}\n${banner}`)
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
