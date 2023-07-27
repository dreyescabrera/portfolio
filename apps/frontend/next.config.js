/** @type {import('next').NextConfig} */
const nextConfig = {
	// https://github.com/kkomelin/isomorphic-dompurify/issues/54#issuecomment-1458603825
	webpack: (config) => {
		config.externals = [...config.externals, 'canvas', 'jsdom'];
		return config;
	},
};

module.exports = nextConfig;
