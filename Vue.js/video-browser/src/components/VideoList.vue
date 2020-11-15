<template>
    <ul class="list-group col-md-4">
       <VideoListItem 
        v-for="video in videos" 
        :video="video"
        :key="video.etag"
        @videoSelect="onVideoSelect"
       >
       </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: ['videos'],
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        }
    }
};
</script>

<!-- 
documents/vue/video-browser3/video-browser4/video-browser
npm run serve
-->