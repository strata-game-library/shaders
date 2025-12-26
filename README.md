# @strata/shaders

[![npm version](https://img.shields.io/npm/v/@strata/shaders.svg)](https://www.npmjs.com/package/@strata/shaders)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🏢 Enterprise Context

**Strata** is the Games & Procedural division of the [jbcom enterprise](https://jbcom.github.io). This package is part of a coherent suite of specialized tools, sharing a unified design system and interconnected with sibling organizations like [Agentic](https://agentic.dev) and [Extended Data](https://extendeddata.dev).

GLSL shader collection for [Strata 3D](https://strata.game) - terrain, water, clouds, volumetric effects, and more.

## Features

- **Standalone** - No Strata dependency required, works with any Three.js project
- **Type-safe** - Full TypeScript definitions
- **Comprehensive** - Terrain, water, sky, clouds, volumetrics, materials, and more

## Installation

```bash
npm install @strata/shaders
# or
pnpm add @strata/shaders
```

## Usage

```typescript
import { waterVertexShader, waterFragmentShader } from '@strata/shaders';
import * as THREE from 'three';

const material = new THREE.ShaderMaterial({
  vertexShader: waterVertexShader,
  fragmentShader: waterFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uWaterColor: { value: new THREE.Color(0x0077be) },
    // ... other uniforms
  }
});
```

## Available Shaders

### Terrain
- `terrainVertexShader` / `terrainFragmentShader` - Height-based terrain blending

### Water
- `waterVertexShader` / `waterFragmentShader` - Animated water surface
- `advancedWaterVertexShader` / `advancedWaterFragmentShader` - Reflections & refractions

### Sky & Atmosphere
- `skyVertexShader` / `skyFragmentShader` - Procedural sky with sun
- `atmosphereVertexShader` / `atmosphereFragmentShader` - Atmospheric scattering

### Clouds
- `cloudLayerVertexShader` / `cloudLayerFragmentShader` - 2D cloud layers
- `volumetricCloudVertexShader` / `volumetricCloudFragmentShader` - 3D volumetric clouds

### Volumetric Effects
- `volumetricFogShader` - Distance-based fog
- `underwaterShader` - Underwater overlay with caustics
- `godRaysVertexShader` / `godRaysFragmentShader` - Volumetric light shafts

### Materials
- `toonVertexShader` / `toonFragmentShader` - Cel-shading
- `hologramVertexShader` / `hologramFragmentShader` - Holographic effect
- `dissolveVertexShader` / `dissolveFragmentShader` - Dissolve transition
- `forcefieldVertexShader` / `forcefieldFragmentShader` - Energy shield
- `glitchVertexShader` / `glitchFragmentShader` - Digital glitch effect

### Vegetation
- `grassWindVertexShader` - Wind animation for grass instances
- `treeWindVertexShader` - Wind animation for tree instances

## Related

- [Strata 3D](https://strata.game) - Full procedural graphics library
- [Strata Presets](https://github.com/strata-game-library/presets) - Pre-configured settings
- [Strata Examples](https://github.com/strata-game-library/examples) - Example applications

## License

MIT © [Jon Bogaty](https://github.com/jbcom)
