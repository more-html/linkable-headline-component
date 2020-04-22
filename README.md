# heading-component
Enhance <h1>, <h2>, etc. for example to allow linking to them by default.

## How to use it?

The following enhances the H1 tag with certain functionality.

This makes use of customized built-in elements (CBEs), which is specified 
and also implemented in Chrome. Unfortunately not all browsers implement
custom elements completely (esp. not the customized built-in part, which is used here).
Polyfills might be required. But the main goal here is to provide a working version, 
even less featured, degrade gracefully or enhance progressively.

The following is built with a strong focus on it.

```
<script type="module" src="<more-html-path>/heading-component/MoreHtmlHeading.js"></script>
<h1 is="morehtml-h1">More-HTML is coming</h1>
```

### Configuring the component

By default the component does the following things:
1) It builds a URL for any heading that can be clicked and reused to find this element again.
   For this to work it requires the tag to have an `id` attribute which will be used as the
   hash in the url.

## Development

The following describes how to (help) develop this code.

## Setup and run

- `cd <here>`
- `./run.sh /bin/bash` will build and start a docker container in there the runtime is setup (currently nodejs)
- `npm i` to install
- `npm start` to start a webserver, that serves the files of this repo
- open your browser and open [http://localhost:48001/examples/] to see the examples page
- develop ...

## Make a new Release

You want to know if you are ready to release a new verison. 
Run `npm run releasable --silent`, this starts a script that checks the [CHANGELOG.md](./CHANGELOG.md), which
is your to-do list! What, to-do list? Yes. See below how and why?

## Development Process

After all changes, before releasing, I always want to get some kind of list of what we did, a changelog.
Creating a changelog after building the next cool feature is quite tedious, even scripts that run
through my commit messages (even when they have a certain format), is just not to the point, because
it starts from the code. Not from the user! Let's turn it around.

Just like in TDD, where I write first a test for what we are planning to code, I started to go one level
up and describe the user's feature first. I start writing things in the changelog, prefixed with the
github style checkboxes `[ ]` (for unchecked) and once I finished the thing I change it to `[x]`.

In the beginning this felt quite strange. But once I got used to it, 
the plan for the next version (see [Versioning](#versioning) below) had 
always been in the [CHANGELOG.md](./CHANGELOG.md) and I "just" had to work it off. Technical things, like
refactoring, etc. went into the commits, but never into the changelog, they naturally don't belong there
anyways. Meanwhile, the changelog lines even become my commit messages, once I really start or finish
building the feature. I tick the feature/task off in the changelog and one can even see in the commits
when a certain feature was done.

Here is the process in bullet points:
1) Write out all planned features, to-dos in the [CHANGELOG.md](./CHANGELOG.md)
1) Make each one line, and prefix this line with `[ ]`
1) The headline of this section, is the next (major) version number, e.g. `# v1.0.0`
1) (Every item, you plan for some future version put it either above the headline of the next version or in your issue tracker)
1) Work off one feature/to-do at a time
1) Tick off the line in the changelog and commit it
1) When all items are done release, using `npm run release`

Tip: If you write less features/to-dos per version, you can release more often, get faster feedback
and can stay focused. Don't overestimate your speed, add less features, and you will ship happier.

## Versioning

Semantic versioning looks nice on paper, but every change is essentially an external API change, if it is
for speed, compatibility or any other change that might be "invisible" (to tests). The browsers and many software vendors
have gone towards major-only versioning. Therefore I simplified the versioning process too, just use
major versions and provide a proper changelog, that a user can understand.
