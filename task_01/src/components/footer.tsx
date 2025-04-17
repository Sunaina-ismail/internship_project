export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container md:mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                © {currentYear} <span className="font-semibold">SunainaWebfolio</span>. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Designed & Built with <span className="text-primary">♥</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  