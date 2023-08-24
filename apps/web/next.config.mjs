import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	/* eslint-disable */
	// @ts-expect-error
	webpack: (config) => {
		// Explanation ->
		// https://github.com/kkomelin/isomorphic-dompurify/issues/54#issuecomment-1458603825
		config.externals = [...config.externals, 'canvas', 'jsdom'];
		return config;
		/* eslint-disable */
	},
};

// @ts-expect-error
export default withBundleAnalyzer(nextConfig);
