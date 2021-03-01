import babel from 'rollup-plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import external from 'rollup-plugin-peer-deps-external';
import {terser} from "rollup-plugin-terser";


const input = "index.js";
const output = "dist/index";

export default [

    {
        input: input,
        output: {
            file: `${output}.modern.js`,
            format: 'es'
        },
        plugins: [
            babel({
                exclude: "node_modules/**"
            }),
            commonjs({
                include: [
                    'node_modules/**'
                ],
                sourceMap: false
            }),
            terser(),
            external(),
        ]

    }
]