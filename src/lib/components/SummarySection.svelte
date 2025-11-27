<script lang="ts">
	// Props
	type Props = {
		title?: string;
		paragraphs: string[];
	};

	let { title, paragraphs }: Props = $props();
</script>

<section class="summary-section">
	<div class="summary-container">
		{#if title}
			<h2 class="summary-title">{title}</h2>
		{/if}
		<div class="summary-content">
			{#each paragraphs as paragraph}
				<p class="summary-paragraph">{paragraph}</p>
			{/each}
		</div>
	</div>
</section>

<style>
	.summary-section {
		width: 100%;
		background: #000000;
		color: #ffffff;
		padding: 64px 16px;
		border-top: 1px solid #2e2e2e;
	}

	@media (min-width: 768px) {
		.summary-section {
			padding: 80px 80px;
		}
	}

	.summary-container {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.summary-title {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 32px;
		font-weight: 700;
		line-height: 1.2;
		margin: 0 0 32px 0;
		color: #ffffff;
	}

	@media (min-width: 768px) {
		.summary-title {
			font-size: 40px;
		}
	}

	.summary-content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.summary-paragraph {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 1.7;
		color: #f5f5f5;
		margin: 0;
	}

	@media (min-width: 768px) {
		.summary-paragraph {
			font-size: 20px;
		}
	}
</style>
