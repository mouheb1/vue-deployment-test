import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { general } from './src/assets/json/config.json'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetWind({
      important: '#app',
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
  rules: [
    ['bg-contact-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/gallery/image-1.jpg)` }],
    ['bg-works-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/gallery/image-4.jpg)` }],
    ['bg-windows-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/windows/cover/windows-cover.jpg)` }],
    ['bg-doors-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/doors/cover/doorCover.jpg)` }],
    ['bg-solarProtection-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/solarProtection/cover/solarProtectionCover.jpg)` }],
    ['bg-interiorBlinds-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/solarProtection/interior-blinds/cover/interiorBlindsCover.jpg)` }],
    ['bg-guardrails-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/guardrails/cover/guardrailsCover.jpg)` }],
    ['bg-garageDoors-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/garageDoors/cover/garageDoorsCover.jpg)` }],
    ['bg-metalShutters-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/garageDoors/metal-shutters/metal-shutters.jpg)` }],
    ['bg-mosquitNets-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/mosquitoNets/cover/mosquitNetsCover.jpg)` }],
    ['bg-pergolas-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/pergolas/pergolas-cover.png)` }],
    ['bg-exteriorShutters-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/solarProtection/exterior-shutters/cover/exteriorShuttersCover.webp)` }],
    ['bg-fences-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/fences/cover/fencesCover.jpg)` }],
    ['bg-gates-image', { 'background-image': `url(${general.imageProviderBaseUrl}/images/gates/cover/gatesCover.jpg)` }],
    ['cursor-360', { cursor: `url(${general.imageProviderBaseUrl}/images/cursor/cursor-360-drag.png), e-resize !important` }],
  ],
})
