# zzz studio

Static homepage for https://zzzstudio.net/, hosted on GitHub Pages.

## Publish updates

Edit `index.html`, `styles.css`, `main.js`, or `assets/`, then commit and push to `main`.
GitHub Pages publishes the repository root automatically. No build or database is required.
Keep `CNAME` and `.nojekyll` in the publishing root.

## Domain

- Primary domain: `zzzstudio.net`
- `www.zzzstudio.net` redirects to the primary domain.
- DNS is managed in Alibaba Cloud.
- Root (`@`) A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `au-au.github.io`.
- Keep the `_github-pages-challenge-au-au` TXT record for GitHub domain verification.
- HTTPS certificates are managed by GitHub Pages.

The existing mail records and `app.zzzstudio.net` are separate services.

## Preview locally

```sh
python3 -m http.server 8767 --bind 127.0.0.1
```

Open http://127.0.0.1:8767/.
