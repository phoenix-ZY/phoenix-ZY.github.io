# Blog source templates

This directory is excluded from the Jekyll build. No blog page or post is currently published.

The theme's post, archive, pagination, and rich-content components remain available.
`blog.md` is the original blog index, `post.md` is a reusable post template, and
`2025-12-17-cpu-arch.md` preserves the original unfinished CPU post.

To enable the blog when articles are ready:

1. Copy `blog.md` to `_pages/blog.md`.
2. Copy a completed post to `_posts/YYYY-MM-DD-title.md` and set its date.
3. In `_config.yml`, enable `pagination.enabled`, `posts_in_search`, and optionally
   `related_blog_posts.enabled`; set `jekyll-archives.posts.enabled` to `[year, tags, categories]`.
4. If desired, enable `latest_posts.enabled` in `_pages/about.md`.
5. Run `bundle exec jekyll build` and review the output before publishing.
