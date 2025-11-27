<script lang="ts">
	// Types
	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		company: string;
		imageSrc: string;
		imageAlt: string;
	};

	type Props = {
		title?: string;
		subtitle?: string;
		testimonials: Testimonial[];
	};

	let { title = 'Trusted by tour managers and promoters', subtitle, testimonials }: Props = $props();
</script>

<section class="testimonials-section">
	<div class="testimonials-container">
		{#if subtitle}
			<p class="testimonials-subtitle">{subtitle}</p>
		{/if}
		<h2 class="testimonials-title">{title}</h2>

		<div class="testimonials-grid">
			{#each testimonials as testimonial}
				<div class="testimonial-card">
					<div class="testimonial-content">
						<p class="testimonial-quote">"{testimonial.quote}"</p>
						<div class="testimonial-author">
							<div class="author-image">
								<img src={testimonial.imageSrc} alt={testimonial.imageAlt} />
							</div>
							<div class="author-info">
								<p class="author-name">{testimonial.name}</p>
								<p class="author-role">{testimonial.role}</p>
								<p class="author-company">{testimonial.company}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonials-section {
		width: 100%;
		background: #000000;
		color: #ffffff;
		padding: 80px 16px;
	}

	@media (min-width: 768px) {
		.testimonials-section {
			padding: 120px 80px;
		}
	}

	.testimonials-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.testimonials-subtitle {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #8a4eff;
		margin: 0 0 16px 0;
		text-align: center;
	}

	.testimonials-title {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 32px;
		font-weight: 900;
		line-height: 1.2;
		margin: 0 0 64px 0;
		color: #ffffff;
		text-align: center;
	}

	@media (min-width: 768px) {
		.testimonials-title {
			font-size: 40px;
		}
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 32px;
	}

	@media (min-width: 768px) {
		.testimonials-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.testimonials-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.testimonial-card {
		background: #2e2e2e;
		border-radius: 8px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		transition: transform 0.2s ease, background 0.2s ease;
	}

	.testimonial-card:hover {
		transform: translateY(-4px);
		background: #333333;
	}

	.testimonial-content {
		display: flex;
		flex-direction: column;
		gap: 24px;
		height: 100%;
	}

	.testimonial-quote {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.6;
		color: #f5f5f5;
		margin: 0;
		flex-grow: 1;
	}

	.testimonial-author {
		display: flex;
		gap: 16px;
		align-items: center;
		margin-top: auto;
	}

	.author-image {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		overflow: hidden;
		flex-shrink: 0;
		background: #1a1a1a;
		border: 2px solid #8a4eff;
	}

	.author-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.author-info {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.author-name {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
	}

	.author-role {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 500;
		color: #8a8a8a;
		margin: 0;
	}

	.author-company {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 14px;
		font-weight: 400;
		color: #666666;
		margin: 0;
	}
</style>
