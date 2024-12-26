import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://frsswq.github.io',
  base: 'deskreview',
  integrations: [tailwind(), icon(), mdx()],
  trailingSlash: 'never',
});