<script context="module">
	import { SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '$data/meta.js';
  import Social from '$lib/Social.svelte';
  import Theme from '$lib/Theme.svelte';
</script>

<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{SITE_TITLE} {SITE_SEPARATOR} {SITE_AUTHOR}</title>
  <meta name="description" content="{SITE_DESCRIPTION}">

  <meta property="og:title" content="{SITE_TITLE} {SITE_SEPARATOR} {SITE_AUTHOR}" />
  <meta property="og:description" content="{SITE_DESCRIPTION}" />
  <meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<div class="h-screen container flex flex-col items-center justify-center prose">
  <img class="dark:invert" src="/logo.svg" alt="Logo">
  <div class="not-prose flex flex-col items-center justify-center gap-2">
    <h1 class="text-black dark:text-white text-4xl font-bold">{SITE_TITLE}</h1>
    <p class="text-slate-500 dark:text-slate-400">{SITE_DESCRIPTION}</p>
  </div>
  <div class="flex items-center justify-center gap-2">
    <Social />
    <Theme />
  </div>
</div>