const path = require('path');

module.exports = {
  entry: './src/index.js', // Ajusta la entrada según tu estructura de carpetas
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Ajusta la salida según tu estructura de carpetas
  },
  module: {
    rules: [
      {
        test: /\.(mp4|mov)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/', // Ajusta esto según tu estructura de carpetas
          },
        },
      },
      // Otras reglas de carga si las tienes
    ],
  },
};