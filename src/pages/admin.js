import React, { useState, useEffect } from 'react';
import { Edit3, Save, AlertCircle, CheckCircle } from 'lucide-react';

// Helper component for input fields
const ContentInput = ({ label, id, value, onChange, section, field }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(section, field, e.target.value)}
      className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition duration-150 ease-in-out"
    />
  </div>
);

const AdminPage = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Fetch initial content
  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetch('/api/content');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        console.error("Failed to fetch content:", err);
        setError(err.message || 'Failed to load content. Make sure data/content.json exists and the API is running.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchContent();
  }, []);

  const handleInputChange = (section, field, value) => {
    setContent(prevContent => ({
      ...prevContent,
      [section]: {
        ...prevContent[section],
        [field]: value,
      },
    }));
  };

  const handleSaveContent = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');
    setSuccessMessage('');
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // In a real app, add authentication headers here
          // 'X-Admin-Secret': 'YOUR_SUPER_SECRET_KEY'
        },
        body: JSON.stringify(content),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setSuccessMessage(result.message || 'Content saved successfully!');
      // Optionally re-fetch content to confirm, though optimistic update is usually fine
      // setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3s
    } catch (err) {
      console.error("Failed to save content:", err);
      setError(err.message || 'Failed to save content.');
      // setTimeout(() => setError(''), 5000); // Clear message after 5s
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white p-4">
        <div className="animate-pulse text-xl">Loading content editor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8 font-inter">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="flex items-center mb-8">
          <Edit3 size={32} className="text-indigo-400 mr-3" />
          <h1 className="text-3xl font-bold text-gray-100">Content Editor</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-700 text-red-300 rounded-lg flex items-center">
            <AlertCircle size={20} className="mr-2" />
            <span>{error}</span>
          </div>
        )}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-700 text-green-300 rounded-lg flex items-center">
            <CheckCircle size={20} className="mr-2" />
            <span>{successMessage}</span>
          </div>
        )}

        {content ? (
          <form onSubmit={handleSaveContent}>
            {/* Homepage Content Section */}
            <section className="mb-10 p-6 bg-gray-700/50 rounded-lg border border-gray-600">
              <h2 className="text-2xl font-semibold text-indigo-300 mb-6">Page 1</h2>
              <ContentInput
                label="Header Top Text"
                id="headerTopText"
                value={content.page1?.headerTopText || ''}
                onChange={handleInputChange}
                section="page1"
                field="headerTopText"
              />
              <ContentInput
                label="Header Text"
                id="headerText"
                value={content.page1?.headerText || ''}
                onChange={handleInputChange}
                section="page1"
                field="headerText"
              />
              <ContentInput
                label="header Bottom Text"
                id="headerBottomText"
                value={content.page1?.headerBottomText || ''}
                onChange={handleInputChange}
                section="page1"
                field="headerBottomText"
              />
              <ContentInput
                label="Button Text"
                id="ctaButtonText"
                value={content.page1?.ctaButtonText || ''}
                onChange={handleInputChange}
                section="page1"
                field="ctaButtonText"
              />
              <ContentInput
                label="whatsApp number"
                id="headerBottomText"
                value={content.page1?.whatsapp || ''}
                onChange={handleInputChange}
                section="page1"
                field="whatsapp"
              />
            </section>

            {/* About Page Content Section */}
            <section className="mb-10 p-6 bg-gray-700/50 rounded-lg border border-gray-600">
              <h2 className="text-2xl font-semibold text-indigo-300 mb-6">About Page</h2>
              <ContentInput
                label="Heading"
                id="aboutHeading"
                value={content.aboutPage?.heading || ''}
                onChange={handleInputChange}
                section="aboutPage"
                field="heading"
              />
              <div className="mb-6">
                <label htmlFor="aboutBio" className="block text-sm font-medium text-gray-300 mb-1">
                  Bio
                </label>
                <textarea
                  id="aboutBio"
                  name="aboutBio"
                  rows="4"
                  value={content.aboutPage?.bio || ''}
                  onChange={(e) => handleInputChange('aboutPage', 'bio', e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition duration-150 ease-in-out"
                />
              </div>
            </section>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={20} className="mr-2" />
                    Save Content
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          !error && <p className="text-center text-gray-400">No content loaded or content structure is unexpected.</p>
        )}
        <p className="mt-8 text-xs text-center text-gray-500">
          Note: This admin panel writes to a local JSON file. Changes might not persist on all deployment platforms.
          For production, consider a database or headless CMS.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;