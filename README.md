# @strata/shaders

[![npm version](https://img.shields.io/npm/v/@strata/shaders.svg)](https://www.npmjs.com/package/@strata/shaders)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

GLSL shader collection for [Strata 3D](https://strata.game) - terrain, water, clouds, volumetric effects, and more.

## 📚 Documentation

**Full documentation is available at [strata.game/shaders](https://strata.game/shaders/)**

---

## 🏢 Enterprise Context

**Strata** is the Games & Procedural division of the [jbcom enterprise](https://jbcom.github.io). This package is part of a coherent suite of specialized tools, sharing a unified design system and interconnected with sibling organizations like [Agentic](https://agentic.dev) and [Extended Data](https://extendeddata.dev).

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
  }
});
```

## Available Shaders

| Category | Shaders |
|----------|---------|
| Terrain | `terrainVertexShader`, `terrainFragmentShader` |
| Water | `waterVertexShader`, `waterFragmentShader`, `advancedWaterVertexShader`, `advancedWaterFragmentShader` |
| Sky | `skyVertexShader`, `skyFragmentShader`, `atmosphereVertexShader`, `atmosphereFragmentShader` |
| Clouds | `cloudLayerVertexShader`, `cloudLayerFragmentShader`, `volumetricCloudVertexShader`, `volumetricCloudFragmentShader` |
| Volumetrics | `volumetricFogShader`, `underwaterShader`, `godRaysVertexShader`, `godRaysFragmentShader` |
| Materials | `toonShader`, `hologramShader`, `dissolveShader`, `forcefieldShader`, `glitchShader` |
| Vegetation | `grassWindVertexShader`, `treeWindVertexShader` |

## Related

- [Strata Documentation](https://strata.game) - Full documentation
- [Strata Core](https://github.com/strata-game-library/core) - Main library
- [Strata Presets](https://github.com/strata-game-library/presets) - Pre-configured settings

## License

MIT © [Jon Bogaty](https://github.com/jbcom)
