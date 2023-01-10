<script setup>
defineProps({
	version: {
		type: String,
		required: true,
	},
})
</script>

<template>
  <div class="warning custom-block">
    <p class="custom-block-title">
      Legacy version
    </p>
    <p>
      You’re browsing the documentation for v{{ version }}. <a href="/v6/guide/">View the docs for the latest version →</a>
    </p>
  </div>
</template>
