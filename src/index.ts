/**
 * @jbcom/strata-shaders
 *
 * GLSL shader collection for Strata 3D.
 * Provides terrain, water, clouds, volumetric effects, and more.
 *
 * These shaders are standalone and can be used with any Three.js project.
 *
 * @packageDocumentation
 * @module strata-shaders
 */

// Common types
export * from './types';

// Cloud shaders
export * from './clouds';

// Fur/shell shaders
export * from './fur';

// God rays and volumetric lighting
export * from './godRays';

// Wind animation for instanced vegetation
export * from './instancing-wind';

// Material shaders (toon, hologram, dissolve, etc.)
export * from './materials';

// Raymarching SDF shaders
export * from './raymarching';

// Procedural sky and atmosphere
export * from './sky';

// Terrain rendering shaders
export * from './terrain';

// Volumetric fog and underwater effects
export * from './volumetrics';
export * from './volumetrics-components';

// Water surface shaders
export * from './water';
