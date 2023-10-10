const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/pages/index.js"),
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"), // Chemin absolu vers le répertoire 'src'
    },
  },
  output: {
    filename: "bundle.js", // Le nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // Le répertoire de sortie
    publicPath: "",
  },
  mode: "development",
  watch: false,
};
