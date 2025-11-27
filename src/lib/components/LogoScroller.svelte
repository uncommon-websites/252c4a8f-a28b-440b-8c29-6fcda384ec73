<script lang="ts">
	type Props = {
		label?: string;
		logoUrls: string[];
	};
	
	let { label = 'Trusted by industry leaders', logoUrls }: Props = $props();
</script>

<section class="logo-scroller-section">
	{#if label}
		<p class="label">{label}</p>
	{/if}
	
	<div class="scroller-container">
		<div class="scroller-track">
			{#each logoUrls as logoUrl}
				<div class="logo-item">
					<img src={logoUrl} alt="Company logo" loading="lazy" />
				</div>
			{/each}
			<!-- Duplicate for seamless loop -->
			{#each logoUrls as logoUrl}
				<div class="logo-item">
					<img src={logoUrl} alt="Company logo" loading="lazy" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.logo-scroller-section {
		width: 100%;
		padding: 80px 0;
		background: #000000;
		overflow: hidden;
	}
	
	.label {
		text-align: center;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #8A8A8A;
		margin: 0 0 48px 0;
	}
	
	.scroller-container {
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.scroller-container::before,
	.scroller-container::after {
		content: '';
		position: absolute;
		top: 0;
		width: 120px;
		height: 100%;
		z-index: 2;
		pointer-events: none;
	}
	
	.scroller-container::before {
		left: 0;
		background: linear-gradient(to right, #000000 0%, transparent 100%);
	}
	
	.scroller-container::after {
		right: 0;
		background: linear-gradient(to left, #000000 0%, transparent 100%);
	}
	
	.scroller-track {
		display: flex;
		gap: 80px;
		animation: scroll 30s linear infinite;
		width: fit-content;
	}
	
	.scroller-track:hover {
		animation-play-state: paused;
	}
	
	.logo-item {
		flex-shrink: 0;
		width: 160px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.6;
		transition: opacity 0.3s ease;
	}
	
	.logo-item:hover {
		opacity: 1;
	}
	
	.logo-item img {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
		filter: brightness(0) invert(1);
	}
	
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	
	@media (max-width: 768px) {
		.logo-scroller-section {
			padding: 64px 0;
		}
		
		.label {
			margin: 0 0 40px 0;
			font-size: 12px;
		}
		
		.scroller-track {
			gap: 60px;
		}
		
		.logo-item {
			width: 120px;
			height: 60px;
		}
		
		.scroller-container::before,
		.scroller-container::after {
			width: 60px;
		}
	}
</style>
