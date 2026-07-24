// @ts-check
import { defineConfig } from 'astro/config';

const [githubOwner, githubRepository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserPagesRepository = githubRepository === `${githubOwner}.github.io`;

export default defineConfig({
	site: githubOwner ? `https://${githubOwner}.github.io` : undefined,
	base: githubRepository && !isUserPagesRepository ? `/${githubRepository}` : '/',
});
