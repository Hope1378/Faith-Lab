export default function Logo({ size = 40, className = '', alt = 'FaithFound Lab logo' }) {
  return (
    <img
      src="/images/logo2.png"
      width={size}
      height={size}
      alt={alt}
      className={className}
      style={{ display: 'block', flexShrink: 0, objectFit: 'contain' }}
    />
  )
}
