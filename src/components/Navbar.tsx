import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Initialize EmailJS
  React.useEffect(() => {
    // @ts-ignore
    if (window.emailjs) {
      // @ts-expect-error
      window.emailjs.init({
        publicKey: "dGpRJMeTZGiU2OOx5",
      });
    } else {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.onload = () => {
        // @ts-ignore
        window.emailjs.init({
          publicKey: "dGpRJMeTZGiU2OOx5",
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  const SendMail = async () => {
    // @ts-expect-error
    if (!window.emailjs) {
      alert("Email service not loaded yet. Please try again in a moment.");
      return;
    }
    try {
      // @ts-expect-error
      await window.emailjs.send("service_pyk0vt1", "template_uidomc9", {
        from_name: formData.name,
        email_id: formData.email,
        subject_id: formData.subject,
        message_id: formData.message,
      });
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/assets/Logo.png" alt="Logo" className="h-10 w-32" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#process" className="text-gray-600 hover:text-indigo-600">Process</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-lg">
              Demandez un Devis
            </button>
          </div>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
                <h2 className="text-2xl mb-6 text-gray-800 font-semibold">Demandez un Devis</h2>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    // Simple validation
                    if (!formData.name.trim()) {
                      alert("Please enter your full name.");
                      return;
                    }
                    if (!formData.email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
                      alert("Please enter a valid email address.");
                      return;
                    }
                    if (!formData.subject.trim()) {
                      alert("Please enter a subject.");
                      return;
                    }
                    if (!formData.message.trim()) {
                      alert("Please enter your message.");
                      return;
                    }
                    await SendMail();
                    setIsOpen(false);
                  }}
                >
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Joe Smith"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      id="email_id"
                      type="email"
                      placeholder="joe@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Name of your Company</label>
                    <input
                      id="subject_id"
                      type="text"
                      placeholder="2NCODE"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Describe your project</label>
                    <textarea
                      id="message_id"
                      placeholder="I would like to create a web application for my business..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600 transition-colors shadow-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#process" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Process</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
