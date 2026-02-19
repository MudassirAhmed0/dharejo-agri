export interface ProductData {
  id: string;
  title: string;
  link: string;
  description: string;
  features: string[];
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
    detailedContent: {
      heading: 'Dates Farm at Khairpur',
      body: [
        'Our Dates farm at Khairpur is managed with dedicated supervision and crop care planning.',
        'Khairpur is known for date cultivation, and our farm benefits from suitable climate conditions for healthy tree growth.',
        'We focus on structured irrigation, proper pruning cycles, timely harvesting, and careful fruit handling.'
      ]
    }
  }
];

import sowingVideo from '../../assets/Sowing, Fertiliser and Care.mp4';
import waterVideo from '../../assets/water-arrangement.mp4';
import cuttingVideo from '../../assets/Cutting Process.mp4';
import tedderVideo from '../../assets/Tedder to control moisture.mp4';
import balingVideo from '../../assets/Baleing.mp4';
import loadingVideo from '../../assets/Collection from field and loading.mp4';

export const processSteps = [
  {
    step: 1,
    title: 'Land Preparation & Sowing',
    description: 'Deep ploughing, leveling, and identifying the best seed variety for the season.',
    icon: 'tractor',
    media: sowingVideo,
    mediaType: 'video'
  },
  {
    step: 2,
    title: 'Water Arrangement',
    description: 'Scheduled irrigation ensuring consistent moisture levels for optimal growth.',
    icon: 'droplets',
    media: waterVideo,
    mediaType: 'video'
  },
  {
    step: 3,
    title: 'Harvesting / Cutting',
    description: 'Cutting at the nutritional peak using modern disc mowers.',
    icon: 'scissors',
    media: cuttingVideo,
    mediaType: 'video'
  },
  {
    step: 4,
    title: 'Sun Drying & Tedding',
    description: 'Natural drying accelerated by mechanical tedders to reach target moisture.',
    icon: 'sun',
    media: tedderVideo,
    mediaType: 'video'
  },
  {
    step: 5,
    title: 'Baling',
    description: 'High-density baling ensuring compact, transport-ready square bales.',
    icon: 'package',
    media: balingVideo,
    mediaType: 'video'
  },
  {
    step: 6,
    title: 'Storage & Loading',
    description: 'Stored in dry sheds and loaded systematically for export/local dispatch.',
    icon: 'activity',
    media: loadingVideo,
    mediaType: 'video'
  }
];
