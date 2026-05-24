import config from '@/assets/json/config.json'

// Canonical origin for the production site (no trailing slash).
export const SITE_URL = 'https://www.ste-deltasolution.com'
export const SITE_NAME = 'DELTA Solution'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.png`

interface SeoEntry {
  title: string
  description: string
}

const BRAND = 'DELTA Solution'

// Per-route title (~50-60 chars) and meta description (~150-160 chars), in
// French, keyword-rich and localized. Keyed by router path (no trailing slash).
export const seoMap: Record<string, SeoEntry> = {
  '/': {
    title: `${BRAND} | Menuiserie Aluminium & PVC en Tunisie`,
    description: 'DELTA Solution, votre menuiserie sur mesure à Jemmal : fenêtres, portes, pergolas, volets et garde-corps en aluminium, PVC et métal. Devis gratuit.',
  },

  // Fenêtres
  '/windows': {
    title: `Fenêtres Aluminium & PVC sur mesure | ${BRAND}`,
    description: 'Découvrez nos fenêtres en aluminium et PVC sur mesure : isolation, design et durabilité pour votre habitat en Tunisie. Demandez votre devis gratuit.',
  },
  '/windows/aluminum': {
    title: `Fenêtres en Aluminium sur mesure | ${BRAND}`,
    description: 'Fenêtres en aluminium sur mesure DELTA Solution : robustesse, finesse des profilés et haute isolation thermique. Fabrication et pose en Tunisie.',
  },
  '/windows/pvc': {
    title: `Fenêtres en PVC sur mesure | ${BRAND}`,
    description: 'Fenêtres en PVC sur mesure : excellente isolation thermique et acoustique à prix maîtrisé. Conception et installation par DELTA Solution en Tunisie.',
  },

  // Portes
  '/doors': {
    title: `Portes Aluminium & PVC sur mesure | ${BRAND}`,
    description: 'Portes d\'entrée et intérieures en aluminium et PVC sur mesure. Sécurité, isolation et design signés DELTA Solution, menuiserie en Tunisie.',
  },
  '/doors/aluminum': {
    title: `Portes en Aluminium sur mesure | ${BRAND}`,
    description: 'Portes en aluminium sur mesure : élégance, sécurité et longévité. Fabrication personnalisée par DELTA Solution en Tunisie.',
  },
  '/doors/pvc': {
    title: `Portes en PVC sur mesure | ${BRAND}`,
    description: 'Portes en PVC sur mesure alliant isolation et budget maîtrisé. Conçues et posées par DELTA Solution en Tunisie.',
  },

  // Protection solaire
  '/solar-protection': {
    title: `Protection Solaire : volets & stores | ${BRAND}`,
    description: 'Solutions de protection solaire sur mesure : volets roulants, brise-soleil, volets battants et stores d\'intérieur. DELTA Solution, Tunisie.',
  },
  '/solar-protection/exterior-shutters': {
    title: `Volets Roulants Extérieurs sur mesure | ${BRAND}`,
    description: 'Volets roulants extérieurs en aluminium : sécurité, isolation et confort. Sous enduit, rénovation ou monobloc, par DELTA Solution en Tunisie.',
  },
  '/solar-protection/exterior-shutters/under-plaster': {
    title: `Volet Roulant Sous Enduit | ${BRAND}`,
    description: 'Volet roulant sous enduit intégré à la maçonnerie pour une finition discrète et une isolation optimale. Installation DELTA Solution, Tunisie.',
  },
  '/solar-protection/exterior-shutters/renovation': {
    title: `Volet Roulant de Rénovation | ${BRAND}`,
    description: 'Volet roulant de rénovation posé sans gros travaux, idéal pour moderniser vos ouvertures. Par DELTA Solution, menuiserie en Tunisie.',
  },
  '/solar-protection/exterior-shutters/mono-block': {
    title: `Volet Roulant Monobloc | ${BRAND}`,
    description: 'Volet roulant monobloc performant en isolation et facile à installer, en neuf comme en rénovation. DELTA Solution, Tunisie.',
  },
  '/solar-protection/solar-shading': {
    title: `Brise-Soleil Orientable (BSO) | ${BRAND}`,
    description: 'Brise-soleil orientables pour maîtriser lumière et chaleur tout en préservant la vue. Confort et esthétique signés DELTA Solution, Tunisie.',
  },
  '/solar-protection/swing-shutters': {
    title: `Volets Battants en Aluminium | ${BRAND}`,
    description: 'Volets battants en aluminium au charme traditionnel et sans entretien. Fabrication sur mesure par DELTA Solution en Tunisie.',
  },
  '/solar-protection/interior-blinds': {
    title: `Stores d\'Intérieur sur mesure | ${BRAND}`,
    description: 'Stores d\'intérieur sur mesure : vénitien, vertical, rouleau et double jeu. Habillez vos fenêtres avec DELTA Solution, Tunisie.',
  },
  '/solar-protection/interior-blinds/venetian': {
    title: `Store Vénitien sur mesure | ${BRAND}`,
    description: 'Store vénitien à lames orientables pour un contrôle précis de la lumière. Sur mesure par DELTA Solution en Tunisie.',
  },
  '/solar-protection/interior-blinds/vertical': {
    title: `Store Vertical sur mesure | ${BRAND}`,
    description: 'Store à bandes verticales, idéal pour grandes baies et bureaux. Sur mesure par DELTA Solution en Tunisie.',
  },
  '/solar-protection/interior-blinds/roller': {
    title: `Store Rouleau Enrouleur sur mesure | ${BRAND}`,
    description: 'Store rouleau enrouleur épuré et fonctionnel pour toutes les pièces. Sur mesure par DELTA Solution en Tunisie.',
  },
  '/solar-protection/interior-blinds/double-roller': {
    title: `Store Double Jeu Jour/Nuit | ${BRAND}`,
    description: 'Store double jeu jour/nuit pour moduler la luminosité à volonté. Sur mesure par DELTA Solution en Tunisie.',
  },

  // Garde-corps
  '/guardrails': {
    title: `Garde-Corps Aluminium & Acier | ${BRAND}`,
    description: 'Garde-corps en aluminium et acier pour balcons, terrasses et escaliers. Sécurité et design sur mesure par DELTA Solution, Tunisie.',
  },
  '/guardrails/aluminum': {
    title: `Garde-Corps en Aluminium | ${BRAND}`,
    description: 'Garde-corps en aluminium sur mesure : léger, inoxydable et élégant, pour balcons et terrasses. Par DELTA Solution en Tunisie.',
  },
  '/guardrails/steel': {
    title: `Garde-Corps en Acier | ${BRAND}`,
    description: 'Garde-corps en acier robuste et personnalisable pour une sécurité durable. Fabrication sur mesure par DELTA Solution, Tunisie.',
  },

  // Clôtures
  '/fences': {
    title: `Clôtures en Aluminium sur mesure | ${BRAND}`,
    description: 'Clôtures en aluminium design et sans entretien pour sécuriser et embellir votre propriété. Sur mesure par DELTA Solution, Tunisie.',
  },
  '/fences/aluminum': {
    title: `Clôture en Aluminium | ${BRAND}`,
    description: 'Clôture en aluminium résistante à la corrosion et entièrement personnalisable. Pose sur mesure par DELTA Solution en Tunisie.',
  },

  // Portails
  '/gates': {
    title: `Portails Aluminium & Acier sur mesure | ${BRAND}`,
    description: 'Portails coulissants et battants en aluminium et acier, motorisables. Design et sécurité sur mesure par DELTA Solution, Tunisie.',
  },
  '/gates/aluminum': {
    title: `Portails en Aluminium sur mesure | ${BRAND}`,
    description: 'Portails en aluminium sur mesure, motorisables et sans entretien. Esthétiques et durables, par DELTA Solution en Tunisie.',
  },
  '/gates/steel': {
    title: `Portails en Acier sur mesure | ${BRAND}`,
    description: 'Portails en acier robustes et personnalisables pour une sécurité renforcée. Fabrication sur mesure par DELTA Solution, Tunisie.',
  },

  // Portes de garage
  '/garage-doors': {
    title: `Portes de Garage sur mesure | ${BRAND}`,
    description: 'Portes de garage sur mesure : sectionnelle, basculante et rideau métallique. Motorisation et pose par DELTA Solution, Tunisie.',
  },
  '/garage-doors/sectional': {
    title: `Porte de Garage Sectionnelle | ${BRAND}`,
    description: 'Porte de garage sectionnelle à ouverture verticale : gain de place et bonne isolation. Sur mesure par DELTA Solution, Tunisie.',
  },
  '/garage-doors/tilt': {
    title: `Porte de Garage Basculante | ${BRAND}`,
    description: 'Porte de garage basculante robuste et économique, motorisable. Installation par DELTA Solution en Tunisie.',
  },
  '/garage-doors/metal-shutters': {
    title: `Rideau Métallique de Garage | ${BRAND}`,
    description: 'Rideaux métalliques pour garages et commerces, à lame simple ou injectée. Sécurité et sur mesure par DELTA Solution, Tunisie.',
  },
  '/garage-doors/metal-shutters/simple-slat': {
    title: `Rideau Métallique à Lame Simple | ${BRAND}`,
    description: 'Rideau métallique à lame simple, solution économique pour commerces et garages. Sur mesure par DELTA Solution, Tunisie.',
  },
  '/garage-doors/metal-shutters/injected-slat': {
    title: `Rideau Métallique à Lame Injectée | ${BRAND}`,
    description: 'Rideau métallique à lame injectée pour une meilleure isolation thermique et phonique. Sur mesure par DELTA Solution, Tunisie.',
  },

  // Moustiquaires
  '/mosquito-nets': {
    title: `Moustiquaires sur mesure | ${BRAND}`,
    description: 'Moustiquaires sur mesure : enroulable, coulissante et fixe. Protégez votre intérieur des insectes avec DELTA Solution, Tunisie.',
  },
  '/mosquito-nets/roller': {
    title: `Moustiquaire Enroulable | ${BRAND}`,
    description: 'Moustiquaire enroulable discrète et pratique : elle se rétracte quand vous le souhaitez. Sur mesure par DELTA Solution, Tunisie.',
  },
  '/mosquito-nets/sliding': {
    title: `Moustiquaire Coulissante | ${BRAND}`,
    description: 'Moustiquaire coulissante idéale pour baies et portes-fenêtres. Sur mesure par DELTA Solution en Tunisie.',
  },
  '/mosquito-nets/fixed': {
    title: `Moustiquaire Fixe | ${BRAND}`,
    description: 'Moustiquaire fixe robuste et économique pour fenêtres. Sur mesure par DELTA Solution en Tunisie.',
  },

  // Pergolas
  '/pergolas': {
    title: `Pergolas Aluminium & Bioclimatiques | ${BRAND}`,
    description: 'Pergolas en aluminium, à toile et bioclimatiques pour profiter de votre extérieur toute l\'année. Sur mesure par DELTA Solution, Tunisie.',
  },
  '/pergolas/aluminum': {
    title: `Pergola en Aluminium sur mesure | ${BRAND}`,
    description: 'Pergola en aluminium sur mesure : structure durable et design pour terrasse et jardin. Par DELTA Solution en Tunisie.',
  },
  '/pergolas/pvc': {
    title: `Pergola à Toile sur mesure | ${BRAND}`,
    description: 'Pergola à toile rétractable pour un ombrage modulable sur votre terrasse. Sur mesure par DELTA Solution, Tunisie.',
  },
  '/pergolas/bioclimatic': {
    title: `Pergola Bioclimatique sur mesure | ${BRAND}`,
    description: 'Pergola bioclimatique à lames orientables pour réguler soleil et ventilation. Confort extérieur signé DELTA Solution, Tunisie.',
  },

  // Réalisations & contact
  '/works': {
    title: `Nos Réalisations — Menuiserie Aluminium | ${BRAND}`,
    description: 'Découvrez nos réalisations de menuiserie aluminium en Tunisie : villas, résidences et projets sur mesure réalisés par DELTA Solution.',
  },
  '/contact': {
    title: `Contact & Devis Gratuit | ${BRAND}`,
    description: 'Contactez DELTA Solution à Jemmal pour un devis gratuit : +216 98 405 053. Menuiserie aluminium, PVC et métal sur mesure en Tunisie.',
  },
}

const defaultSeo: SeoEntry = {
  title: `${BRAND} | Menuiserie Aluminium & PVC en Tunisie`,
  description: 'DELTA Solution, menuiserie sur mesure à Jemmal, Tunisie : fenêtres, portes, pergolas, volets, garde-corps et portails en aluminium, PVC et métal.',
}

export function getSeo(path: string): SeoEntry {
  return seoMap[path] ?? defaultSeo
}

export function canonicalUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

// LocalBusiness structured data so Google can surface the business in local
// results / knowledge panel. Sourced from the site config.
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#business`,
    'name': SITE_NAME,
    'image': DEFAULT_OG_IMAGE,
    'logo': DEFAULT_OG_IMAGE,
    'url': SITE_URL,
    'telephone': config.contact.phone.replace(/\s/g, ''),
    'email': config.contact.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': config.contact.address.city,
      'addressLocality': 'Jemmal',
      'postalCode': '5020',
      'addressRegion': 'Monastir',
      'addressCountry': 'TN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 35.6091666,
      'longitude': 10.7571099,
    },
    'areaServed': 'TN',
    'description': defaultSeo.description,
    'sameAs': config.socials.map(s => s.url),
  }
}
