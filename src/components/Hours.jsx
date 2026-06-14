
/**
 * Hours & Location — Exact per brief.
 * Two-column clean layout.
 * Phone is click-to-call (tel:).
 * Simple Google Maps embed for the address.
 */

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9:30 AM–7:00 PM' },
  { day: 'Wednesday', time: '9:30 AM–7:00 PM' },
  { day: 'Thursday', time: '9:30 AM–1:00 PM' },
  { day: 'Friday', time: '9:30 AM–7:00 PM' },
  { day: 'Saturday', time: '9:30 AM–7:00 PM' },
  { day: 'Sunday', time: '9:30 AM–5:00 PM' },
];

const Hours = () => {
  return (
    <section id="hours" className="py-20 border-b border-[var(--border)]">
      <div className="container">
        <div className="reveal mb-10">
          <div className="eyebrow">Plan Your Visit</div>
          <h2 className="serif mt-3">Hours &amp; Location</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Hours */}
          <div className="reveal">
            <div className="uppercase tracking-[3px] text-xs text-[var(--text-muted)] mb-4">OPENING HOURS</div>

            <table className="w-full text-sm">
              <tbody className="divide-y divide-[var(--border)]">
                {hours.map((row, i) => (
                  <tr key={i}>
                    <td className="py-[11px] pr-6 font-medium tracking-tight">{row.day}</td>
                    <td className={`py-[11px] text-[var(--text-muted)] ${row.time === 'Closed' ? 'italic' : ''}`}>
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 text-xs text-[var(--text-muted)]">
              Appointments recommended. Walk-ins welcome when available.
            </div>
          </div>

          {/* Location + contact */}
          <div className="reveal">
            <div className="uppercase tracking-[3px] text-xs text-[var(--text-muted)] mb-4">LOCATION</div>

            <div>
              <div className="font-medium tracking-tight">Kieu's Salon</div>
              <div className="mt-1 text-[var(--text-muted)]">1189 N Main St<br />Randolph, MA 02368</div>

              <a
                href="tel:+17819860112"
                className="mt-3 inline-flex items-center gap-2 text-base font-medium hover:text-[#fcba03] transition-colors"
              >
                (781) 986-0112
                <span className="text-xs text-[var(--text-muted)]">(tap to call)</span>
              </a>
            </div>

            {/* Google Maps embed — simple &amp; functional */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-[var(--border)] aspect-video md:aspect-[16/10] bg-[var(--surface-alt)]">
              <iframe
                title="Kieu's Salon location map"
                src="https://www.google.com/maps?q=1189+N+Main+St,+Randolph,+MA+02368&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 text-[10px] text-[var(--text-muted)]/70 tracking-wide">
              There's plenty of parking in our shopping center parking lot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
