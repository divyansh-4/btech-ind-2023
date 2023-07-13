import React from 'react';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '../../utils/baseUrl';

function SEO({ title, desc, imgSrc, url }) {
  const logoSrc = '/favicon.ico';
  const imageSrc = imgSrc ?? logoSrc; // we need a logo svg
  const description = desc ?? 'IIITD Induction 2023'; // we need description content, we can have separate descriptions for separate pages
  const seoTitle = title ?? 'IIITD Induction 2023';
  const seoUrl = url ?? BASE_URL;
  return (
    <NextSeo
      title={seoTitle}
      defaultTitle='IIITD Induction 2023'
      description={description}
      additionalMetaTags={[
        {
          property: 'og:title',
          content: seoTitle,
        },
        {
          property: 'og:image',
          itemprop: 'image',
          content: imageSrc,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:site_name',
          content: 'IIITD Induction 2023',
        },
        {
          itemprop: 'thumbnailUrl',
          href: imageSrc,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: seoUrl,
        },
        {
          itemProp: 'image',
          content: imageSrc,
        },
        {
          itemProp: 'description',
          content: description,
        },
        {
          name: 'msapplication-TileImage',
          content: logoSrc,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
          sizes: '76x76',
        },
      ]}
    />
  );
}

export default SEO;
