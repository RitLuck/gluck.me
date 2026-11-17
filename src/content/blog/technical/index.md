---
title: Technical Articles
---

<script setup>
import { data as posts } from './index.data.mjs'
</script>

# Technical Articles

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
  </li>
</ul>