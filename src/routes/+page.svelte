<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Button from '$lib/components/Button.svelte';
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
