# Changelog

Every released version of Vantagraph Custom, newest first. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[README](https://github.com/Miabeyefendi/Vantagraph-Custom#readme) · [Releases](https://github.com/Miabeyefendi/Vantagraph-Custom/releases)

---

## [1.1.0](https://github.com/Miabeyefendi/Vantagraph-Custom/releases/tag/1.1.0) - 2026-10-05

Spotify 1.3.3 support. Spotify re-hashed its class names and Spicetify's `css-map` does not know the new ones yet, so rules written
against names such as `main-card-card` or `Root__main-view` stopped reaching any element. Needs Spotify `1.3.3+` and Spicetify
`2.45.2+`. For Spotify 1.3.1 and older use the [outdated build](https://github.com/Miabeyefendi/Vantagraph-Custom/releases/tag/1.0.0).

### Added

- A compatibility layer in `theme.js`. 62 legacy class names and the three panel areas are given to the markup Spotify ships now, found through `data-testid`,
  roles, encore ids, structure and grid areas, so cards, shelves, track rows, the entity header, the player bar and the three panels are
  styled again.
- Volume+ settings open from a right-click on the `%` button and from the quick volume panel, because Spicetify menu items no longer show
  up in Spotify 1.3.3.
- The lyric miniplayer settings open in a Spotify modal, because Spotify 1.3.3 answers `window.open` with `null`.
- A QA harness in `src/utils/qa/` that drives a real Spotify.

### Changed

- The wave bars animate in CSS on the compositor instead of being redrawn from JavaScript. The main thread while music plays went from
  79-83% busy to 21-22%.
- Home cards hide their play button with `visibility`, which keeps about 90 layers out of the compositor.
- The density setting, with and without a background image, keeps the left panel, the main view and the right panel on the same top and
  bottom edges.
- The lyrics highlight follows the accent colour through Spotify's lyrics colour variables.

### Fixed

- A saved track did not use the heart colour. Spotify 1.3.3 labels its button "Add to playlist", which no rule matched.
- The "Vantagraph Settings" link in the lyric miniplayer settings did nothing.
- The 60px glow behind the header artwork, the "next track" card and the card hover behave as designed again.

## [1.0.0](https://github.com/Miabeyefendi/Vantagraph-Custom/releases/tag/1.0.0) - 2026-09-24

First release. Vantagraph Custom is a lite edition of
[Vantagraph](https://github.com/Miabeyefendi/Vantagraph) 5.0.2: the preset
palettes and the custom icon set are gone, and every colour the theme paints
is set by the user from inside Spotify.

### Added

- **Colour editor.** The first tab of the settings window. Thirty-six colours
  in seven groups, each with a colour field, hue and opacity strips, an
  eyedropper where Spotify supports it, R G B A fields, and a value box that
  takes HEX (3, 4, 6 or 8 digits), `rgb()`, `rgba()`, `hsl()` and `hsla()`.
  Values can be shown as HEX, RGB or HSL.
- **Colours that follow others.** Menu Text, Icons, Icon Hover and Play Icon
  follow Text, Subtext, Accent and Panel until given a value of their own.
- **Find.** Blinks a colour, and everything following it, inside Spotify.
- **Undo and redo** for colours, 100 steps, with `Ctrl+Z` and `Ctrl+Y`.
- **Palette sharing.** Copy the whole palette as text; load one back from that
  text or from `color.ini` lines. The panel opens with a ready example palette
  that can be copied or tried in one click, and every colour row shows its key.
- **Palette and recent swatches**, and a search box across all colours.
- **Movable settings window.** Drag the title bar, double-click to centre it,
  hold the eye button to look through it.
- New colours that were fixed values before: menu text, icons, icon hover,
  play icon, row hover, divider, shine, the six glass tints used over a
  background image, and Spotify's own selected-row, button, disabled button,
  notification, error and misc colours.

### Changed

- The engine writes the `--spice-rgb-*` twin of every colour, so Spotify's own
  translucent hover and selection tints follow the palette.
- A background image keeps the user's colours instead of switching to a preset
  palette. The glass look is tinted by the new glass colours.
- The settings window draws with solid copies of the palette, so a
  transparent Panel or Text never makes it unreadable.
- Theme folder `vantagraph-custom`, extensions `vantagraph-custom-*.js`,
  stored settings `vantagraph-custom:*`, so it can sit next to Vantagraph
  without the two overwriting each other's files or settings.

### Removed

- The eleven preset palettes. `color.ini` holds one, VantagraphBlack, as the
  starting point.
- The separate light-theme rule set. Light palettes are made from the same
  colours as dark ones.
- The custom icon set and its extension. Spotify's own icons stay as they
  are. The buttons that open the theme's own windows keep their icons,
  embedded in their extensions.
- The Custom Accent snippet, covered by the editor.
- Font presets cut from eight to two, Inter and JetBrains Mono, next to
  Spotify's own font. Any other font still works as a custom font.
