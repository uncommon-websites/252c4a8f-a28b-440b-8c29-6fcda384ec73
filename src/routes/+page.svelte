<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Button from '$lib/components/Button.svelte';
	import SummarySection from '$lib/components/SummarySection.svelte';
	import Features from '$lib/components/Features.svelte';
	import AboutTeaser from '$lib/components/AboutTeaser.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';

	const testimonials = [
		{
			quote: "We went from spending two weeks wrestling with our old CRM to launching campaigns in under 20 minutes. That's time we can actually spend on routing decisions instead of fighting software.",
			name: "Carmen Rodriguez",
			role: "Tour Manager",
			company: "Independent Artist Management",
			imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
			imageAlt: "Carmen Rodriguez, Tour Manager"
		},
		{
			quote: "The unrestricted CSV export changed everything for us. We're not locked into anyone's ecosystem—our data stays ours. That alone justifies switching from platforms that hold your audience hostage.",
			name: "Marcus Thompson",
			role: "Artist Manager",
			company: "Momentum Music Group",
			imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
			imageAlt: "Marcus Thompson, Artist Manager"
		},
		{
			quote: "Pay-per-campaign pricing means we're not bleeding $400/month for features we touch twice a year. For mid-size venues running occasional presales, this model actually makes financial sense.",
			name: "Yuki Tanaka",
			role: "Venue Promoter",
			company: "Metro Live Events",
			imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
			imageAlt: "Yuki Tanaka, Venue Promoter"
		}
	];
</script>

<Hero
	centered={false}
	subtitle="Presale registration made simple"
	title="Capture demand without the CRM complexity"
	description="Purpose-built for touring artists and promoters who need presale registration that works. Set up campaigns in minutes, distribute codes instantly, and export your data anytime. No bloat, no annual contracts, no surprise charges."
	imageSrc="/generated/image-documentary-style-editorial-photograph-o.webp"
	imageAlt="Tour managers collaborating on venue strategy"
>
	{#snippet cta()}
		<Button variant="primary" href="#early-access">Request early access</Button>
		<Button variant="secondary" href="#learn-more">Learn more</Button>
	{/snippet}
</Hero>

<SummarySection
	paragraphs={[
		'Velvet captures presale demand and distributes access codes through customizable registration campaigns built specifically for the live music industry. Starting with touring artists and promoters, we serve teams who need powerful presale tools without paying for bloated CRM platforms filled with features they will never use.',
		'Our pay-per-campaign model eliminates annual contracts and per-seat fees, making professional presale registration accessible for tours of any size. With instant CSV exports, heat-map routing intelligence, and setup that takes minutes instead of days, Velvet gets out of your way so you can focus on filling venues.',
		'We are capturing the $4B live music market one campaign at a time, helping artists and promoters make smarter routing decisions while building anticipation for shows that matter.'
	]}
/>

<Features />

<AboutTeaser
	quote="I spent six years managing tours and watching teams pay thousands for CRM platforms they'd use twice a year. We needed presale tools, not a marketing suite. When I couldn't find something that just worked without the overhead, I built it."
	founderName="Alex Chen"
	founderRole="Founder, Velvet"
	founderImageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
	founderImageAlt="Alex Chen, Founder of Velvet"
/>

<Testimonials {testimonials} />

<CTA />
