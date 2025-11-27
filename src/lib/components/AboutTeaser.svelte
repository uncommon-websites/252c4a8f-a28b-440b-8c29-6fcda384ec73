<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	// Props
	type Props = {
		quote: string;
		founderName: string;
		founderRole: string;
		founderImageSrc: string;
		founderImageAlt: string;
	};

	let { quote, founderName, founderRole, founderImageSrc, founderImageAlt }: Props = $props();
</script>

<section class="about-teaser-section">
	<div class="about-teaser-container">
		<div class="content-wrapper">
			<div class="founder-image-wrapper">
				<img src={founderImageSrc} alt={founderImageAlt} class="founder-image" />
			</div>
			<div class="content">
				<p class="section-label">Our story</p>
				<blockquote class="founder-quote">
					"{quote}"
				</blockquote>
				<div class="founder-info">
					<p class="founder-name">{founderName}</p>
					<p class="founder-role">{founderRole}</p>
				</div>
				<div class="cta-wrapper">
					<Button variant="secondary" href="/about">
						{#snippet children()}
							Read our story
						{/snippet}
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-teaser-section {
		width: 100%;
		background: #000000;
		color: #ffffff;
		padding: 80px 16px;
	}

	@media (min-width: 768px) {
		.about-teaser-section {
			padding: 120px 80px;
		}
	}

	.about-teaser-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.content-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		gap: 48px;
		align-items: center;
	}

	@media (min-width: 968px) {
		.content-wrapper {
			grid-template-columns: 1fr 1.5fr;
			gap: 80px;
		}
	}

	.founder-image-wrapper {
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
	}

	@media (min-width: 968px) {
		.founder-image-wrapper {
			max-width: none;
		}
	}

	.founder-image {
		width: 100%;
		height: auto;
		border-radius: 8px;
		display: block;
		object-fit: cover;
		border: 2px solid #2e2e2e;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.section-label {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #8a4eff;
		margin: 0;
	}

	.founder-quote {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 24px;
		font-weight: 500;
		line-height: 1.5;
		color: #ffffff;
		margin: 0;
		padding: 0;
		border: none;
	}

	@media (min-width: 768px) {
		.founder-quote {
			font-size: 32px;
			line-height: 1.4;
		}
	}

	.founder-info {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-top: 8px;
	}

	.founder-name {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 700;
		color: #f5f5f5;
		margin: 0;
	}

	.founder-role {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 500;
		color: #8a8a8a;
		margin: 0;
	}

	.cta-wrapper {
		display: flex;
		padding-top: 16px;
	}
</style>
