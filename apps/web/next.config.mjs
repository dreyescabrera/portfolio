import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		/* eslint-disable */
		// Explanation ->
		// https://github.com/kkomelin/isomorphic-dompurify/issues/54#issuecomment-1458603825
		config.externals = [...config.externals, 'canvas', 'jsdom'];
		return config;
		/* eslint-disable */
	},
};

export default withBundleAnalyzer(nextConfig);
