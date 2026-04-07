# Donation CTA Section Specification

## Overview
- **Target file:** `src/components/DonateSection.tsx`
- **Interaction model:** Static

## DOM Structure
- `section#donate`
  - Dark background container with rounded top corners
  - Left column: child image
  - Right column: text + CTA button
  - Large decorative "200" number
  - Rotated accent label

## Computed Styles

### Section Container
- background: #202020
- border-radius: 40px 40px 0 0
- padding: 100px 60px
- position: relative
- overflow: hidden
- display: flex
- align-items: center
- min-height: 600px

### Large "200" Number
- font-family: Barlow Condensed
- font-size: 200px
- font-weight: 700
- color: #ffffff
- opacity: 0.05
- position: absolute
- top: 50%
- left: 50%
- transform: translate(-50%, -50%)

### Child Image
- position: absolute
- bottom: 0
- left: -140px
- z-index: 999
- max-width: 400px

### Content Column
- margin-left: auto
- max-width: 50%
- position: relative
- z-index: 2

### h4 (Subheading)
- font-family: Red Hat Display
- font-size: 20px
- color: #ffffff
- opacity: 0.6
- font-weight: 300

### h2 (decorative accent)
- font-family: Barlow Condensed
- font-size: 80px
- font-weight: 700
- color: #ffffff

### Paragraph
- font-family: Red Hat Display
- font-size: 17px
- color: #ffffff
- font-weight: 300
- line-height: 28px
- opacity: 0.8

### h5 (Rotated label)
- font-family: bon-vivant
- font-size: 24px
- color: #F4767C
- transform: rotate(-15deg)
- position: absolute
- right: 60px

### "Donate Now" Button
- background: #F4767C
- color: #ffffff
- padding: 15px 40px
- border-radius: 9999px
- font-size: 16px
- font-weight: 600
- display: inline-flex
- align-items: center
- gap: 8px
- margin-top: 24px
- Heart icon inline

## Assets
- Child image: `/images/child.png`

## Text Content (verbatim)
- Large number: "200" (decorative, very faint)
- h4: "Your support helps us reach"
- h2: "MORE YOUTH"
- p: "Every dollar brings a young athlete closer to training, mentorship, and life skills they deserve. Join us in building stronger futures."
- h5: "Give Hope" (rotated accent)
- Button: "Donate Now" with heart icon → href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"

## Responsive Behavior
- **Desktop (1440px):** Child image left, text right
- **Tablet (768px):** Child image hidden or smaller, text centered
- **Mobile (390px):** No child image, text full-width, padding reduced
- **Breakpoint:** ~768px
