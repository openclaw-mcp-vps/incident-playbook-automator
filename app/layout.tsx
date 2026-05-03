import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Playbook Automator — Automated Incident Response',
  description: 'Trigger predefined incident response playbooks with automated notifications and task assignments for DevOps teams and SREs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2984cadd-1c34-49c7-9e42-c72b6be1aed9"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
