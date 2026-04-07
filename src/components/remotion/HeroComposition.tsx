"use client";

import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from "remotion";

const sportImages = [
  "/images/urban/hero-streetball.jpg",
  "/images/action/teen-basketball.jpg",
  "/images/urban/football-play.jpg",
  "/images/action/teen-soccer.jpg",
  "/images/sports/youth-golf.jpg",
  "/images/urban/hero-track-race.jpg",
];

const sportNames = ["Streetball", "Basketball", "Football", "Soccer", "Golf", "Track"];

function ImagePanel({ src, startFrame, endFrame }: { src: string; startFrame: number; endFrame: number }) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, endFrame], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = interpolate(frame, [startFrame, startFrame + 20, endFrame - 20, endFrame], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scale = interpolate(progress, [0, 1], [1.0, 1.12]);
  const x = interpolate(progress, [0, 1], [0, -15]);

  return (
    <AbsoluteFill style={{ opacity }}>
      <Img src={src} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${scale}) translateX(${x}px)`, filter: "contrast(1.15) brightness(0.42) saturate(0.55)" }} />
    </AbsoluteFill>
  );
}

function SportBadge() {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const cycleLength = Math.floor(durationInFrames / sportNames.length);
  const currentIndex = Math.floor((frame % durationInFrames) / cycleLength);
  const localFrame = frame % cycleLength;
  const springVal = spring({ fps, frame: localFrame, config: { damping: 20, stiffness: 80 } });
  const y = interpolate(springVal, [0, 1], [25, 0]);
  const opacity = interpolate(localFrame, [0, 8, cycleLength - 12, cycleLength - 2], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", right: 60, bottom: 180, opacity, transform: `translateY(${y}px)` }}>
      <div style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.35em" }}>
        Now Playing
      </div>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 700, color: "#F4767C", textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: 2 }}>
        {sportNames[currentIndex]}
      </div>
    </div>
  );
}

// Visual-only composition — NO headline text (that's rendered as DOM)
export function HeroComposition() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const imageDuration = Math.floor(durationInFrames / sportImages.length);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0040cc" }}>
      {sportImages.map((src, i) => (
        <ImagePanel key={src} src={src} startFrame={i * imageDuration} endFrame={(i + 1) * imageDuration} />
      ))}

      {/* Gradient overlays */}
      <AbsoluteFill style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.35))" }} />
      <AbsoluteFill style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55), transparent 60%)" }} />

      {/* Coral ambient glow */}
      <div style={{ position: "absolute", bottom: -80, left: "5%", width: 500, height: 350, background: "radial-gradient(circle, rgba(244,118,124,0.12), transparent 70%)", filter: "blur(100px)" }} />

      {/* Sport badge */}
      <Sequence from={30}>
        <SportBadge />
      </Sequence>

      {/* Progress bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, backgroundColor: "rgba(255,255,255,0.08)" }}>
        <div style={{ width: `${(frame / durationInFrames) * 100}%`, height: "100%", backgroundColor: "#F4767C" }} />
      </div>
    </AbsoluteFill>
  );
}
