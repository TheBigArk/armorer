
import { useApp } from '../app-context';

export function Footer() {
  const { status } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer class="home-footer">
      <p class={`offline-status status-${status.kind}`}>
        <span aria-hidden="true" class="status-dot" />
        {status.label}
      </p>
      <span class="visually-hidden" aria-live="polite" aria-atomic="true">
        {status.kind === 'available' ? 'Scripture is available offline' :
          status.kind === 'updating' ? 'Offline scripture is updating' :
          status.kind === 'saving' ? 'Scripture is being saved for offline use' :
          status.saved === status.total ? 'Offline startup is incomplete' :
          'Offline scripture is incomplete'}
      </span>

      <div style={{
        textAlign: 'center',
        padding: '24px 16px 16px',
        fontSize: '13px',
        lineHeight: '1.8'
      }}>
        <div>King James Version (1769) · Public Domain</div>
        <nav aria-label="Footer links">
          <a href="https://thefreeholybible.com/sitemap.xml">
            Sitemap
          </a>
          {' · '}
          <a href="https://sites.google.com/view/the-free-holy-bible-privacy/">
            Privacy Policy
          </a>
          {' · '}
          <a href="mailto:arc.logos@proton.me">
            Email
          </a>
        </nav>
        <div>© {year} The Holy Bible</div>
      </div>
    </footer>
  );
}
