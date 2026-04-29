import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 flex flex-col items-center gap-3">
      <SocialIcons size={20} gap={6} />
    </footer>
  )
}
