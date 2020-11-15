<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo" />
            <VideoList 
            :videos="videos"
            @videoSelect="onVideoSelect"
            >
        </VideoList>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoDetail from './components/VideoDetail';
    import VideoList from './components/VideoList';
  
  const API_KEY = 'AIzaSyDKgvBuoPc4FQB5EDiXDqX9DkGhIWPhHp0';

    export default {
        name: 'App',
        components: {
            SearchBar,
            VideoDetail,
            VideoList
        },
        data() {
            return { videos: [], selectedVideo: null };
        },
        methods: {
            onTermChange(searchTerm) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm // query
                    }
                }).then(response => {
                    this.videos = response.data.items;
                });
            },
            onVideoSelect(video) {
                this.selectedVideo = video;
            }
        },
    };
</script>