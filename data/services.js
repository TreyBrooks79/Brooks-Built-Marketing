export const services = [
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    icon: '🎯',
    description: 'Drive qualified traffic and conversions with data-driven advertising campaigns across all major platforms.',
    platforms: [
      {
        name: 'Meta Ads (Facebook & Instagram)',
        services: [
          'Campaign strategy & setup',
          'Audience targeting & research',
          'Creative design & copywriting',
          'A/B testing & optimization',
          'Conversion tracking & reporting'
        ]
      },
      {
        name: 'Google Ads',
        services: [
          'Search advertising',
          'Display network campaigns',
          'YouTube video ads',
          'Shopping campaigns',
          'Performance Max campaigns',
          'Keyword research',
          'Ad copywriting',
          'Landing page optimization',
          'Bid management'
        ]
      },
      {
        name: 'TikTok Ads',
        services: [
          'Video content creation',
          'Trend-based targeting',
          'Influencer collaboration',
          'Creative testing'
        ]
      },
      {
        name: 'LinkedIn Ads',
        services: [
          'B2B targeting',
          'Lead generation campaigns',
          'Professional audience targeting',
          'Sponsored content'
        ]
      },
      {
        name: 'Retargeting Campaigns',
        services: [
          'Website visitor retargeting',
          'Email list retargeting',
          'Cross-platform remarketing',
          'Abandoned cart campaigns'
        ]
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: '📱',
    description: 'Comprehensive social media management to build your brand, engage your audience, and drive growth across all platforms.',
    services: [
      {
        name: 'Content Strategy Development',
        description: 'Custom content strategies aligned with your brand and business goals'
      },
      {
        name: 'Content Creation',
        description: 'Professional graphics, video production, and engaging copywriting'
      },
      {
        name: 'Daily Posting & Scheduling',
        description: 'Consistent content delivery optimized for each platform\'s algorithm'
      },
      {
        name: 'Community Management',
        description: 'Active engagement with comments, DMs, and audience interactions'
      },
      {
        name: 'Platform-Specific Strategies',
        platforms: [
          {
            platform: 'Instagram',
            focus: 'Visual storytelling, growth strategies, Reels, Stories'
          },
          {
            platform: 'Facebook',
            focus: 'Community building, Groups, events, local engagement'
          },
          {
            platform: 'TikTok',
            focus: 'Viral content creation, trending audio, influencer partnerships'
          },
          {
            platform: 'LinkedIn',
            focus: 'Thought leadership, B2B networking, professional content'
          }
        ]
      }
    ]
  },
  {
    id: 'creative',
    title: 'Creative Services',
    icon: '🎨',
    description: 'Professional design and content creation that brings your brand to life and captures your audience\'s attention.',
    services: [
      {
        name: 'Graphic Design',
        deliverables: ['Logos & brand identity', 'Social media graphics', 'Ad creatives', 'Marketing materials']
      },
      {
        name: 'Video Production & Editing',
        deliverables: ['Promotional videos', 'Social media video content', 'Video ads', 'Product demonstrations']
      },
      {
        name: 'Brand Strategy & Identity',
        deliverables: ['Brand positioning', 'Visual identity systems', 'Brand guidelines', 'Messaging frameworks']
      },
      {
        name: 'Website Design & Development',
        deliverables: ['Custom website design', 'Landing pages', 'E-commerce sites', 'Website optimization']
      },
      {
        name: 'Content Marketing',
        deliverables: ['Blog posts & articles', 'Email campaigns', 'Case studies', 'Whitepapers']
      },
      {
        name: 'Email Marketing',
        deliverables: ['Campaign strategy', 'Email design', 'List management', 'Automation setup']
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    icon: '📊',
    description: 'Data-driven insights and transparent reporting to track performance and optimize your marketing investments.',
    services: [
      {
        name: 'Marketing Analytics Setup',
        description: 'Proper tracking implementation across all platforms and campaigns'
      },
      {
        name: 'Performance Reporting',
        description: 'Clear, actionable reports showing exactly how your marketing dollars are performing'
      },
      {
        name: 'ROI Tracking & Attribution',
        description: 'Understanding which channels and campaigns drive the best return on investment'
      },
      {
        name: 'Competitor Analysis',
        description: 'Market intelligence to understand your competitive landscape'
      },
      {
        name: 'Market Research',
        description: 'Audience insights and market trends to inform strategy'
      }
    ]
  }
];

// Service overview for homepage
export const serviceOverview = [
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    icon: '🎯',
    description: 'Drive targeted traffic with Meta, Google, TikTok, and LinkedIn ads',
    link: '/services#paid-advertising'
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: '📱',
    description: 'Full-service social media management across all platforms',
    link: '/services#social-media'
  },
  {
    id: 'creative',
    title: 'Creative Services',
    icon: '🎨',
    description: 'Professional design, video, branding, and web development',
    link: '/services#creative'
  }
];

// Stats for homepage
export const stats = [
  {
    number: '100+',
    label: 'Campaigns Launched'
  },
  {
    number: '$10K+',
    label: 'Ad Spend Managed'
  },
  {
    number: '50+',
    label: 'Happy Clients'
  },
  {
    number: '2+',
    label: 'Years Experience'
  }
];
