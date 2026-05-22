export default function AuroraBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float1 12s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-15%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float2 15s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(30,41,59,0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float3 10s ease-in-out infinite',
        }}
      />
    </div>
  )
}
