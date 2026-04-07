# Impact/Results Section Specification

## Overview
- **Target file:** `src/components/ImpactSection.tsx`
- **Interaction model:** Static

## DOM Structure
- `section#our-results-icon`
  - Section header:
    - `h4`: "Make an Impact" (decorative)
    - `h2`: "in the community" (large heading)
    - `h5`: "Our Results" (label)
    - `p`: description text
  - 4-column grid of stat cards
  - Community image below

## Computed Styles

### Section Container
- padding: 100px 60px
- max-width: 1400px
- margin: 0 auto
- text-align: center

### h4
- font-family: bon-vivant
- font-size: 48px
- color: #F4767C

### h2
- font-family: Barlow Condensed
- font-size: 80px
- font-weight: 700
- color: #202020
- text-transform: uppercase

### h5
- font-family: Red Hat Display
- font-size: 16px
- font-weight: 600
- color: #F4767C
- text-transform: uppercase
- letter-spacing: 2px

### Description
- font-family: Red Hat Display
- font-size: 17px
- color: #868686
- font-weight: 300
- max-width: 600px
- margin: 0 auto

### Stats Grid
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 30px
- margin-top: 60px

### Stat Card
- text-align: center
- padding: 30px

### Stat Icon Image
- width: ~100%
- max-width: 200px
- margin: 0 auto 16px

### Stat Number
- font-family: Barlow Condensed
- font-size: 48px
- font-weight: 700
- color: #202020

### Stat Label
- font-family: Red Hat Display
- font-size: 16px
- color: #868686
- font-weight: 400

### Community Image
- width: 100%
- max-width: 1200px
- margin: 60px auto 0
- border-radius: 20px

## Assets
- Stat 1: `/images/Youth-Empowered.png`
- Stat 2: `/images/Improved-Academics.png`
- Stat 3: `/images/Graduate-Success-Rate.png`
- Stat 4: `/images/Community-Service-Hours.png`
- Community: `/images/communit-image.png`

## Text Content (verbatim)
- h4: "Make an Impact"
- h2: "in the community"
- h5: "Our Results"
- p: "Real results from our programs—measurable change in young lives."

### Stats
1. Icon: Youth-Empowered.png, Number: "500+", Label: "Youth Empowered"
2. Icon: Improved-Academics.png, Number: "85%", Label: "Improved Academics"
3. Icon: Graduate-Success-Rate.png, Number: "95%", Label: "Graduate Success Rate"
4. Icon: Community-Service-Hours.png, Number: "10,000+", Label: "Community Service Hours"

## Responsive Behavior
- **Desktop (1440px):** 4-column grid
- **Tablet (768px):** 2-column grid
- **Mobile (390px):** 2-column grid, smaller numbers
- **Breakpoint:** ~768px
