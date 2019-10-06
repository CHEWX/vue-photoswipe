# PhotoSwipe-demo
PhotoSwipe demo built with vue

## Install

`npm install --save vue-admire-photoswipe`


## Use

[Demo](https://github.com/ymyang/vue-photoswipe-demo)

## Modify

`npm install`

`npm run-script build`

`npm run-script serve`

## Usage with Nuxt.js

### Defining your own Nuxt plugin
Create a file called `photoswipe.js` inside your Nuxt `plugins` folder. Should look something like this:

```
import Vue from 'vue'
import PhotoSwipeComponent from 'vue-admire-photoswipe'

Vue.use( PhotoSwipeComponent )
```

Now inside your `nuxt.config.js`, define your photoswipe plugin file inside the `plugins` key like so:
```
plugins: [
	{ src: '~/plugins/photoswipe', ssr: false }
],
```
Note the `ssr:false` option. Not adding this option will cause errors during render time. This option means Nuxt will not render PhotoSwipe on the server, rather skip it and run it in the Browser.

Opening the browser you will see PhotoSwipe is working.

You will however get a warning in the console saying:
```
[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```

### Using \<client-only> component
If you do not want to see that warning and you do not care about search engnes, you can wrap your PhotoSwipe component inside a `<client-only>` tag like so:

```
<template>
	<client-only>
		<PhotoSwipe />
	</client-only>
</template>
```