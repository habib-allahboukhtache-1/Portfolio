import logoSrc from '../assets/logo.png'

export default function KHBLogo({ size = 48, className = '' }) {
  return (
    <img
      src={logoSrc}
      alt="KHB Logo"
      style={{ width: size, height: size * 0.6, objectFit: 'contain' }}
      className={className}
    />
  )
}
