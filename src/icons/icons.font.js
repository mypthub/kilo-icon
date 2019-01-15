module.exports = {
  files:          [
    './*.svg',
  ],
  fontName:       'icons',
  classPrefix:    'icons-',
  baseSelector:   '.icons',
  types:          ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  emitCodepoints: [
    { fileName: 'dist/icon-font/[fontname]-codepoints.json', type: 'json' },
    { fileName: 'dist/icon-font/[fontname]-codepoints.js', type: 'web' },
    { fileName: 'dist/icon-font/[fontname]-codepoints.inc.js', type: 'web' },
  ],
};
