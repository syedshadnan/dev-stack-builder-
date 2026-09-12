import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  product: ["Home", "Technologies", "Projects"],
  company: ["About", "Contact", "Careers"],
  legal: ["Privacy Policy", "Terms of Service"],
};

const socialLinks = [
  { label: "GitHub", href: "#", icon: FaGithub },
  { label: "Twitter", href: "#", icon: FaXTwitter },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-sm font-bold text-white">
                D
              </div>
              <div className="text-xl font-bold text-slate-900">
                <span>Dev</span>
                <span className="bg-linear-to-r from-pink-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                  {" "}Stack
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              PRODUCT
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              LEGAL
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="transition hover:text-slate-900">
                Privacy
              </a>
              <a href="#" className="transition hover:text-slate-900">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
