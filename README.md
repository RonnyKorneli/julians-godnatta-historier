# Studio Zweibrand – Astro Starter Kit

**Static Page Construct Based on Astro**

This is a base starter kit with basic components and css for building astro pages.

## Stack

- Astro for basic Framework
- SASS
- Javascript

## Basics

- fully CSS reset
- CSS grid-based support: three base widths (css-variables)
  - content-width: 768px / tablet-width
  - wide-width: 1200px / desktop-width
  - full-width
- NO container wrap module for content rows needed
- column support for grid
- custom font support

### SASS Specials

- media query mixin usage: +mq()
- predefined widths:
  - 'phone': 375px,
  - 'phone-wide': 480px,
  - 'phablet': 560px,
  - 'tablet': 768px,
  - 'tablet-wide': 1000px,
  - 'desktop': 1200px,
  - 'desktop-wide': 1560px
- one value (px, rem, ...) or predefined width as minimal width
- two values or predefined widths for definition between width-range
- one value with optional __'max'__ for definition of **maximum width** (max-width: VALUE)
- the mixin is for use with self defined values or predefined values (list above)
- all generated css will be valid and supports modern browser (https://caniuse.com/?search=media%20queries)

## Components

- title, paragraph
- html based accordean (details, summary), FAQ-module
- content carousel width touch and nav support
- column based media-text module
  - grid based content section with selction of wide or standard half of size
  - optional alignment (left/right)
  - optional image fitting corresponding on content
- teaser with inline content area
  - optional alignment (left/right)
  - optional mobile image support
- gallery component with width support

## Project Scripts

The project initial created with [bun](https://bun.sh/).

| Type             | Script        |
| ---------------- | ------------- |
| Development      | npm run dev   |
| Staging Build    | npm run stage |
| Productive Build | npm run build |

## Continous Interations

Defined CI-variables for staging deployment:

- **DOMAIN_TARGET**: server domain (set to: srv.zweibrand.de)
- **PORT**: SFTP-Port for server ssh connection (set to: 12887)
- **FTP_TARGET**: directory for stage deployment (set to: /var/www/html/astro-starter)
- **FTP_USERNAME**: FTP username (set to: www-data)
- **FTP_PASSWORD**: FTP password for selected user

### Test - Stage

(GitLab defaults)

- nodejs-scan SAST
- semgrep SAST

### Staging - Stage

- build for [stage environment](https://srv.zweibrand.de/astro-starter)
- auto push data to target directory on Zweibrand staging server

### Build - Stage

- fully build for productive
- save artifacts for download
- **no active productive deployment integrated**
