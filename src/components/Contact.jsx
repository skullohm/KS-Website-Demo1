/**
 * Contact — Simple tap-to-call card (replaced previous Web3Forms form).
 * The entire card is a phone link. Hover provides the glowing gold lift/border treatment.
 */

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-xl">
        <div className="reveal text-center mb-8">
          <div className="eyebrow">Let’s Connect</div>
          <h2 className="serif mt-3">Book an Appointment</h2>
        </div>

        {/* Tap-to-call message card with glowing gold hover treatment */}
        <a
          href="tel:+17819860112"
          className="service-card group block mx-auto max-w-lg rounded-2xl p-10 text-center no-underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#fcba03]"
          aria-label="Call Kieu's Salon at 781-986-0112 to reserve your appointment"
        >
          <p className="text-[17px] leading-relaxed text-[var(--text)]">
            We'd love to hear from you! Please call us at <span className="font-semibold text-[#fcba03] group-hover:underline decoration-[#fcba03]/60">781-986-0112</span> to reserve your appointment.
          </p>

          <div className="mt-6 text-xs uppercase tracking-[3px] text-[#fcba03] transition-all group-hover:tracking-[4px] group-hover:text-[#fcba03]">
            TAP OR CLICK TO CALL
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
