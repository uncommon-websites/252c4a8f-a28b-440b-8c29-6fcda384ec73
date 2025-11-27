/**
 * Velvet - Brand Configuration & Metadata
 * 
 * Presale demand capture platform for touring artists
 */

export const siteConfig = {
	name: 'Velvet',
	description: 'Presale demand capture and code distribution platform for touring artists. No CRM complexity, just what you need.',
	url: 'https://velvet.app',
	
	// SEO Metadata
	metadata: {
		title: 'Velvet - Presale demand capture for touring artists',
		description: 'Capture presale demand and distribute codes via customizable registration campaigns. Built for touring artists and promoters who need presale tools without CRM bloat.',
		keywords: [
			'presale',
			'touring artists',
			'demand capture',
			'registration campaigns',
			'live music',
			'tour marketing',
			'presale codes',
			'artist tools'
		],
		ogImage: '/og-image.png',
		twitterHandle: '@velvetapp'
	},
	
	// Company Information
	company: {
		name: 'Velvet',
		tagline: 'Everything you need. Nothing you don\'t.',
		industry: 'Music Technology / SaaS',
		founded: '2024',
		stage: 'Early Access'
	},
	
	// Product Information
	product: {
		name: 'Velvet',
		category: 'Presale Registration Platform',
		pricing: 'Pay-per-campaign',
		stage: 'Early Access - Invitation Only'
	},
	
	// Contact Information
	contact: {
		email: 'hello@velvet.app',
		support: 'support@velvet.app'
	},
	
	// Brand Theme
	theme: {
		mode: 'dark' as const,
		primaryColor: '#8A4EFF', // Purple accent
		secondaryColor: '#5E00FF', // Deep purple
		backgroundColor: '#000000', // Black
		foregroundColor: '#FFFFFF' // White
	},
	
	// Social Links (placeholder - update when available)
	social: {
		twitter: '',
		linkedin: '',
		instagram: '',
		facebook: ''
	},
	
	// Feature Flags
	features: {
		earlyAccess: true,
		publicSignup: false,
		showPricing: false
	}
} as const;

// Export individual sections for convenience
export const { metadata, company, product, contact, theme, social, features } = siteConfig;

// Type exports
export type SiteConfig = typeof siteConfig;
export type ThemeMode = typeof theme.mode;
