const path = require('path')
const fsp = require('fs/promises')

const TerserPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
   target: 'node',
   mode: isProd ? 'production' : 'development',
   entry: {
      dynot: './src/dynot.ts',
      babel: './src/babel.ts',
   },
   devtool: false,
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2',
      libraryExport: 'default',
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
         '@babel/code-frame': require.resolve('./stubs/babel-codeframe'),
         '@babel/helper-compilation-targets': require.resolve(
            './stubs/helper-compilation-targets',
         ),
      },
   },
   plugins: [
      // TODO: Remove in next semver-major version
      (compiler) => {
         const plugin = { name: 'replace node: protocol' }
         compiler.hooks.done.tap(plugin, async () => {
            const dynotDist = path.resolve(compiler.options.context, 'dist/dynot.js')
            const src = await fsp.readFile(dynotDist, 'utf8')
            const newSrc = src.replace(/require\("node:/g, 'require("')
            await fsp.writeFile(dynotDist, newSrc, 'utf8')
         })
      },
   ],
   ignoreWarnings: [/critical dependency:/i],
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   node: false,
   optimization: {
      nodeEnv: false,
      moduleIds: 'named',
      chunkIds: 'named',
      minimizer: isProd
         ? [
               new TerserPlugin({
                  terserOptions: {
                     // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                     mangle: false,
                  },
               }),
            ]
         : [],
   },
}
