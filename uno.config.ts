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
    ['bg-contact-image', { 'background-image': 'url(/images/galleryImages/image-1.jpg)' }],
    ['bg-works-image', { 'background-image': 'url(/images/galleryImages/image-4.jpg)' }],
    ['bg-windows-image', { 'background-image': 'url(/images/sectionImages/image-1.jpg)' }],
    ['bg-doors-image', { 'background-image': 'url(/images/sectionImages/image-5.jpeg)' }],
    ['bg-guardrail-image', { 'background-image': 'url(/images/sectionImages/image-6.jpg)' }],
    ['bg-shutters-image', { 'background-image': 'url(/images/sectionImages/image-7.jpg)' }],
    ['bg-bso-image', { 'background-image': 'url(/images/sectionImages/image-8.jpg)' }],
  ],
})
