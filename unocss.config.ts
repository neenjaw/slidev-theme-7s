import AsUI from '@alvarosabu/ui'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
  Preset,
} from 'unocss'

const extThemeConfig = {
  ...AsUI.unoconfig.theme,
  colors: {
    primary: {
      '50': '#B7C4D3',
      '100': '#A7B7C9',
      '200': '#879DB6',
      '300': '#6784A3',
      '400': '#516A86',
      '500': '#3E5166',
      '600': '#2B3846',
      '700': '#171F27',
      '800': '#040507',
      '900': '#000000',
      DEFAULT: '#3E5166',
    },
    secondary: {
      '50': '#F0F3FB',
      '100': '#F0F3FB',
      '200': '#D3DBF4',
      '300': '#A7B7EA',
      '400': '#6D87DD',
      '500': '#6179C6',
      '600': '#415184',
      '700': '#415184',
      '800': '#415184',
      '900': '#415184',
      DEFAULT: '#6179C6',
    },
  },
}

export default defineConfig({
  theme: extThemeConfig,
  shortcuts: AsUI.unoconfig.shortcuts,
  rules: AsUI.unoconfig.rules,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts(AsUI.unoconfig.fonts) as unknown as Preset,
    presetTypography(AsUI.unoconfig.typography) as unknown as Preset,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
