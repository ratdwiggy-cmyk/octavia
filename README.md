# Octavia — A Capability Platform

Octavia is a free, open-source personal-site template for people who build
things in public: independent builders, researchers, and technical
freelancers who want a home for their work that's a running record of
finished, usable output — not a resume, not a blog, not a portfolio of
intentions.

**What you get:** a homepage, a Collaborate page, and a six-section
"Operating System" that indexes every piece of work by pipeline stage
(Problem → Research → Prototype → Test → Improvement → Result). All of it
is plain HTML, CSS, and vanilla JavaScript — no build step, no framework,
no dependencies, no database. Clone it, fill in the placeholders, push to
GitHub Pages, done.

**Quick start:**
1. Open `index.html` in a browser to preview the site locally — nothing to
   install.
2. Search every file for `[bracketed placeholders]` and replace them with
   your real name, links, and work (see
   [Before you publish](#before-you-publish-personalization-checklist) below
   for the full list).
3. Push the whole folder to a GitHub repository and turn on GitHub Pages
   (see [Deploying to GitHub Pages](#deploying-to-github-pages)).

**Mission the template is built around:** "Build a life of increasing
capability, independence, and service by creating tools, knowledge, and
systems that reduce human suffering." You don't have to keep this line —
swap in your own mission in `index.html`'s Mission section if it doesn't
fit.

## Files

```
index.html    Page structure — hero, mission, about, principles, projects,
              knowledge, services, contact
style.css     All styling (design tokens live at the top as CSS variables)
script.js     Hero console readout, mobile nav toggle, contact form handler
README.md     This file

collaborate.html   Collaboration page — what Octavia works on, and a direct
                    invitation for collaborators, organizations, researchers,
                    and builders to engage (not a request for help)
collaborate.css     Styles specific to collaborate.html (capability grid,
                    the four-audience invitation cards)

os/                    The Operating System — see below
  index.html           OS hub: the pipeline explainer + links to all 6 sections
  projects.html        Section: full pipeline entries (problem → shipped result)
  research.html        Section: Problem + Research stage write-ups
  experiments.html     Section: Prototype + Test stage records
  tools.html           Section: reusable outputs, catalogued by what they do
  frameworks.html      Section: reusable methods extracted from finished work
  learning-log.html    Section: lightweight dated timeline of lessons learned
  entry-template.html  The reusable full-pipeline entry template — duplicate
                        this file for each new Project / Research / Experiment
                        / Framework write-up
  os.css               Styles specific to the OS (stage badges, entry cards,
                        the pipeline layout, the log) — loaded after style.css
  os.js                Shared JS for OS pages (mobile nav toggle, footer year)

  examples/                            Worked example project templates
    example-workflow-automation.html   Example: task automation tool
    example-research-digest.html       Example: knowledge retrieval system
    example-process-dashboard.html     Example: process status dashboard
```

### Example project templates

`os/examples/` holds three fully-worked example projects, linked from the top
of `os/projects.html`. Each one demonstrates professional project reasoning
end to end using this format:

**Title → Problem → Research → Solution → Implementation → Impact → Next Steps**

They're deliberately generic (a task-automation tool, a knowledge-retrieval
system, a process dashboard) so the *reasoning* is the useful part — the
problem framing, the alternatives considered and ruled out, the scoping
decisions, and a next-steps list that's actually sequenced. Anything that
would require a real, specific outcome (names, numbers, measured results) is
left as a `[bracketed placeholder]` rather than invented, and each page opens
with a banner making clear it's a reference, not a completed project. Use
them as a model when writing a real entry, then delete the placeholders.

## The Operating System

The `os/` folder is a structured index of Octavia's actual working process —
not a second, separate site. Every piece of work is understood as moving
through the same six stages:

**Problem → Research → Prototype → Test → Improvement → Result**

`os/index.html` is the hub: it explains the pipeline and links to the six
sections that hold work at each point in it (Projects, Research, Experiments,
Tools, Frameworks, Learning Log). Open it locally or read the live version
once deployed — it's the best starting point for understanding how the
pieces fit together.

### Adding a new entry

1. Open the relevant section page (e.g. `os/projects.html`) and find the
   `<!-- TEMPLATE START -->` … `<!-- TEMPLATE END -->` block in the source.
   Copy that block to add a new card to the grid.
2. Duplicate `os/entry-template.html`, rename it to something specific (e.g.
   `os/rate-limiter.html`), and point the new card's `href` at that file.
   (Tools and Frameworks can often skip this step and link straight back to
   the Project or Experiment they came from — see the existing entries in
   `os/tools.html` for the pattern.)
3. Replace every `[bracketed placeholder]` in the duplicated file with real
   content, and update the stage badge near the top so it matches how far
   the work has actually gotten — an entry doesn't need to have reached
   "Result" to be published.
4. Delete the dashed `TEMPLATE` banner at the top of the duplicated file.
5. Commit and push. GitHub Pages rebuilds automatically.

The Learning Log works a little differently: most notes there don't need
the full six-stage pipeline, so `os/learning-log.html` uses a lighter, dated
row template instead of a separate detail page per entry — just copy a row
directly in that file.

There is nothing to install and nothing to compile. Open `index.html` in a
browser and the site works exactly as it will once deployed.

## Before you publish (personalization checklist)

Search each file for bracketed placeholders like `[Your name]` and
`[Project name]` and replace them with your real content:

- **index.html** — your name, bio, location, current focus, the "What is
  Octavia" panel and Who/What/Why/How identity strip in the hero, three
  project entries, four knowledge/article entries, and your real email /
  GitHub / LinkedIn links.
- **script.js** — `START_DATE` (used for the "days in motion" counter),
  `FOCUS_ROTATION` (the rotating focus labels in the hero console), and
  `CONTACT_EMAIL`.
- **index.html `<title>`** and **meta description** — already reference
  Octavia; update the `[Your Name]` portion.
- **os/*.html** — every listing page ships with a couple of illustrative
  placeholder entries plus one dashed "+ New" template card. Replace the
  placeholders with your real work (or delete them) and keep the template
  card so future entries stay easy to add — see "Adding a new entry" below.

Octavia is the name of the platform itself and appears in the nav mark,
hero, mission section, and footer — you generally shouldn't need to rename
it unless you want a different platform name.

The contact form currently opens the visitor's email client via a `mailto:`
link, since GitHub Pages can't run server-side code. If you want submissions
delivered without that step, connect the form's `action` to a free static-form
service such as Formspree or Getform and remove the JS `mailto` handler.

## The collaboration page

`collaborate.html` is deliberately not a "hire me" or "get in touch" page —
it's framed as an inventory of capability so aligned people can find a fit on
their own terms. It has two parts: **What Octavia works on** (six areas —
systems design, knowledge organization, research, automation, prototypes,
human-centered tools) and a direct **invitation** addressed to four kinds of
people (collaborators, organizations, researchers, builders), each with its
own "good fit if…" line and its own call to action. Update the six capability
descriptions and four audience cards as the real work changes; keep the
opening framing (inventory, not ask) intact even as the specifics change.

## Deploying to GitHub Pages

1. **Create a repository.** On GitHub, click **New repository**. Name it
   anything you like — for a personal top-level site, name it
   `yourusername.github.io` (replace `yourusername` with your actual GitHub
   username) so it publishes at the root domain. Any other name works too;
   it'll just publish at `yourusername.github.io/repo-name`.

2. **Add the whole project to the repository.** All of it — including the
   `os/` folder and `collaborate.html` / `collaborate.css` — needs to be there,
   or the Operating System and Collaborate pages will 404 on the live site.
   Either:
   - Drag the entire project folder into the GitHub web UI
     (**Add file → Upload files**), keeping the folder structure intact, then
     commit, or
   - Push from the command line, from inside the project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/yourusername/yourusername.github.io.git
     git push -u origin main
     ```

3. **Turn on Pages.** In the repository, go to **Settings → Pages**. Under
   **Build and deployment**, set **Source** to **Deploy from a branch**, pick
   the `main` branch and `/ (root)` folder, then click **Save**.

4. **Wait a minute, then visit your site.** GitHub will show the URL at the
   top of the Pages settings page — typically:
   - `https://yourusername.github.io` (if you named the repo
     `yourusername.github.io`), or
   - `https://yourusername.github.io/repo-name` (for any other repo name).

5. **Future updates.** Any time you edit a file and push to `main` (or
   re-upload through the web UI), GitHub Pages rebuilds automatically —
   usually within a minute.

## Optional: custom domain

If you own a domain, add a `CNAME` file to the repo root containing just your
domain (e.g. `yourname.com`), then point your domain's DNS at GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
GitHub's Pages settings page will prompt you for this and verify it for you.
