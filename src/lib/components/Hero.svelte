<script lang="ts">
	import type { Snippet } from 'svelte';

	// Props
	type Props = {
		title: string;
		subtitle?: string;
		description?: string;
		imageSrc?: string;
		imageAlt?: string;
		centered?: boolean;
		cta?: Snippet;
	};

	let {
		title,
		subtitle,
		description,
		imageSrc,
		imageAlt = '',
		centered = true,
		cta
	}: Props = $props();
</script>

<section class={['hero-section', centered ? 'centered' : 'left-aligned']}>
	<div class="hero-container">
		<div class="hero-content">
			{#if subtitle}
				<p class="hero-subtitle">{subtitle}</p>
			{/if}
			<h1 class="hero-title">{title}</h1>
			{#if description}
				<p class="hero-description">{description}</p>
			{/if}
			{#if cta}
				<div class="hero-cta">
					{@render cta()}
				</div>
			{/if}
		</div>
		{#if imageSrc}
			<div class="hero-image">
				<img src={imageSrc} alt={imageAlt} />
			</div>
		{/if}
	</div>
</section>

<style>
	.hero-section {
		width: 100%;
		background: #000000;
		color: #ffffff;
		padding: 80px 16px;
	}

	@media (min-width: 768px) {
		.hero-section {
			padding: 120px 80px;
		}
	}

	.hero-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		gap: 48px;
		align-items: center;
	}

	@media (min-width: 968px) {
		.hero-container {
			grid-template-columns: 1fr 1fr;
			gap: 80px;
		}
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.centered .hero-content {
		text-align: center;
		align-items: center;
	}

	.left-aligned .hero-content {
		text-align: left;
		align-items: flex-start;
	}

	.centered .hero-container {
		grid-template-columns: 1fr;
		text-align: center;
	}

	.hero-subtitle {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #8a4eff;
		margin: 0;
	}

	.hero-title {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 40px;
		font-weight: 900;
		line-height: 1.1;
		margin: 0;
		color: #ffffff;
	}

	@media (min-width: 768px) {
		.hero-title {
			font-size: 56px;
		}
	}

	.hero-description {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.6;
		color: #8a8a8a;
		margin: 0;
		max-width: 540px;
	}

	@media (min-width: 768px) {
		.hero-description {
			font-size: 18px;
		}
	}

	.centered .hero-description {
		margin-left: auto;
		margin-right: auto;
	}

	.hero-cta {
		display: flex;
		gap: 16px;
		margin-top: 16px;
	}

	.centered .hero-cta {
		justify-content: center;
	}

	.hero-image {
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	@media (min-width: 968px) {
		.left-aligned .hero-image {
			order: 2;
		}
	}
</style>
