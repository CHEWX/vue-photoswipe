import PhotoSwipeComponent from './PhotoSwipe.vue'

function admirePlugin( Vue ) {
    Vue.component( 'PhotoSwipe', PhotoSwipeComponent )
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use( admirePlugin )
}

export default admirePlugin

// Export all components too
export { PhotoSwipeComponent }