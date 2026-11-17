import { createContentLoader } from 'vitepress'

export default createContentLoader('technical/**/*.md', {
  transform(raw) {
    return raw
      // Filter out the index page itself
      .filter((page) => !page.url.endsWith('/technical/'))
      .map((page) => ({
        title: page.frontmatter.title || page.title || 'Untitled',
        url: page.url,
        date: page.frontmatter.date || ''
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
})