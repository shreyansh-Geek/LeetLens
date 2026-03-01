import React from "react"
import styled from "styled-components"

export default function GenerateButton({ 
  children = "Generate", 
  className,
  ...props 
}) {
  return (
    <Wrapper className={className}>
      <button className="btn" {...props}>
        <SparkleIcon />
        <span className="txt">{children}</span>
      </button>
    </Wrapper>
  )
}
function SparkleIcon() {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  )
}

const Wrapper = styled.div`
  .btn {
    --radius: 28px;
    --bg: #101010;

    display: inline-flex;
    align-items: center;
    gap: 10px;

    width: 100%;
    padding: 0 20px;
    height: 52px;

    border-radius: var(--radius);
    border: 1px solid rgba(255,255,255,0.12);

    background: var(--bg);
    color: #fff;

    font-family: Inter, sans-serif;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
    position: relative;
    isolation: isolate;

    transition: all .25s ease;

    /* existing shadows */
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,.2),
      inset 0 4px 10px rgba(255,255,255,.06),
      0 10px 20px rgba(0,0,0,.25);
  }

  /* 🌈 rainbow border layer */
  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      90deg,
      #6ee7ff,
      #a78bfa,
      #f472b6,
      #facc15
    );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    pointer-events: none;
  }

  /* 🌈 bottom glow */
  .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -4px;
    width: 70%;
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      rgba(110,231,255,.5),
      rgba(167,139,250,.5),
      rgba(244,114,182,.5),
      rgba(250,204,21,.5)
    );
    filter: blur(8px);
    opacity: .9;
    pointer-events: none;
  }

  .btn:hover {
    border-color: rgba(255,255,255,.25);
    box-shadow:
      inset 0 1px 1px rgba(255,255,255,.3),
      inset 0 6px 14px rgba(255,255,255,.08),
      0 14px 30px rgba(0,0,0,.35);
  }

  .icon {
    width: 18px;
    height: 18px;
    opacity: .85;
    filter: drop-shadow(0 0 4px rgba(255,255,255,.4));
    animation: flicker 2s linear infinite;
  }

  .txt {
    position: relative;
    letter-spacing: .02em;
  }

  @keyframes flicker {
    50% { opacity: .4 }
  }
`;