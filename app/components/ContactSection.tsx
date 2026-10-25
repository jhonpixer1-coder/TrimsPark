import { contacts } from "../data";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-heading">
          <span className="heading-accent" />
          <h2>Send us your trim list</h2>
          <p className="sub">Email artwork or a physical sample and we will quote with a sample timeline.</p>
        </div>
        <div className="people">
          {contacts.map((contact) => (
            <div key={contact.name} className="person">
              <span className="person-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32"><circle cx="16" cy="10" r="6" /><path d="M5 28v-3a11 11 0 0 1 22 0v3z" /></svg>
              </span>
              <div className="person-info">
                <h3>{contact.name}</h3>
                <p>{contact.role}</p>
                <a href={`tel:${contact.tel.replace("-", "")}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-7-7l3-2-3-6Z" /></svg>
                  {contact.tel}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-details">
          <p className="contact-detail">
            <span className="contact-detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
            </span>
            <span><a href="mailto:info@trimspark.com">info@trimspark.com</a><span className="contact-separator">·</span><a href="https://www.trimspark.com">www.trimspark.com</a></span>
          </p>
          <p className="contact-detail">
            <span className="contact-detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            </span>
            <span>3646, Madhubag, Dokkhin Khan, Uttara, Dhaka</span>
          </p>
        </div>
      </div>
      <svg className="contact-trims-art" viewBox="0 0 390 260" role="img" aria-label="Garment trims including fabric, buttons, and thread">
        <defs>
          <linearGradient id="contact-fabric" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#087be8" /><stop offset="1" stopColor="#082f78" /></linearGradient>
          <linearGradient id="contact-thread" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd32c" /><stop offset="1" stopColor="#f5a900" /></linearGradient>
        </defs>
        <path d="m32 170 176-95 176 78-182 101z" fill="url(#contact-fabric)" />
        <path d="m65 177 118-66m-90 84 119-66m-91 84 119-66m-90 84 118-67" stroke="#3295ff" strokeWidth="3" opacity=".7" />
        <path d="m126 160 238-35" stroke="#dce8f3" strokeWidth="7" />
        <path d="m126 160 238-35" stroke="#f0b935" strokeWidth="2" strokeDasharray="5 5" />
        <ellipse cx="291" cy="87" rx="77" ry="29" fill="#eaa500" />
        <path d="M214 87v74c0 16 154 16 154 0V87" fill="url(#contact-thread)" />
        <ellipse cx="291" cy="161" rx="77" ry="28" fill="#f5b509" />
        <ellipse cx="291" cy="87" rx="30" ry="12" fill="#fff2c9" />
        <ellipse cx="291" cy="87" rx="23" ry="8" fill="#af6c11" />
        <circle cx="187" cy="187" r="33" fill="#162c43" /><circle cx="187" cy="187" r="26" fill="#28465f" />
        <circle cx="178" cy="178" r="4" fill="#0d1c2a" /><circle cx="196" cy="178" r="4" fill="#0d1c2a" /><circle cx="178" cy="196" r="4" fill="#0d1c2a" /><circle cx="196" cy="196" r="4" fill="#0d1c2a" />
        <circle cx="126" cy="207" r="14" fill="#bd8b24" /><circle cx="126" cy="207" r="10" fill="#f4d37d" /><circle cx="123" cy="204" r="2" fill="#8e6a22" /><circle cx="129" cy="210" r="2" fill="#8e6a22" />
      </svg>
    </section>
  );
}
