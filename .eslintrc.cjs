/*
 * @Author: gaofeng222 596642721@qq.com
 * @Date: 2023-04-12 08:45:48
 * @LastEditors: gaofeng222
 * @LastEditTime: 2023-04-12 08:50:46
 * @FilePath: \@gaofengUI\.eslintrc.cjs
 * @Description: 
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        'vue/multi-word-component-names': 'off'
    }
}