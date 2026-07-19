# Octavia — Launch checklist

Work through this top to bottom before you push the site live. Items marked
**(code)** were already fixed in this release; the rest are personalization
and verification steps you'll do yourself.

## 1. Content — replace every placeholder

- [ ] `index.html` — your name (appears in `<title>`, meta description, the
      hero identity strip, and the About section), bio, location, current
      focus, background/discipline
- [ ] `index.html` — three project cards (name, description, tags, status,
      year, link) in the Projects section
- [ ] `index.html` — four Knowledge entries (date, title, category, link)
- [ ] `index.html` — real email, GitHub, and LinkedIn URLs in the contact
      links (replace `you@example.com` and `yourusername`)
- [ ] `script.js` — `START_DATE`, `FOCUS_ROTATION`, and `CONTACT_EMAIL`
- [ ] `collaborate.html` — the six capability descriptions and four
      audience cards, if your real work differs from the defaults
- [ ] `os/*.html` — replace or delete the placeholder entries in Projects,
      Research, Experiments, Tools, Frameworks, and the Learning Log; keep
      the dashed "+ New" template card in each so future entries stay easy
      to add
- [ ] `os/examples/*.html` — these three worked examples are reference
      material, not real projects. Either leave them (they're clearly
      labeled "Example — not a completed project") or delete the folder and
      remove the links to it from `os/projects.html`
- [ ] Run a final search across every file for the literal string `[` to
      catch any placeholder you missed

## 2. Links and navigation

- [ ] Click every nav link on every page — homepage, Collaborate, and all
      seven OS pages — and confirm it lands where expected
- [ ] Confirm the "Work with me" / contact links go to a real, monitored
      email address
- [ ] Confirm external links (GitHub, LinkedIn) open in a new tab
      (`target="_blank" rel="noopener"` — already set) and point to real
      profiles
- [ ] **(code)** Collaborate page's nav previously dropped four homepage
      sections (About, Principles, Knowledge, Services) — now matches the
      homepage nav in full
- [ ] **(code)** Fixed a grammar error ("A entry" → "An entry") on the
      Operating System hub page

## 3. Deployment sanity check

- [ ] **(code)** The README's deploy steps previously listed only 4 files
      to upload, which would have left `collaborate.html`, `collaborate.css`,
      and the entire `os/` folder off the live site — fixed to upload the
      whole project folder
- [ ] After enabling GitHub Pages, visit the live URL (not just the local
      file) and re-check every nav link — relative paths can behave
      differently once deployed
- [ ] Confirm `os/index.html` and its six section pages all load correctly
      from the live site, including the three worked examples under
      `os/examples/`
- [ ] If you're using a custom domain, confirm the `CNAME` file is in the
      repo root and DNS has propagated before announcing the launch

## 4. Accessibility

- [ ] Tab through the homepage using only the keyboard — the skip link,
      nav, and contact form should all be reachable and show a visible
      focus outline (already implemented via `:focus-visible`)
- [ ] Confirm the mobile nav toggle is reachable and operable with a
      screen reader (`aria-expanded` / `aria-controls` are already wired up)
- [ ] If you replace the `[PHOTO / MARK]` placeholder in About with a real
      photo, add meaningful `alt` text
- [ ] Color contrast has already been checked against WCAG AA for all text
      tokens (`--ink`, `--ink-dim`, `--ink-faint`, `--signal`, `--teal`,
      `--danger` all pass on both background colors) — re-check if you
      change the color palette

## 5. Mobile and responsive check

- [ ] Test at three widths at minimum: ~375px (phone), ~768px (tablet),
      1280px+ (desktop)
- [ ] **(code)** Widened the nav-collapse breakpoint from 720px to 900px so
      the 9-item homepage nav doesn't crowd on tablets before the hamburger
      menu takes over — re-verify at ~768–900px after you add or rename any
      nav items
- [ ] Confirm the contact form's `mailto:` fallback opens correctly on a
      real phone (or switch it to Formspree/Getform per the README if you
      want submissions delivered without opening an email client)

## 6. Cross-browser spot check

- [ ] Chrome, Safari, and Firefox at minimum
- [ ] Confirm the Google Fonts (Space Grotesk, Inter, IBM Plex Mono) load
      correctly — check the network tab if text renders in a fallback font
- [ ] Confirm `prefers-reduced-motion` is respected (disable animations in
      OS settings and confirm the hero console blink and smooth-scroll stop)

## 7. Final polish

- [ ] Update the `<title>` and meta description on every page if you've
      renamed the platform or changed your positioning
- [ ] Add a social preview image in GitHub repo settings (1280×640px) so
      shared links show a real thumbnail — see `GITHUB_REPO_DESCRIPTION.md`
- [ ] Set the repo's About description and topics — see
      `GITHUB_REPO_DESCRIPTION.md`
- [ ] Read through the whole site once, start to finish, as a stranger
      would: can you understand what Octavia is and who it's for within
      60 seconds of landing on the homepage?

## 8. Post-launch

- [ ] Star/watch your own repo so you notice issues if others fork it
- [ ] Add your first real OS entry (Project, Research, or Experiment)
      within the first week so the site doesn't sit empty
- [ ] Bookmark the "Adding a new entry" section of the README — you'll use
      it every time you publish new work
