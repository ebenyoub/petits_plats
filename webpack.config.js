import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: path.resolve(__dirname, "src/scripts/pages/index.js"),
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".jsx", ".json"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
    },
    mode: "development",
    watch: true,
};
