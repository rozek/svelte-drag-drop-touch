# svelte-drag-drop-touch #

HTML5 Drag-and-Drop support for mobile devices
 
**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-viewport-info/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

### Installation ###

```
npm install svelte-drag-drop-touch
```

### Usage ###

```
<script>
  import DragDropTouch from 'svelte-drag-drop-touch'
</script>
```

from then on, HTML5 Drag-and-Drop may also be used on mobile devices.

### Example ###

Several examples are available on the Svelte REPL - feel free to play with them! The most basic one is

* [svelte-drag-drop-touch](https://svelte.dev/repl/ca95f735e4ff495c9d41d827354744f1)

Additional, more detailled examples may be found below.

### Background Information ###

[Bernardo Castilho](https://github.com/Bernardo-Castilho) has written a nice (and lightweight) [Drag-and-Drop polyfill](https://github.com/Bernardo-Castilho/dragdroptouch) which brings HTML5 Drag-and-Drop capabilities to mobile devices. Unfortunately, the NPM package for that polyfill is outdated and does not seem to be updated.

`svelte-drag-drop-touch` just brings a TypeScript definition file and a trivial wrapper around the original code and bundles these with the latest version of `DragDropTouch.js` into an NPM package that may easily be imported into (not only) a Svelte application.

**All the heavy lifting is done by `DragDropTouch.js`, thus, all credits go to [Bernardo Castilho](https://github.com/Bernardo-Castilho)!**

### Additional Examples ###

* [Drop- and No-Drop-Zones](https://svelte.dev/repl/49e42554b5c844c3a7f10aa4b997e969) - look where the events are sent to
* [plain Dragging](https://svelte.dev/repl/9cec631684f34f20ac04ddca57e9eb77) - could be used to combine plain dragging with drag-and-drop

