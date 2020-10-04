module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    /* https://tailwindcss.com/docs/upcoming-changes */
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
