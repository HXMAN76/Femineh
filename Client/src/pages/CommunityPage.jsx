import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommunityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-4">
      {/* Back Button */}
      <div className="w-full max-w-3xl mb-4">
        <button
          onClick={() => navigate('/homepage')}
          className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
        >
          Back to Home
        </button>
      </div>

      {/* Header */}
      <header className="w-full max-w-3xl bg-gray-900 shadow-md rounded-lg p-4 mb-8">
        <h1 className="text-2xl font-bold text-white text-center">Pregnancy Helpline Community</h1>
        <p className="text-gray-300 text-center mt-2">
          A safe space for women to connect, share, and support each other during pregnancy.
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl bg-gray-900 shadow-md rounded-lg p-4 space-y-8">
        {/* Announcement Section */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Announcements</h2>
          <p className="text-gray-300">
            Join our upcoming webinar on prenatal care this weekend. Register now to secure your spot!
          </p>
        </section>

        {/* Interaction Section */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Community Posts</h2>

          {/* Post Example with Replies */}
          <div className="bg-gray-800 p-4 rounded-lg space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center">
                A
              </div>
              <h3 className="font-bold text-white">Anita Sharma</h3>
            </div>
            <p className="text-gray-300">
              Hi everyone! I'm in my second trimester and looking for tips on managing morning sickness. Any advice?
            </p>
            <div className="space-y-2 ml-6 mt-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <h4 className="text-sm font-bold text-white">Sanya Gupta</h4>
                <p className="text-gray-300 text-sm">
                  Ginger tea worked wonders for me! Also, try eating smaller meals more frequently.
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <h4 className="text-sm font-bold text-white">Neha Das</h4>
                <p className="text-gray-300 text-sm">
                  Staying hydrated is key. Lemon water or mint can also help with nausea!
                </p>
              </div>
            </div>
            <button className="text-white font-medium hover:underline">Reply</button>
          </div>

          {/* Another Post Example with Replies */}
          <div className="bg-gray-800 p-4 rounded-lg space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-black font-bold rounded-full flex items-center justify-center">
                M
              </div>
              <h3 className="font-bold text-white">Meera Kapoor</h3>
            </div>
            <p className="text-gray-300">
              Does anyone have recommendations for prenatal yoga classes in Chennai? Thank you!
            </p>
            <div className="space-y-2 ml-6 mt-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <h4 className="text-sm font-bold text-white">Priya Nair</h4>
                <p className="text-gray-300 text-sm">
                  I highly recommend "Yoga Bliss" in T. Nagar. They specialize in prenatal yoga and are amazing!
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <h4 className="text-sm font-bold text-white">Radhika Iyer</h4>
                <p className="text-gray-300 text-sm">
                  You can try "Mother's Care Yoga" near Adyar. They have certified trainers for prenatal sessions.
                </p>
              </div>
            </div>
            <button className="text-white font-medium hover:underline">Reply</button>
          </div>
        </section>

        {/* Raise a Query Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
            Raise a Query?
          </button>
        </div>
      </main>
    </div>
  );
};

export default CommunityPage;

