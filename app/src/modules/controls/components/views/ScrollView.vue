<template>
  <base-window title="Scroll View">
    <scroll-view layout="vertical" backgroundColor="#fafafa">
      <view top="20" :height="Ti.UI.SIZE" backgroundColor="white" v-for="(post, index) in posts" :key="post.id">
        <view top="10" bottom="10" :height="Ti.UI.SIZE" layout="vertical">
          <horizontal-layout left="20" right="20" :height="Ti.UI.SIZE">
            <base-icon icon="user-circle" fontSize="48" color="#ccc"/>
            <vertical-layout :height="Ti.UI.SIZE">
              <label left="10" :font="{ fontWeight: 'bold' }">{{post.user.username}}</label>
              <label left="10" color="#7f8c8d" :font="{ fontSize: 14 }">{{post.date}}</label>
            </vertical-layout>
          </horizontal-layout>
          <view top="10" bottom="10" :height="Ti.UI.SIZE">
            <image-view :image="`https://picsum.photos/768/${400 + index}`" width="100%" preventDefaultImage="true" @dblclick="toggleLike(post)"></image-view>
          </view>
          <horizontal-layout left="20" right="20" :height="Ti.UI.SIZE">
            <view @click="toggleLike(post)" :height="Ti.UI.SIZE" :width="Ti.UI.SIZE" layout="horizontal">
              <base-icon :color="post.liked ? '#4fc08d' : '#ccc'" icon="heart"/>
              <label left="5" color="#aaa">{{post.likes}}</label>
            </view>
            <base-icon left="20" color="#ccc" icon="comment-alt"/>
            <label left="5" color="#aaa">{{post.comments}}</label>
          </horizontal-layout>
        </view>
      </view>
    </scroll-view>
  </base-window>
</template>

<script>
export default {
  data: function () {
    return {
      posts: [{
        id: 1,
        user: {
          username: 'Jon'
        },
        date: 'a few minutes ago',
        likes: 3,
        liked: false,
        comments: 1
      }, {
        id: 2,
        user: {
          username: 'Ellen'
        },
        date: '24 minutes ago',
        likes: 509,
        liked: true,
        comments: 20
      }, {
        id: 3,
        user: {
          username: 'Max'
        },
        date: '3 hours ago',
        likes: 3409,
        liked: false,
        comments: 72
      }]
    }
  },
  methods: {
    toggleLike(post) {
      if (post.liked) {
        post.liked = false;
        post.likes -= 1;
      } else {
        post.liked = true;
        post.likes += 1;
      }
      // Here would be a good place to update your remote data source
    }
  }
}
</script>
