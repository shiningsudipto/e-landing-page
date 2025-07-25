import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { navLinks } from "@/lib/constants/lists";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Return Policy", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Shipping Info", href: "#" },
];

const inlineFooterLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks = [
  { icon: <Facebook className="size-5" />, href: "#" },
  { icon: <Twitter className="size-5" />, href: "#" },
  { icon: <Instagram className="size-5" />, href: "#" },
  { icon: <Linkedin className="size-5" />, href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              TechStore
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for premium technology products. We bring you
              the latest innovations in tech with exceptional quality and
              service.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-primary-foreground/60 hover:text-white transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  support@techstore.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  +880 17111111111
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">
                  1 Number C&B Pol
                  <br />
                  Barishal, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 TechStore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {inlineFooterLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-primary-foreground/60 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
