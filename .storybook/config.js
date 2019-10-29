import { configure, addParameters } from "@storybook/react";
import "!style-loader!css-loader!sass-loader!../src/sass/main.scss";

configure(require.context("../src", true, /\.stories\.(mdx|js)$/), module);
