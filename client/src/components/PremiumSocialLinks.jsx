import { socialLinks } from '../data/siteInfo'

const iconMap = {
  TikTok: '/images/tiktalk.png',
  Facebook: '/images/facebook.png',
  Instagram: '/images/instagram.jpg',
}

export default function PremiumSocialLinks({ showLabels = false, size = 18, iconSize = 18, style = {} }) {
  const buttonStyleByLabel = {
    TikTok: {
      background: 'linear-gradient(145deg, #111827, #000000)',
      boxShadow: '0 16px 34px rgba(0,0,0,0.28)',
    },
    Facebook: {
      background: 'linear-gradient(145deg, #1877F2, #1458b3)',
      boxShadow: '0 16px 34px rgba(24,119,242,0.28)',
    },
    Instagram: {
      background: 'linear-gradient(145deg, #f58529 0%, #dd2a7b 48%, #8134af 100%)',
      boxShadow: '0 16px 34px rgba(221,42,123,0.28)',
    },
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: showLabels ? '0.8rem' : '0.65rem',
        ...style,
      }}
    >
      {socialLinks.map(({ label, href }) => {
        const iconSrc = iconMap[label]

        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit FaithFound Lab on ${label}`}
            title={label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: showLabels ? '0.35rem' : 0,
              minWidth: 'unset',
              height: 'auto',
              padding: 0,
              borderRadius: 0,
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              transition: 'opacity var(--transition), transform var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.opacity = '0.9'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.opacity = '1'
            }}
          >
            <img
              src={iconSrc}
              alt=""
              aria-hidden="true"
              style={{
                width: iconSize,
                height: iconSize,
                borderRadius: 0,
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                filter: 'none',
                backgroundColor: 'transparent',
              }}
            />
            {showLabels && (
              <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.01em' }}>
                {label}
              </span>
            )}
          </a>
        )
      })}
    </div>
  )
}