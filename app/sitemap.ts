import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yieldstream.ai', lastModified: new Date() },
    { url: 'https://yieldstream.ai/features', lastModified: new Date() },
    { url: 'https://yieldstream.ai/pricing', lastModified: new Date() },
    { url: 'https://yieldstream.ai/intelligence', lastModified: new Date() },
    { url: 'https://yieldstream.ai/underwriting', lastModified: new Date() },
    { url: 'https://yieldstream.ai/about', lastModified: new Date() },
    { url: 'https://yieldstream.ai/docs', lastModified: new Date() },
    { url: 'https://yieldstream.ai/resources', lastModified: new Date() },
    { url: 'https://yieldstream.ai/security', lastModified: new Date() },
    { url: 'https://yieldstream.ai/contact', lastModified: new Date() },
    { url: 'https://yieldstream.ai/feedback', lastModified: new Date() },
  ]
}
