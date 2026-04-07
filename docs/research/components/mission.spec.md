# Mission Section Specification

## Overview
- **Target file:** `src/components/MissionSection.tsx`
- **Interaction model:** Static

## DOM Structure
- `section#mission` — full-width, padded
  - Left column (~50%):
    - `h4`: "SHAPING FUTURES" (decorative font)
    - `h2`: "POWERING DREAMS" (large heading)
    - `h5`: "Our Mission" (label)
    - `p`: Mission paragraph text
    - Button group: "Join Now!" + "Donate"
  - Right column (~50%):
    - Large image (powerin-1.png)
    - Small decorative icon overlaid (dreamicon.png)

## Computed Styles

### Section Container
- display: flex
- align-items: center
- max-width: 1400px
- margin: 0 auto
- padding: 100px 60px
- gap: 60px

### h4 (Decorative label)
- font-family: bon-vivant
- font-size: 48px
- color: #F4767C
- font-weight: 400
- line-height: 1.2

### h2 (Main heading)
- font-family: Barlow Condensed
- font-size: 80px
- font-weight: 700
- color: #202020
- text-transform: uppercase
- line-height: 1

### h5 (Section label)
- font-family: Red Hat Display
- font-size: 16px
- font-weight: 600
- color: #F4767C
- text-transform: uppercase
- letter-spacing: 2px
- margin-bottom: 16px

### Paragraph
- font-family: Red Hat Display
- font-size: 17px
- font-weight: 300
- color: #868686
- line-height: 28px
- max-width: 90%

### Right Column Image
- width: 100%
- border-radius: 20px
- position: relative

### Dream Icon (overlay)
- position: absolute
- width: ~80px
- top: -20px or overlapping corner

## Assets
- Main image: `/images/powerin-1.png`
- Decorative icon: `/images/dreamicon.png`

## Text Content (verbatim)
- h4: "SHAPING FUTURES"
- h2: "POWERING DREAMS"
- h5: "Our Mission"
- p: "Our mission is to empower youth through sports, wellness, financial literacy, and technology helping them build confidence, leadership, and lifelong skills for a brighter future. Founded by a seasoned coach with over 15 years of experience, we create inclusive environments where young athletes from all backgrounds can thrive — both on and off the field."
- Buttons: "Join Now!" + "Donate" (same styling as hero)

## Responsive Behavior
- **Desktop (1440px):** Two columns side by side
- **Tablet (768px):** Stack columns, text first, image below
- **Mobile (390px):** Full-width stacked, heading ~40px, padding reduced
- **Breakpoint:** ~1000px
