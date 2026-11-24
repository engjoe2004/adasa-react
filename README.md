# عدسة — Photography Blog (React + React Router)

    npm install
    npm run dev

Routes: `/`, `/blog`, `/blog/:slug`, `/about`, `/terms`, `/privacy`, `*` (404).

The Blog page keeps search, category, view mode and page number in the URL
(`/blog?q=...&category=...&view=list&page=2`).

## Using your real data
Replace `src/data/posts.json` with the file from the assignment. If its field
names differ (e.g. `img` instead of `image`), change the mapping in
`src/data/posts.js` only.
