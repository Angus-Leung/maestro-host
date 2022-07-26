const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "https://d20cmbginwxfr6.cloudfront.net/",
    // publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "maestro_host",
      filename: "remoteEntry.js",
      remotes: {
        maestroColors: 'maestroColors@https://react-maestro-test.s3.us-west-2.amazonaws.com/maestro-colors/remoteEntry.js',
        // maestroColors: 'maestroColors@http://localhost:3000/remoteEntry.js',
        maestroReceipts: 'maestroReceipts@https://react-maestro-test.s3.us-west-2.amazonaws.com/maestro-receipts/remoteEntry.js',
        // maestroReceipts: 'maestroReceipts@http://localhost:3001/remoteEntry.js'
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
