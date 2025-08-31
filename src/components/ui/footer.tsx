import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-gray-100/50 dark:border-gray-700/50">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">💰</span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                <span className="hidden sm:inline">Budget Tracker AI</span>
                <span className="sm:hidden">Budget Tracker</span>
              </h2>
            </div>
            <p className="text-foreground leading-relaxed max-w-sm">
              Take control of your finances with smart, AI-powered insights and
              effortless expense management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Key Features
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center gap-3 text-foreground text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">🧠</span>
                </div>
                AI-powered Insights
              </div>
              <div className="flex items-center gap-3 text-foreground text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">🏷️</span>
                </div>
                Smart Categorization
              </div>
              <div className="flex items-center gap-3 text-foreground text-sm">
                <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs">📊</span>
                </div>
                Analytics Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"></div>

        {/* Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-foreground text-sm">
              © {new Date().getFullYear()} Budget Tracker AI. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium">
              <span>Made by: Mauro Duque</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
              <span>Datadoor Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
