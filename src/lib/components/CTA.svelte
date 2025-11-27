<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	type Props = {
		title?: string;
		description?: string;
		buttonText?: string;
		buttonHref?: string;
		imageSrc?: string;
		imageAlt?: string;
	};

	let {
		title = 'Join the early access program',
		description = 'Velvet is currently in early access. Request an invitation to start building presale campaigns that take minutes to launch instead of days. No annual contracts, no feature bloat, and your data stays yours with unrestricted CSV exports.',
		buttonText = 'Request early access',
		buttonHref = '#early-access',
		imageSrc = '/generated/image-documentary-style-editorial-photograph-o.webp',
		imageAlt = 'Tour managers collaborating on campaign strategy'
	}: Props = $props();
</script>

<section class="cta-section">
	<div class="cta-container">
		<div class="cta-content">
			<div class="cta-text">
				<h2 class="cta-title">{title}</h2>
				<p class="cta-description">{description}</p>
				<div class="cta-button-wrapper">
					<Button variant="primary" href={buttonHref}>{buttonText}</Button>
				</div>
			</div>
			<div class="cta-image">
				<img src={imageSrc} alt={imageAlt} />
			</div>
		</div>
	</div>
</section>

<style>
	.cta-section {
		background: linear-gradient(135deg, #000000 0%, #2E2E2E 100%);
		padding: var(--spacing-20) var(--spacing-4);
		position: relative;
		overflow: hidden;
	}

	.cta-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, #8A4EFF 50%, transparent);
		opacity: 0.3;
	}

	.cta-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.cta-content {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-12);
		align-items: center;
	}

	.cta-text {
		text-align: center;
	}

	.cta-title {
		font-size: 40px;
		font-weight: 700;
		color: #FFFFFF;
		margin: 0 0 var(--spacing-6) 0;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.cta-description {
		font-size: 18px;
		line-height: 1.6;
		color: #F5F5F5;
		margin: 0 0 var(--spacing-8) 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button-wrapper {
		display: flex;
		justify-content: center;
		gap: var(--spacing-4);
	}

	.cta-image {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		background: linear-gradient(135deg, #8A4EFF 0%, #5E00FF 100%);
		padding: 3px;
	}

	.cta-image img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 14px;
		object-fit: cover;
	}

	@media (min-width: 768px) {
		.cta-section {
			padding: var(--spacing-24) var(--spacing-20);
		}

		.cta-content {
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-16);
		}

		.cta-text {
			text-align: left;
		}

		.cta-title {
			font-size: 48px;
		}

		.cta-description {
			margin-left: 0;
			margin-right: 0;
		}

		.cta-button-wrapper {
			justify-content: flex-start;
		}
	}

	@media (min-width: 1024px) {
		.cta-title {
			font-size: 56px;
		}

		.cta-description {
			font-size: 20px;
		}
	}
</style>
