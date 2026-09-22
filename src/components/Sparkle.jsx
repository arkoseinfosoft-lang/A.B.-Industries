export default function Sparkle({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 2C12.6 7.2 14 9 19 9.6C14 10.2 12.6 12 12 17.2C11.4 12 10 10.2 5 9.6C10 9 11.4 7.2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}
