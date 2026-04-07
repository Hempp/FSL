# Footer Section Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static

## DOM Structure
- `footer#ft-sec`
  - Overlaps donation section (margin-top: -190px, padding-top: 150px)
  - Content area:
    - Logo image
    - Description text
    - Social media links (horizontal row with separator borders)
    - Copyright text

## Computed Styles

### Footer Container
- background: #202020 (continues from donate section)
- padding: 150px 60px 40px
- margin-top: -190px
- color: #ffffff
- text-align: center

### Logo
- max-width: 150px
- margin: 0 auto 24px

### Description
- font-family: Red Hat Display
- font-size: 17px
- font-weight: 100
- color: #ffffff
- opacity: 0.8
- line-height: 25px
- max-width: 600px
- margin: 0 auto 32px

### Social Links Container
- display: flex
- justify-content: center
- align-items: center
- gap: 16px
- margin-bottom: 32px

### Social Link Icon
- width: 40px
- height: 40px
- border: 1px solid #ffffff
- border-radius: 50%
- display: flex
- align-items: center
- justify-content: center
- color: #ffffff
- transition: all 0.3s

### Social Link Hover
- background: #1a43d6
- border-color: #1745d8

### Navigation Links
- display: flex
- justify-content: center
- gap: 0
- flex-wrap: wrap

### Nav Link
- font-family: Red Hat Display
- font-size: 14px
- color: #ffffff
- opacity: 0.7
- padding: 0 16px
- border-right: 1px solid rgba(255,255,255,0.3)
- last-child: border-right none

### Copyright
- font-family: Red Hat Display
- font-size: 13px
- color: #ffffff
- opacity: 0.5
- margin-top: 32px

## Text Content
- Description: "Empowering youth through sports, wellness, financial literacy, and technology."
- Social links: Facebook, Twitter/X, Instagram, LinkedIn
- Nav links: Home, About, Programs, Impact, Events, Contact
- Copyright: "2025 Fundamental Sports Labs. All Rights Reserved."

## Responsive Behavior
- **Desktop (1440px):** Centered layout, all elements in column
- **Mobile (390px):** Same layout, just tighter spacing
