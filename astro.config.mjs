import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightObsidian({
          vault: './src/content/learn',
					sidebar: {
						label: 'Learn',
					}
        }),
      ],
      sidebar: [
        obsidianSidebarGroup,
      ],
      title: 'Learning',
    }),
  ],
});
