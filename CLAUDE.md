# marcoweb-blog

Astro static site, deployed on Netlify, published via a daily GitHub Actions build.

## Never use the em-dash character

Do not use `—` (U+2014) anywhere: content, code, comments, commit messages.
Use a comma, colon, semicolon or full stop. Paired dashes become paired commas.
The en-dash `–` in numeric ranges is fine.

Run `npm run check:dashes` before committing. It fails the build if any appear.

## Publishing

Posts go live when a build runs on or after their `pubDate`, so nothing appears
until the next build. Two things follow from that:

- The build machine runs in **UTC**. A post dated tomorrow in local time will not
  publish until UTC reaches that date.
- Never backdate a `pubDate` to force something out early.

## Video embeds

`youtubeId` in frontmatter renders the embed. **Private YouTube videos do not
embed** and show "Video unavailable" on a live page. Confirm a video is public
before adding its id:

    curl -s -o /dev/null -w '%{http_code}' \
      "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json"

200 means it is publicly embeddable.

## Pages that set `noindex`

Add the path to `NOINDEX_PATHS` in `astro.config.mjs` as well, so the sitemap
filter stays in sync. A page that is both noindex and in the sitemap sends
Google contradictory signals.
