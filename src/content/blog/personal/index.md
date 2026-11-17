---
title: Posts
---

<script setup>
import { data as posts } from './index.data.mjs'
</script>

# Posts

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
  </li>
</ul>