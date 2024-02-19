# Microfrontends (MFE)


## Inflexible Requirements
- No communication coupling between components directly
- CSS needs to be scoped of each single MFE component
- CSS-IN-JS library (e.g. bootstrap v4/v5, Material-UI, Bosch-UI, etc) can cause issues. If to use this, all components have to use the same version of bootstrap to avoid styling crashes.
These css-in-js will shorten the style class names to something like jss1, jss2, ... And this is done for all. This will cause problems if putting all MFEs together
- 
