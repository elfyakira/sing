// =============================================================================
// Layer 3: Structured Data (Urushihata LLMO Framework)
// All schemas connected via @id chains
// =============================================================================

const SITE_URL = 'https://singgroup.biz';
const ORG_NAME = '株式会社Sing';
const ORG_LEGAL_NAME = '株式会社Sing';
const ORG_DESCRIPTION =
  '愛知県春日井市を拠点に、中小企業の採用支援（ツナゲル）・組織コンサルティング（カツヤク）・ブランディング支援を一気通貫で提供。採用で終わらない、人が長く活躍できる仕組みづくりを伴走支援する。';
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#person-shimizu-shunnosuke`;

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface JobPostingData {
  title: string;
  description: string;
  url?: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string | string[];
  baseSalary?: {
    currency?: string;
    minValue?: number;
    maxValue?: number;
    unitText?: string;
  };
  jobLocation?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  qualifications?: string;
  responsibilities?: string;
  skills?: string;
  industry?: string;
  experienceRequirements?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ArticleData {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string | { name: string; id: string };
  image?: string;
}

interface ServiceData {
  name: string;
  description: string;
  url?: string;
  serviceType: string;
  offers?: {
    name?: string;
    description?: string;
    price?: string;
    priceCurrency?: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface HowToData {
  name: string;
  description: string;
  steps: Array<{ title: string; text: string }>;
}

// -----------------------------------------------------------------------------
// 1. Organization Schema
// -----------------------------------------------------------------------------

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    description: ORG_DESCRIPTION,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.svg`,
    },
    image: `${SITE_URL}/images/logo.svg`,
    foundingDate: '2024',
    founder: {
      '@id': FOUNDER_ID,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '如意申町7丁目15-5 アーバンハイツ春日井302号',
      addressLocality: '春日井市',
      addressRegion: '愛知県',
      postalCode: '480-0343',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-568-50-2799',
      contactType: 'customer service',
      availableLanguage: ['Japanese'],
      areaServed: 'JP',
    },
    telephone: '0568-50-2799',
    areaServed: [
      {
        '@type': 'State',
        name: '愛知県',
      },
      {
        '@type': 'Country',
        name: 'JP',
        description: '全国（オンライン対応）',
      },
    ],
    knowsAbout: [
      '採用支援',
      '組織コンサルティング',
      'ブランディング',
      'SNSマーケティング',
      'クリエイティブ制作',
      'キャリア教育',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/tsunageru/#service`,
          name: 'ツナゲル（採用支援）',
          serviceType: 'RecruitmentSupport',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/katsuyaku/#service`,
          name: 'カツヤク（人事・組織コンサルティング）',
          serviceType: 'OrganizationConsulting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/branding/#service`,
          name: '営業・企業ブランディング支援',
          serviceType: 'CorporateBranding',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/sing-media/#service`,
          name: 'Singメディア（SNS・デジタルブランディング）',
          serviceType: 'DigitalBranding',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${SITE_URL}/services/creative/#service`,
          name: 'クリエイティブ制作',
          serviceType: 'CreativeProduction',
        },
      },
    ],
    sameAs: [
      'https://www.instagram.com/sing_group_official/',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 10,
    },
  };
}

// -----------------------------------------------------------------------------
// 2. WebSite Schema
// -----------------------------------------------------------------------------

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: `${ORG_NAME} 公式サイト`,
    url: SITE_URL,
    description: ORG_DESCRIPTION,
    publisher: {
      '@id': ORG_ID,
    },
    inLanguage: 'ja',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// -----------------------------------------------------------------------------
// 3. Breadcrumb Schema
// -----------------------------------------------------------------------------

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// -----------------------------------------------------------------------------
// 4. Article Schema
// -----------------------------------------------------------------------------

export function generateArticleSchema(article: ArticleData) {
  const authorRef =
    typeof article.author === 'string'
      ? {
          '@type': 'Person',
          name: article.author,
          ...(article.author === '清水 駿之介' && { '@id': FOUNDER_ID }),
        }
      : {
          '@type': 'Person',
          '@id': `${SITE_URL}/#${article.author.id}`,
          name: article.author.name,
        };

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    ...(article.dateModified && { dateModified: article.dateModified }),
    author: authorRef,
    publisher: {
      '@id': ORG_ID,
    },
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image.startsWith('http')
          ? article.image
          : `${SITE_URL}${article.image}`,
      },
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

// -----------------------------------------------------------------------------
// 5. Core Person Schema (Founder)
// -----------------------------------------------------------------------------

export function generateCorePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: '清水 駿之介',
    alternateName: 'Shunnosuke Shimizu',
    jobTitle: '代表取締役',
    description:
      '株式会社Sing代表取締役。4社を経営する現役経営者。人財業界での経験から「人をモノのように扱う採用」に違和感を持ち、採用→定着→活躍を一気通貫で支援する事業を創業。高校連携やキャリア教育を通じて次世代の若者と向き合いながら、最終目標である児童養護施設「Together」の設立を見据えて事業を展開。',
    image: `${SITE_URL}/images/message/representative.jpg`,
    worksFor: {
      '@id': ORG_ID,
    },
    memberOf: {
      '@id': ORG_ID,
    },
    knowsAbout: [
      '採用戦略',
      '組織コンサルティング',
      'ブランディング',
      '経営',
      'キャリア教育',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: '経営者',
      },
      {
        '@type': 'Occupation',
        name: '採用コンサルタント',
      },
      {
        '@type': 'Occupation',
        name: '組織コンサルタント',
      },
    ],
    url: `${SITE_URL}/message`,
  };
}

// -----------------------------------------------------------------------------
// 6. Service Schema
// -----------------------------------------------------------------------------

export function generateServiceSchema(service: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      '@id': ORG_ID,
    },
    ...(service.url && { url: service.url }),
    areaServed: {
      '@type': 'State',
      name: '愛知県',
    },
    ...(service.offers && {
      offers: {
        '@type': 'Offer',
        ...(service.offers.name && { name: service.offers.name }),
        ...(service.offers.description && {
          description: service.offers.description,
        }),
        ...(service.offers.price && { price: service.offers.price }),
        ...(service.offers.priceCurrency && {
          priceCurrency: service.offers.priceCurrency,
        }),
      },
    }),
  };
}

// -----------------------------------------------------------------------------
// 7. FAQ Schema
// -----------------------------------------------------------------------------

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    publisher: {
      '@id': ORG_ID,
    },
  };
}

// -----------------------------------------------------------------------------
// 8. HowTo Schema
// -----------------------------------------------------------------------------

export function generateHowToSchema(guide: HowToData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.name,
    description: guide.description,
    step: guide.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
    publisher: {
      '@id': ORG_ID,
    },
  };
}

// -----------------------------------------------------------------------------
// 9. LocalBusiness Schema
// -----------------------------------------------------------------------------

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': ORG_ID,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    description: ORG_DESCRIPTION,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.svg`,
    },
    image: `${SITE_URL}/images/logo.svg`,
    telephone: '0568-50-2799',
    foundingDate: '2024',
    founder: {
      '@id': FOUNDER_ID,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '如意申町7丁目15-5 アーバンハイツ春日井302号',
      addressLocality: '春日井市',
      addressRegion: '愛知県',
      postalCode: '480-0343',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.2473,
      longitude: 136.9726,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'State',
        name: '愛知県',
      },
      {
        '@type': 'Country',
        name: 'JP',
        description: '全国（オンライン対応）',
      },
    ],
    priceRange: '$$',
    sameAs: [
      'https://www.instagram.com/sing_group_official/',
    ],
  };
}

// -----------------------------------------------------------------------------
// 10. JobPosting Schema
// -----------------------------------------------------------------------------

export function generateJobPostingSchema(job: JobPostingData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    ...(job.validThrough && { validThrough: job.validThrough }),
    ...(job.url && { url: job.url }),
    ...(job.employmentType && { employmentType: job.employmentType }),
    hiringOrganization: {
      '@id': ORG_ID,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          job.jobLocation?.streetAddress ??
          '如意申町7丁目15-5 アーバンハイツ春日井302号',
        addressLocality: job.jobLocation?.addressLocality ?? '春日井市',
        addressRegion: job.jobLocation?.addressRegion ?? '愛知県',
        postalCode: job.jobLocation?.postalCode ?? '480-0343',
        addressCountry: job.jobLocation?.addressCountry ?? 'JP',
      },
    },
    ...(job.baseSalary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: job.baseSalary.currency ?? 'JPY',
        value: {
          '@type': 'QuantitativeValue',
          ...(job.baseSalary.minValue !== undefined && {
            minValue: job.baseSalary.minValue,
          }),
          ...(job.baseSalary.maxValue !== undefined && {
            maxValue: job.baseSalary.maxValue,
          }),
          unitText: job.baseSalary.unitText ?? 'MONTH',
        },
      },
    }),
    ...(job.qualifications && {
      qualifications: job.qualifications,
    }),
    ...(job.responsibilities && {
      responsibilities: job.responsibilities,
    }),
    ...(job.skills && { skills: job.skills }),
    ...(job.industry && { industry: job.industry }),
    ...(job.experienceRequirements && {
      experienceRequirements: job.experienceRequirements,
    }),
  };
}
