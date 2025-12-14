'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-[#8B4789] dark:text-pink-200 font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-2xl border-2 border-[#FFB6C1] dark:border-pink-700 bg-white/50 dark:bg-black/30 text-[#8B4789] dark:text-pink-100 focus:outline-none focus:border-[#FF69B4] dark:focus:border-pink-500 transition-colors"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[#8B4789] dark:text-pink-200 font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-2xl border-2 border-[#FFB6C1] dark:border-pink-700 bg-white/50 dark:bg-black/30 text-[#8B4789] dark:text-pink-100 focus:outline-none focus:border-[#FF69B4] dark:focus:border-pink-500 transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[#8B4789] dark:text-pink-200 font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-2xl border-2 border-[#FFB6C1] dark:border-pink-700 bg-white/50 dark:bg-black/30 text-[#8B4789] dark:text-pink-100 focus:outline-none focus:border-[#FF69B4] dark:focus:border-pink-500 transition-colors resize-none"
          placeholder="Let's chat over a virtual coffee! ☕"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-8 py-3 bg-[#FF69B4] dark:bg-pink-500 text-white rounded-full hover:bg-[#D291BC] dark:hover:bg-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending... 💌' : status === 'success' ? 'Sent! ✨' : 'Send Message 💌'}
      </button>

      {status === 'success' && (
        <p className="text-center text-[#FF69B4] dark:text-pink-400 font-medium">
          Thanks for reaching out! I'll get back to you soon! 💖
        </p>
      )}
    </form>
  );
}
