// Centralized data file for IronPulse Gym website content
// This file contains all copy/text that will be used throughout the site
import { trophyIcon, kettlebellIcon, heartIcon } from '../assets/icons';

export const siteContent = {
  header: {
    logo: {
      mark: "YF",
      wordmark: "Yuliia Fok"
    },
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Classes", href: "#classes" },
      { label: "Membership", href: "#membership" },
      { label: "Reviews", href: "#reviews" },
      { label: "About Me", href: "#about" },
      { label: "Contacts", href: "#contact" }
    ],
    ctaButton: {
      label: "Join Now",
      href: "#join"
    }
  },

  hero: {
    heading: {
      first: "Train Hard.",
      second: "Live Strong."
    },
    subcopy: "Transform your body and mind with world-class training expert guidance and a supportive community.",
    ctaButton: {
      label: "Get free class",
      href: "#free-class"
    },
    features: [
      {
        title: "Strength for daily life",
        description: "Full-body training for all fitness levels",
        icon: trophyIcon
      },
      {
        title: "Small group coached classes",
        description: "Small group coached classes",
        icon: kettlebellIcon
      },
      {
        title: "Community",
        description: "Join a supportive fitness family",
        icon: heartIcon
      }
    ]
  },

  about: {
    variantA: {
      heading: "About Kettlebell Classes",
      imageAlt: "Gym interior"
    },
    variantB: {
      heading: "About Yuliia Fok",
      imageAlt: "Gym interior"
    },
    statBadge: {
      number: "10+",
      label: "Years of Excellence"
    },
    bodyCopy: [
      "IronPulse Gym is more than just a fitness center – it's a community of driven individuals committed to pushing boundaries and achieving greatness. Founded in 2015, we've helped thousands transform their lives through fitness.",
      "Our mission is simple: to provide world-class training, expert guidance, and an environment that inspires you to become the best version of yourself. Whether you're a beginner or an elite athlete, we have the tools and expertise to help you succeed."
    ],
    stats: [
      {
        number: "5000+",
        label: "Members",
        icon: heartIcon
      },
      {
        number: "50+",
        label: "Expert Trainers",
        icon: trophyIcon
      },
      {
        number: "100+",
        label: "Classes Weekly",
        icon: kettlebellIcon
      }
    ]
  },

  membership: {
    heading: "Membership",
    subcopy: "Choose the plan that fits your lifestyle and start your fitness journey today.",
    plans: [
      {
        name: "2x / week",
        price: "$125",
        period: "/month",
        featured: false,
        discountText: "20% discount for first 10 members"
      },
      {
        name: "3x / week",
        price: "$159",
        period: "/month",
        featured: true,
        featuredLabel: "Most Popular",
        discountText: "20% discount for first 10 members"
      },
      {
        name: "Drop-in",
        price: "$20",
        period: "/session",
        featured: false,
        discountText: "20% discount for first 10 members"
      }
    ]
  },

  reviews: {
    heading: "Reviews",
    subcopy: "Real stories from real people who transformed their lives at IronPulse Gym.",
    reviews: [
      {
        name: "Sarah Johnson",
        role: "Weight Loss Transformation",
        quote: "IronPulse Gym changed my life. The trainers are amazing and the community is so supportive.",
        rating: 5
      },
      {
        name: "Mike Rodriguez",
        role: "Strength Training",
        quote: "Best gym I've ever been to. The small group classes are perfect for getting personalized attention.",
        rating: 5
      },
      {
        name: "Emily Chen",
        role: "CrossFit Enthusiast",
        quote: "The coaching here is top-notch. I've improved so much since joining.",
        rating: 5
      },
      {
        name: "David Thompson",
        role: "Yoga & Wellness",
        quote: "Love the variety of classes and the welcoming atmosphere. Highly recommend!",
        rating: 5
      },
      {
        name: "Lisa Martinez",
        role: "Fitness Journey",
        quote: "The trainers really care about your progress. I've achieved goals I never thought possible.",
        rating: 5
      },
      {
        name: "James Wilson",
        role: "Premium Member",
        quote: "Worth every penny. The facilities are great and the community is fantastic.",
        rating: 5
      }
    ]
  },

  contact: {
    heading: "Get In Touch",
    subcopy: "Ready to start your fitness journey? Fill out the form below and we'll get back to you.",
    contactInfo: [
      {
        label: "Address",
        value: "123 Fitness Avenue, Wellness District, New York, NY 10001",
        icon: kettlebellIcon
      },
      {
        label: "Phone",
        value: "+1 (555) 123-4567",
        icon: trophyIcon
      },
      {
        label: "Email",
        value: "info@ironpulsegym.com",
        icon: heartIcon
      },
      {
        label: "Opening Hours",
        value: "Mon–Fri 5:00 AM–11:00 PM · Sat–Sun 7:00 AM–9:00 PM",
        icon: kettlebellIcon
      }
    ],
    form: {
      heading: "Join Group Class Today"
    }
  },

  footer: {
    brand: {
      mark: "YF",
      wordmark: "Yuliia Fok",
      tagline: "Transform your body and mind with world-class training and expert guidance."
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Membership", href: "#membership" }
    ],
    socialLinks: [
      {
        platform: "Instagram",
        href: "#instagram",
        icon: "instagram"
      }
    ],
    copyright: "© 2026 Yuliia Fok. All rights reserved."
  }
};
