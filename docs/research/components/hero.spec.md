# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** Static + CSS cloud animation

## DOM Structure
- `section#hero-sec` — full viewport height, relative
  - Cloud background layer (absolutely positioned at bottom, repeating animation)
  - Content container (centered, z-index above clouds)
    - `h4`: "Empowering the Future"
    - `h1`: "LEADERS of tomorrow"
    - `p`: "Through Sports, Wellness, and Technology"
    - Button group:
      - "Join Now!" button (primary)
      - "Donate" button (outline)
  - Hero image (absolutely positioned right side)

## Computed Styles

### Section Container
- position: relative
- min-height: 100vh
- overflow: hidden
- display: flex
- align-items: center
- padding: 0 60px
- padding-top: 100px (space for fixed header)
- background: #ffffff

### Cloud Background Layer
- position: absolute
- bottom: 0
- left: 0
- width: 100%
- height: ~200px
- background-image: url(/images/cloud-1.png)
- background-repeat: repeat-x
- background-position: 0 bottom
- background-size: auto 100%
- animation: moveClouds 60s linear infinite
- z-index: 1

### h4 (Subheading)
- font-family: bon-vivant
- font-size: 48px (desktop), 36px (1366px), 32px (1200px), 24px (1000px)
- font-weight: 400
- color: #F4767C
- line-height: 1.2
- margin-bottom: 0

### h1 (Main Heading)
- font-family: Barlow Condensed
- font-size: 160px (desktop), 130px (1366px), 100px (1000px)
- font-weight: 700
- color: #202020
- text-transform: uppercase
- line-height: 1
- margin-top: 0

### p (Subtitle)
- font-family: Red Hat Display
- font-size: 20px
- font-weight: 300
- color: #868686
- margin-top: 16px
- margin-bottom: 32px

### "Join Now!" Button
- background: #F4767C
- color: #ffffff
- padding: 15px 30px
- border-radius: 9999px
- font-size: 16px
- font-weight: 600
- font-family: Red Hat Display
- border: 1px solid #F4767C
- transition: all 0.5s
- cursor: pointer

### "Donate" Button
- background: transparent
- color: #F4767C
- padding: 15px 30px
- border-radius: 9999px
- font-size: 16px
- font-weight: 600
- font-family: Red Hat Display
- border: 1px solid #F4767C
- transition: all 0.5s
- margin-left: 16px

### Hero Image
- position: absolute
- right: 0
- bottom: 0
- max-width: 50%
- z-index: 2

## States & Behaviors

### Cloud Animation
- CSS keyframes `moveClouds`: translates background-position from 0 to 1000px over 60s, linear, infinite
- Already defined in globals.css

### Button Hover
- "Join Now!": background darkens, scale(1.02)
- "Donate": background fills with #F4767C, text becomes white

## Assets
- Cloud: `/images/cloud-1.png`
- Hero image: `/images/hero-image.png`

## Text Content (verbatim)
- h4: "Empowering the Future"
- h1: "LEADERS of tomorrow"
- p: "Through Sports, Wellness, and Technology"
- Button 1: "Join Now!" → href="/join"
- Button 2: "Donate" → href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19257"

## Responsive Behavior
- **Desktop (1440px):** Two-column — text left, hero image right, h1 at 160px
- **Tablet (768px):** Text centered, hero image below or smaller, h1 ~80px
- **Mobile (390px):** Full-width stacked, h1 ~50px, hero image 80% width centered below
- **Breakpoint:** Layout shifts at ~1000px
