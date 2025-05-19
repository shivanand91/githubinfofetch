import React, { useState } from 'react';

const Github = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUser(null);
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (!res.ok) throw new Error('User not found');
            const data = await res.json();
            setUser(data);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex flex-col items-center pt-16 font-sans">
            <form
                onSubmit={fetchUser}
                className="bg-white p-8 rounded-2xl shadow-lg flex gap-3 mb-8"
            >
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-base outline-none w-56"
                    required
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white border-none rounded-lg px-5 py-2 text-base cursor-pointer font-bold"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {error && (
                <div className="text-red-600 mb-5">{error}</div>
            )}
            {user && (
                <div className="bg-white rounded-2xl shadow-lg p-8 min-w-[340px] flex flex-col items-center gap-4">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-30 h-30 rounded-full border-4 border-purple-700 mb-3"
                    />
                    <h2 className="m-0 text-gray-800 text-2xl font-semibold">{user.name || user.login}</h2>
                    <p className="text-gray-600 m-0">{user.bio}</p>
                    <div className="flex gap-6 mt-3">
                        <div className="text-center">
                            <strong>{user.public_repos}</strong>
                            <div className="text-gray-500 text-sm">Repos</div>
                        </div>
                        <div className="text-center">
                            <strong>{user.followers}</strong>
                            <div className="text-gray-500 text-sm">Followers</div>
                        </div>
                        <div className="text-center">
                            <strong>{user.following}</strong>
                            <div className="text-gray-500 text-sm">Following</div>
                        </div>
                    </div>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-purple-700 font-bold hover:underline"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Github;
