/**
 * Register all base componentns globally so they can easly be used
 * across other components
 */

 import Vue from 'titanium-vue';

 const requireComponent = require.context('.', false, /Base[\w]+\.vue$/i);

 requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/^\.\//, '').replace('.vue', '');
    Vue.component(componentName, componentConfig.default || componentConfig)
 });
