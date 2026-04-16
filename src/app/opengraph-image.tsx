import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fundamental Sports Labs - Free Youth Sports in Los Angeles'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Coral accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#F4767C',
            display: 'flex',
          }}
        />

        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            letterSpacing: '2px',
            lineHeight: 1.1,
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          FUNDAMENTAL SPORTS LABS
        </div>

        {/* Coral divider */}
        <div
          style={{
            width: '120px',
            height: '4px',
            backgroundColor: '#F4767C',
            marginTop: '32px',
            marginBottom: '32px',
            display: 'flex',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: '#e0e0e0',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          Free Youth Sports &amp; Life Skills
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: '#999999',
            textAlign: 'center',
            marginTop: '16px',
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          Los Angeles, CA
        </div>

        {/* Website URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: 18,
            fontWeight: 400,
            color: '#F4767C',
            fontFamily: 'sans-serif',
            display: 'flex',
          }}
        >
          fundamentalsportslabs.org
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
