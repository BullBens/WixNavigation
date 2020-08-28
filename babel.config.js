module.exports = {

  presets:      [["@babel/preset-env", { "targets": { "node": "current" } }]],
  plugins: ['@babel/plugin-syntax-jsx',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.tsx', '.android.tsx', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@helpers': ['./src/helpers'],
          '@hooks': ['./src/hooks'],
          '@reducers': ['./src/reducers'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@typings': ['./src/typings'],
        },
        cwd: 'packagejson',
      },
    ],
  ],
};
