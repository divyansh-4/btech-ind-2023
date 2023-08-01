import React from 'react';
import { NextSeo } from 'next-seo';
import { BASE_URL } from '../../utils/baseUrl';

function SEO({ title, desc, imgSrc, url }) {
  const logoSrc = '/seo/banner.png';
  const imageSrc = imgSrc ?? logoSrc;
  const description =
    desc ??
    "IIITD presents #Induction2023 for the incoming batch of B.Tech. students from 2nd to 6th August, 2023. The induction is a significant event that marks the beginning of an exciting and enriching journey ahead, for the new batch of students. Let's celebrate the dawn of new beginnings, embrace boundless opportunities, and create treasured memories as our freshers embark on this transformative journey of learning and growth!";
  const seoTitle = title ?? 'B.Tech Induction 2023 | IIITD';
  const seoUrl = url ?? BASE_URL;
  return (
    <NextSeo
      title={seoTitle}
      defaultTitle='B.Tech Induction 2023 | IIITD'
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
