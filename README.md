# Microfrontends (MFE)


## Inflexible Requirements
- No communication coupling between components directly
- CSS needs to be scoped of each single MFE component, due to class-name-collesion
- CSS-IN-JS library (e.g. bootstrap v4/v5, Material-UI, Bosch-UI, etc) can cause issues. If to use this, all components have to use the same version of bootstrap to avoid styling crashes.
These css-in-js will shorten the style class names to something like jss1, jss2, ... And this is done for all. This will cause problems if putting all MFEs together

## Navigation Requirements:
- Both the shell and remotes might need routing features
- Use off-the-shelf routing solutions -> no custom library
- Navigation should be possible in isolated and in hosted mode
- Each remote might be using a completely different navigation framework or change it after a while.

## Rules of Routing
- Shell should use BrowserHistory
- Remotes should use MemoryHistory
- Independency of used router implementation (e.g. React, Vue, Angular, Svleve, ...)
- Don't share complex router instances...
- Use simple events, callbacks, etc...

### User clicks on link governed by shell (Browser History)
- Communicate change DOWN to remote
- Remote's Memory History should update its current path
### User clicks on link governed by remote (Momory History)
- Communicate change UP to shell
- Shell's Browser History should update its current path
- Avoid infinite updating the history...


