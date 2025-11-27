<script lang="ts">
	// Props
	type Props = {
		variant?: 'primary' | 'secondary';
		href?: string;
		onclick?: () => void;
		children: any;
	};

	let { variant = 'primary', href, onclick, children }: Props = $props();
</script>

{#if href}
	<a {href} class={['btn', `btn-${variant}`]}>
		{@render children()}
	</a>
{:else}
	<button type="button" {onclick} class={['btn', `btn-${variant}`]}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
		font-size: 16px;
		font-weight: 500;
		padding: 12px 32px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.btn-primary {
		background: linear-gradient(135deg, #8a4eff 0%, #5e00ff 100%);
		color: #ffffff;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		opacity: 0.9;
	}

	.btn-secondary {
		background: transparent;
		color: #ffffff;
		border: 2px solid #8a8a8a;
	}

	.btn-secondary:hover {
		border-color: #8a4eff;
		color: #8a4eff;
	}
</style>
