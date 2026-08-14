// AdSense configuration.
//
// ADSENSE_CLIENT is the publisher ID (also hardcoded in the loader script in
// Layout.astro). AD_SLOTS maps each placement to an ad-unit slot ID created in
// AdSense (Ads > By ad unit). A placement with an empty '' slot renders nothing,
// so the site is safe before the units exist; fill the IDs in to switch each on.
//
// Recommended units to create in AdSense and paste here:
//   leaderboard -> a responsive "Display" unit (horizontal). Top of page / between sections.
//   rectangle   -> an "In-article" unit. Sits inside long article bodies.
//   sidebar     -> a responsive "Display" unit (optional; only if a sidebar is used).
export const ADSENSE_CLIENT = 'ca-pub-3362770372572725'

export const AD_SLOTS: Record<'leaderboard' | 'rectangle' | 'sidebar', string> = {
  leaderboard: '',
  rectangle: '',
  sidebar: '',
}
