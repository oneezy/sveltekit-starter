# SvelteKit Starter
A starting point for Svelte apps

[![image](https://user-images.githubusercontent.com/7369575/168194342-0331fe13-efba-426f-bbfc-5f35762dd920.png)](https://sveltekit-starter-eight.vercel.app/)

## Features

- SvelteKit
- Tailwind 3 (via svelte-add)
  - Tailwind Typography
  - Custom Fonts
  - Swyx Fixes
- Dark Mode 
  - saves with localstorage
- Markdown w/ MDSveX (via svelte-add)
- Social Icons
- Custom Scrollbar [(svrollbar)](https://github.com/daylilyfield/svrollbar#readme)
- Custom 404 Pages

## Setup
**Install**

```
npx degit https://github.com/oneezy/sveltekit-starter my-app
pnpm i
pnpm dev
```

**Default Data**

```js
// ./src/data/meta.js
export const SITE_URL = 'https://mywebsite.com';
export const SITE_TITLE = 'Sveltekit Starter';
export const SITE_AUTHOR = "Justin O'Neill"
export const SITE_SEPARATOR = '|';
export const SITE_DESCRIPTION = "A starting point for Svelte apps";
```

## Todo Considerations *(brain vomit)*

**Development**
- [ ] Husky
- [ ] Conventional Commits
- [ ] Emoji Commits
- [ ] Github Actions
- [ ] Continuous Integration
- [ ] Changelogs [(changesets)](https://github.com/changesets/changesets)
- [ ] Monorepo [(pnpm workspaces)](https://pnpm.io/workspaces)
  - [ ] App 
  - [ ] Admin 
  - [ ] Pages 
  - [ ] Blog 
  - [ ] Docs [(gitbook)](https://vitebook.dev/) 
  - [ ] Shop 
  - [ ] UI Library [(vitebook)](https://vitebook.dev/) 
  - [ ] Affiliate System
  - [ ] Tradingview Scripts 

**SEO**
- [ ] Sitemap
- [ ] Canonical Links
- [ ] Robots.txt
- [ ] Humans.txt
- [ ] RSS Feed
- [ ] JSON-LD
- [ ] Top level URLs `/blog-post` instead of `/blog/blog-post`
- [ ] Opengraph and metatags (auto generated)

**Mobile**
- [ ] PWA Installable
- [ ] Service Worker
- [ ] Manifest

**MDSveX**
- [ ] Rehype Plugins [(for html)](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins)
- [ ] Remark Plugins [(for markdown)](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)
  - [ ] Syntax Highlighting 

**UI/UX**
- [ ] Social Share
- [ ] Variable Fonts
- [ ] Web Mentions
- [ ] i18n
- [ ] Charting

**Performance**
- [ ] Cloudinary

**Authentication**
- [ ] Auth0 
  - [ ] Social Signins
  - [ ] User Roles
  - [ ] Email Templates

**Analytics**
- [ ] Google Analytics
- [ ] Facebook Pixel