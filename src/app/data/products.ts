// Product images from local assets
import mustardThumb from '../../assets/Mustard/Thumbnail.jpeg';
import mustardAsset1 from '../../assets/Mustard/Asset1.jpeg';
import mustardAsset2 from '../../assets/Mustard/Asset2.jpeg';
import wheatPrimary from '../../assets/Wheat/Primary.jpeg';
import wheatSecondary from '../../assets/Wheat/Secondary.jpeg';
import datesPrimary from '../../assets/Dates/Primary.jpeg';
import datesSecondary from '../../assets/Dates/Secondary.jpeg';
import moistureControl from '../../assets/Moisture control.jpeg';
import locationImg from '../../assets/Location.jpeg';
import rhodesVideo1 from '../../assets/Rhodes Grass/Video1.mp4';
import rhodesThumb from '../../assets/rhodes-grass-thumbnail.jpeg';
import vegetablesThumb from '../../assets/vegetables-thumbnail.jpeg';
import mustardAsset3 from '../../assets/Mustard/Asset3.mp4';
import mustardAsset4 from '../../assets/Mustard/Asset4.mp4';

export interface ProductData {
  id: string;
  title: string;
  link: string;
  description: string;
  features: string[];
  thumbnail: string;
  thumbnailVideo?: string;
  heroImage: string;
  galleryImages: string[];
  galleryVideos?: string[];
  detailedContent: {
    heading: string;
    body: string[];
  };
}

export const products: ProductData[] = [
  {
    id: 'rhodes-grass',
    title: 'Rhodes Grass',
    link: '/rhodes-grass',
    description: 'Leading Rhodes Grass producers in Sakrand and Saleh Pat with bulk supply capability for dairy farms and export markets.',
    features: [
      '7000 Tons Annual Production',
      'Export Ready Supply',
      'Consistent Quality',
      'Controlled Moisture'
    ],
    thumbnail: rhodesThumb,
    thumbnailVideo: rhodesVideo1,
    heroImage: locationImg,
    galleryImages: [moistureControl, locationImg],
    detailedContent: {
      heading: 'Rhodes Grass Production in Sakrand & Saleh Pat',
      body: [
        'Dharejo Agri is among the established Rhodes Grass producers in Sindh, operating across Sakrand and Saleh Pat with large scale field coverage.',
        'Our annual production capacity reaches 7000 tons, making us capable of fulfilling consistent bulk orders for dairy farms and export markets.',
        'Rhodes Grass quality depends on timing, moisture control, and field management. We focus on proper land leveling, planned irrigation, and harvesting at the correct maturity stage.',
        'Each bale is formed to maintain consistent size and density for easier loading and transportation.'
      ]
    }
  },
  {
    id: 'mustard',
    title: 'Mustard',
    link: '/mustard',
    description: 'Structured mustard farming in Sakrand and Saleh Pat with controlled irrigation and seasonal planning.',
    features: [
      'Seasonal Planning',
      'Balanced Soil Prep',
      'High Plant Strength',
      'Regional Supply'
    ],
    thumbnail: mustardThumb,
    thumbnailVideo: mustardAsset3,
    heroImage: mustardAsset1,
    galleryImages: [mustardAsset1, mustardAsset2, mustardThumb],
    galleryVideos: [mustardAsset3, mustardAsset4],
    detailedContent: {
      heading: 'Mustard Cultivation in Sakrand & Saleh Pat',
      body: [
        'Mustard is grown under seasonal planning with balanced soil preparation and structured irrigation.',
        'We focus on plant strength and stable yield through proper sowing timing, controlled water supply, and regular crop monitoring.',
        'Our mustard production supports local and regional supply demand.'
      ]
    }
  },
  {
    id: 'wheat',
    title: 'Wheat',
    link: '/wheat',
    description: 'Reliable wheat cultivation in Sakrand and Saleh Pat with planned irrigation and soil management.',
    features: [
      'Structured Agri-Cycles',
      'Soil Productivity',
      'Proper Grain Maturity',
      'Crop Rotation Strategy'
    ],
    thumbnail: wheatPrimary,
    heroImage: wheatPrimary,
    galleryImages: [wheatPrimary, wheatSecondary],
    detailedContent: {
      heading: 'Wheat Farming Operations',
      body: [
        'Wheat cultivation at Dharejo Agri follows structured agricultural cycles to maintain soil productivity.',
        'Fields are prepared carefully before sowing, and irrigation is managed according to seasonal requirements. Harvesting is carried out at proper grain maturity stage to maintain quality.',
        'Wheat farming remains an important part of our crop rotation strategy across Sakrand and Saleh Pat.'
      ]
    }
  },
  {
    id: 'vegetables',
    title: 'Seasonal Vegetables',
    link: '/vegetables',
    description: 'Fresh seasonal vegetables grown in Sakrand and Saleh Pat under managed irrigation and field supervision.',
    features: [
      'Farm Freshness',
      'Soil Health Focus',
      'Clean Harvesting',
      'Timely Supply'
    ],
    thumbnail: vegetablesThumb,
    heroImage: vegetablesThumb,
    galleryImages: [vegetablesThumb, locationImg],
    detailedContent: {
      heading: 'Seasonal Vegetable Production',
      body: [
        'Dharejo Agri cultivates seasonal vegetables with attention to freshness and soil health.',
        'Our vegetable farming includes controlled irrigation, clean harvesting practices, and field level supervision.',
        'Vegetable production supports local market demand while maintaining crop rotation balance.'
      ]
    }
  },
  {
    id: 'dates',
    title: 'Dates',
    link: '/dates',
    description: 'Quality dates production in Khairpur with structured farm management and proper harvest planning.',
    features: [
      'Khairpur Speciality',
      'Dedicated Supervision',
      'Proper Pruning',
      'Careful Handling'
    ],
    thumbnail: datesPrimary,
    heroImage: datesPrimary,
    galleryImages: [datesPrimary, datesSecondary],
    detailedContent: {
      heading: 'Dates Farm at Khairpur',
      body: [
        'Our Dates farm at Khairpur is managed with dedicated supervision and crop care planning.',
        'Khairpur is known for date cultivation, and our farm benefits from suitable climate conditions for healthy tree growth.',
        'We focus on structured irrigation, proper pruning cycles, timely harvesting, and careful fruit handling.'
      ]
    }
  },
  {
    id: 'mangoes-orchids',
    title: 'Mangoes Orchids',
    link: '/mangoes-orchids',
    description: 'Premium mango orchards managed with seasonal planning, quality variety selection, and dedicated orchard supervision across Sindh.',
    features: [
      'Seasonal Harvest',
      'Quality Varieties',
      'Orchard Management',
      'Fresh Supply'
    ],
    thumbnail: 'https://images.pexels.com/photos/9219974/pexels-photo-9219974.jpeg',
    heroImage: 'https://images.unsplash.com/photo-1629358821360-500f89a5a907?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629358821360-500f89a5a907?w=800&auto=format&fit=crop&q=80',
      'https://images.pexels.com/photos/9219974/pexels-photo-9219974.jpeg',
      'https://images.unsplash.com/photo-1653856453410-44220fd90479?w=800&auto=format&fit=crop&q=80'
    ],
    detailedContent: {
      heading: 'Mango Orchards — Seasonal Excellence',
      body: [
        'Dharejo Agri manages mango orchards with careful attention to variety selection, tree health, and seasonal harvest timing.',
        'Our orchards benefit from the favorable climate of Sindh, producing premium quality mangoes that meet both local and export standards.',
        'Orchard management includes structured pruning, pest control, irrigation scheduling, and post-harvest handling to ensure fresh supply throughout the season.',
        'We focus on maintaining quality varieties known for taste, size, and shelf life, supporting reliable supply to buyers and markets.'
      ]
    }
  }
];

export const processSteps = [
  {
    step: 1,
    title: 'Land Preparation & Sowing',
    description: 'Deep ploughing, leveling, and identifying the best seed variety for the season.',
    icon: 'tractor',
  },
  {
    step: 2,
    title: 'Water Arrangement',
    description: 'Scheduled irrigation ensuring consistent moisture levels for optimal growth.',
    icon: 'droplets',
  },
  {
    step: 3,
    title: 'Harvesting / Cutting',
    description: 'Cutting at the nutritional peak using modern disc mowers.',
    icon: 'scissors',
  },
  {
    step: 4,
    title: 'Sun Drying & Tedding',
    description: 'Natural drying accelerated by mechanical tedders to reach target moisture.',
    icon: 'sun',
  },
  {
    step: 5,
    title: 'Baling',
    description: 'High-density baling ensuring compact, transport-ready square bales.',
    icon: 'package',
  },
  {
    step: 6,
    title: 'Storage & Loading',
    description: 'Stored in dry sheds and loaded systematically for export/local dispatch.',
    icon: 'activity',
  }
];
