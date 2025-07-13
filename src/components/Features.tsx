
import { CheckCircle, Star, ShieldCheck } from "lucide-react"; // Example icon library

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
           From Visions to Execution with{" "}
            <span className="text-indigo-600">2NCODE</span>.
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-justify">
            2NCODE is a Software development startup specializing in digital transformation, 
            focused on building Web & Mobile softwares and optimizing business information systems.
            We help companies enhance their digital ecosystem and improve operational efficiency. 🚀
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-lg text-gray-800 font-medium">
                Tailored designs that showcase your brand.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-full">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-lg text-gray-800 font-medium">
                Secure platforms with built-in protection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="text-lg text-gray-800 font-medium">
                Exceptional performance and reliability.
              </p>
            </div>
          </div>
            <div className="mt-8 flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 group"
              >
                <span>Get Started with Us</span>
                <svg
                  className="ml-2 h-6 w-6 text-white group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17l4-4m-4 4l-4-4m4 4V3" />
                </svg>
              </a>
            </div>
        </div>

        {/* Image and Quote */}
        <div className="md:w-1/2 text-center relative">
          <div className="relative group">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/web_developerskills.jpg"
              alt="Man in front of computer working"
              className="w-full rounded-lg shadow-xl transition-transform transform group-hover:scale-105 duration-500"
            />
            {/* Quote Background */}
            <div className="absolute bottom-0 w-full bg-indigo-900/60 text-white py-4 px-6">
              <p className="text-lg font-semibold italic text-center">
                "When innovation meets expertise."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


