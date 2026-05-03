export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          DevOps Incident Response
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Automated Incident Response<br />
          <span className="text-[#58a6ff]">Playbook Execution</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Trigger predefined playbooks from your monitoring tools, auto-assign tasks, and send Slack or email notifications — all while tracking progress in real-time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $49/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Webhook Triggers', desc: 'Connect PagerDuty, Datadog, or any monitoring tool via webhooks.' },
            { icon: '📋', title: 'Playbook Steps', desc: 'Define multi-step runbooks with conditional branching and auto-assignments.' },
            { icon: '🔔', title: 'Instant Notifications', desc: 'Alert your team on Slack and email the moment an incident fires.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-bold text-white">$49</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate incident response at scale.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited playbooks',
              'Webhook integrations (PagerDuty, Datadog, etc.)',
              'Slack & email notifications',
              'Real-time progress tracking',
              'Task auto-assignment',
              'Audit log & incident history',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started — $49/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I trigger a playbook from my monitoring tool?',
              a: 'Each playbook gets a unique webhook URL. Point your monitoring tool (PagerDuty, Datadog, Grafana, etc.) at that URL and the playbook fires automatically when an alert triggers.',
            },
            {
              q: 'Can I customize who gets notified for each incident?',
              a: 'Yes. Each playbook step supports configurable assignees and notification channels. You can route alerts to specific Slack channels or email groups based on severity or service.',
            },
            {
              q: 'Is there a free trial?',
              a: 'We offer a 14-day money-back guarantee. If the tool does not fit your workflow, contact support within 14 days for a full refund — no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Incident Playbook Automator. All rights reserved.
      </footer>
    </main>
  )
}
