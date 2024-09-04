/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/contact/': RouteRecordInfo<'/contact/', '/contact', Record<never, never>, Record<never, never>>,
    '/doors/': RouteRecordInfo<'/doors/', '/doors', Record<never, never>, Record<never, never>>,
    '/doors/aluminum': RouteRecordInfo<'/doors/aluminum', '/doors/aluminum', Record<never, never>, Record<never, never>>,
    '/doors/pvc': RouteRecordInfo<'/doors/pvc', '/doors/pvc', Record<never, never>, Record<never, never>>,
    '/fences/': RouteRecordInfo<'/fences/', '/fences', Record<never, never>, Record<never, never>>,
    '/fences/aluminum': RouteRecordInfo<'/fences/aluminum', '/fences/aluminum', Record<never, never>, Record<never, never>>,
    '/garage-doors/': RouteRecordInfo<'/garage-doors/', '/garage-doors', Record<never, never>, Record<never, never>>,
    '/garage-doors/metal-shutters/': RouteRecordInfo<'/garage-doors/metal-shutters/', '/garage-doors/metal-shutters', Record<never, never>, Record<never, never>>,
    '/garage-doors/metal-shutters/injected-slat': RouteRecordInfo<'/garage-doors/metal-shutters/injected-slat', '/garage-doors/metal-shutters/injected-slat', Record<never, never>, Record<never, never>>,
    '/garage-doors/metal-shutters/simple-slat': RouteRecordInfo<'/garage-doors/metal-shutters/simple-slat', '/garage-doors/metal-shutters/simple-slat', Record<never, never>, Record<never, never>>,
    '/garage-doors/sectional': RouteRecordInfo<'/garage-doors/sectional', '/garage-doors/sectional', Record<never, never>, Record<never, never>>,
    '/garage-doors/tilt': RouteRecordInfo<'/garage-doors/tilt', '/garage-doors/tilt', Record<never, never>, Record<never, never>>,
    '/gates/': RouteRecordInfo<'/gates/', '/gates', Record<never, never>, Record<never, never>>,
    '/gates/aluminum': RouteRecordInfo<'/gates/aluminum', '/gates/aluminum', Record<never, never>, Record<never, never>>,
    '/gates/steel': RouteRecordInfo<'/gates/steel', '/gates/steel', Record<never, never>, Record<never, never>>,
    '/guardrails/': RouteRecordInfo<'/guardrails/', '/guardrails', Record<never, never>, Record<never, never>>,
    '/guardrails/aluminum': RouteRecordInfo<'/guardrails/aluminum', '/guardrails/aluminum', Record<never, never>, Record<never, never>>,
    '/guardrails/steel': RouteRecordInfo<'/guardrails/steel', '/guardrails/steel', Record<never, never>, Record<never, never>>,
    '/mosquito-nets/': RouteRecordInfo<'/mosquito-nets/', '/mosquito-nets', Record<never, never>, Record<never, never>>,
    '/mosquito-nets/fixed': RouteRecordInfo<'/mosquito-nets/fixed', '/mosquito-nets/fixed', Record<never, never>, Record<never, never>>,
    '/mosquito-nets/roller': RouteRecordInfo<'/mosquito-nets/roller', '/mosquito-nets/roller', Record<never, never>, Record<never, never>>,
    '/mosquito-nets/sliding': RouteRecordInfo<'/mosquito-nets/sliding', '/mosquito-nets/sliding', Record<never, never>, Record<never, never>>,
    '/pergolas/': RouteRecordInfo<'/pergolas/', '/pergolas', Record<never, never>, Record<never, never>>,
    '/pergolas/aluminum': RouteRecordInfo<'/pergolas/aluminum', '/pergolas/aluminum', Record<never, never>, Record<never, never>>,
    '/pergolas/bioclimatic': RouteRecordInfo<'/pergolas/bioclimatic', '/pergolas/bioclimatic', Record<never, never>, Record<never, never>>,
    '/pergolas/pvc': RouteRecordInfo<'/pergolas/pvc', '/pergolas/pvc', Record<never, never>, Record<never, never>>,
    '/solar-protection/': RouteRecordInfo<'/solar-protection/', '/solar-protection', Record<never, never>, Record<never, never>>,
    '/solar-protection/exterior-shutters/': RouteRecordInfo<'/solar-protection/exterior-shutters/', '/solar-protection/exterior-shutters', Record<never, never>, Record<never, never>>,
    '/solar-protection/exterior-shutters/mono-block': RouteRecordInfo<'/solar-protection/exterior-shutters/mono-block', '/solar-protection/exterior-shutters/mono-block', Record<never, never>, Record<never, never>>,
    '/solar-protection/exterior-shutters/renovation': RouteRecordInfo<'/solar-protection/exterior-shutters/renovation', '/solar-protection/exterior-shutters/renovation', Record<never, never>, Record<never, never>>,
    '/solar-protection/exterior-shutters/under-plaster': RouteRecordInfo<'/solar-protection/exterior-shutters/under-plaster', '/solar-protection/exterior-shutters/under-plaster', Record<never, never>, Record<never, never>>,
    '/solar-protection/interior-blinds/': RouteRecordInfo<'/solar-protection/interior-blinds/', '/solar-protection/interior-blinds', Record<never, never>, Record<never, never>>,
    '/solar-protection/interior-blinds/double-roller': RouteRecordInfo<'/solar-protection/interior-blinds/double-roller', '/solar-protection/interior-blinds/double-roller', Record<never, never>, Record<never, never>>,
    '/solar-protection/interior-blinds/roller': RouteRecordInfo<'/solar-protection/interior-blinds/roller', '/solar-protection/interior-blinds/roller', Record<never, never>, Record<never, never>>,
    '/solar-protection/interior-blinds/venetian': RouteRecordInfo<'/solar-protection/interior-blinds/venetian', '/solar-protection/interior-blinds/venetian', Record<never, never>, Record<never, never>>,
    '/solar-protection/interior-blinds/vertical': RouteRecordInfo<'/solar-protection/interior-blinds/vertical', '/solar-protection/interior-blinds/vertical', Record<never, never>, Record<never, never>>,
    '/solar-protection/solar-shading': RouteRecordInfo<'/solar-protection/solar-shading', '/solar-protection/solar-shading', Record<never, never>, Record<never, never>>,
    '/solar-protection/swing-shutters': RouteRecordInfo<'/solar-protection/swing-shutters', '/solar-protection/swing-shutters', Record<never, never>, Record<never, never>>,
    '/windows/': RouteRecordInfo<'/windows/', '/windows', Record<never, never>, Record<never, never>>,
    '/windows/aluminum': RouteRecordInfo<'/windows/aluminum', '/windows/aluminum', Record<never, never>, Record<never, never>>,
    '/windows/pvc': RouteRecordInfo<'/windows/pvc', '/windows/pvc', Record<never, never>, Record<never, never>>,
    '/works/': RouteRecordInfo<'/works/', '/works', Record<never, never>, Record<never, never>>,
  }
}
