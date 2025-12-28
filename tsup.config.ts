import { defineConfig } from 'tsup';

/**
 * tsup configuration for @strata-game-library/shaders
 *
 * Ensures proper Node.js ESM support with correct .js extensions
 * Note: This package has minimal external dependencies (just three.js types)
 */
export default defineConfig({
	entry: {
		index: 'src/index.ts',
		types: 'src/types.ts',
		chunks: 'src/chunks.ts',
		clouds: 'src/clouds.ts',
		fur: 'src/fur.ts',
		godRays: 'src/godRays.ts',
		'instancing-wind': 'src/instancing-wind.ts',
		'materials/index': 'src/materials/index.ts',
		raymarching: 'src/raymarching.ts',
		sky: 'src/sky.ts',
		terrain: 'src/terrain.ts',
		volumetrics: 'src/volumetrics.ts',
		'volumetrics-components': 'src/volumetrics-components.ts',
		water: 'src/water.ts',
	},
	format: ['esm'],
	dts: true,
	clean: true,
	sourcemap: true,
	splitting: false,
	target: 'ES2022',
	external: ['three'],
	treeshake: true,
	minify: false,
	keepNames: true,
	banner: {
		js: '/* @strata-game-library/shaders - ESM Build */',
	},
});
