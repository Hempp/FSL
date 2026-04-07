# Four Pillars Section Specification

## Overview
- **Target file:** `src/components/PillarsSection.tsx`
- **Interaction model:** Static (staggered vertical offset)

## DOM Structure
- `section#our-approach` — full-width
  - Section header:
    - `h4`: "FOUR PILLAR TO SUCCESS" (decorative)
    - `h5`: "Our Approach" (label)
    - Background decorative image (dream-image.png, faded)
  - 4-column grid of pillar cards
    - Cards 2 and 4 offset vertically by 150px (staggered pattern)

## Computed Styles

### Section Container
- padding: 100px 60px
- max-width: 1400px
- margin: 0 auto
- position: relative

### Section Header
- text-align: center (or left)
- margin-bottom: 60px

### h4 (Decorative)
- font-family: bon-vivant
- font-size: 48px
- color: #F4767C

### h5 (Label)
- font-family: Red Hat Display
- font-size: 16px
- font-weight: 600
- color: #F4767C
- text-transform: uppercase
- letter-spacing: 2px

### Decorative background image
- position: absolute
- opacity: 0.1 or similar
- z-index: 0

### Grid Container
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 20px
- position: relative
- z-index: 1

### Pillar Card (shared)
- border-radius: 20px
- padding: 40px 20px
- text-align: center
- position: relative

### Pillar 1 — Athletic Training
- background: #F4F8FF
- border-top: 4px solid #0052FE
- margin-top: 0

### Pillar 2 — Mental Wellness
- background: #FFF6EE
- border-top: 4px solid #FF7900
- margin-top: 150px

### Pillar 3 — Financial Literacy
- background: #EBFBF5
- border-top: 4px solid #00D17E
- margin-top: 0

### Pillar 4 — Technology Education
- background: #FFFAE6
- border-top: 4px solid #E9BB00
- margin-top: 150px

### Card Icon Image
- width: ~60px
- height: ~60px
- margin: 0 auto 20px

### Card Step Number
- font-family: Barlow Condensed
- font-size: 60px
- font-weight: 700
- opacity: 0.1
- position: absolute
- top: 10px
- right: 20px

### Card Heading
- font-family: Barlow Condensed
- font-size: 24px
- font-weight: 700
- color: #202020
- text-transform: uppercase
- margin-bottom: 12px

### Card Description
- font-family: Red Hat Display
- font-size: 15px
- font-weight: 300
- color: #868686
- line-height: 24px

## Assets
- Icon 1: `/images/01.png`
- Icon 2: `/images/02.png`
- Icon 3: `/images/03.png`
- Icon 4: `/images/04.png`
- Background: `/images/dream-image.png`

## Text Content (verbatim)

### Pillar 1
- Step: "01"
- Title: "Athletic Training"
- Desc: "Professional coaching in various sports with focus on technique, teamwork, and healthy competition"

### Pillar 2
- Step: "02"
- Title: "Mental Wellness"
- Desc: "Programs focusing on resilience, emotional intelligence, and positive mindset development."

### Pillar 3
- Step: "03"
- Title: "Financial Literacy"
- Desc: "Foundational understanding of personal finance, saving, and responsible money management."

### Pillar 4
- Step: "04"
- Title: "Technology Education"
- Desc: "Hands-on learning in digital tools and technology career pathways."

## Responsive Behavior
- **Desktop (1440px):** 4-column grid with staggered offset
- **Tablet (768px):** 2-column grid, offset reduced to 80px
- **Mobile (390px):** Single column, no offset, cards stack vertically
- **Breakpoint:** Grid collapses at ~768px to 2-col, ~520px to 1-col
