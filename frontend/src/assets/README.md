# Assets Directory

This directory contains placeholder assets for the Himalaya Wellness GWR Website.

## Required Assets

### Logo
- `himalaya-logo.svg` - Himalaya Wellness logo (orange waves with "SINCE 1930" text)
  - Located in `/public/himalaya-logo.svg`
  - Replace with actual brand logo

### Hero Background
- `hero-bg.jpg` or `hero-bg.svg` - Hero section background image
  - Located in `/public/hero-bg.svg` (placeholder)
  - Should show hands holding soil with a growing plant
  - Recommended size: 1920x1080 pixels or larger
  - The component applies a dark green overlay gradient

## Usage

Assets in the `/public` folder can be referenced directly:
```jsx
<img src="/himalaya-logo.svg" alt="Himalaya Wellness" />
```

Assets in `/src/assets` should be imported:
```jsx
import myImage from './assets/myImage.png';
```

## Design Colors

- Dark Green: #0F5B23
- Light Green: #DCEAB4
- Orange: #F37021
- Teal: #00796B
- White: #FFFFFF
