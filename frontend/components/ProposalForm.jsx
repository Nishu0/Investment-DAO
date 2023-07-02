import React, { useState } from 'react';

function ProposalForm() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [methodology, setMethodology] = useState('');
    const [conclusion, setConclusion] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the necessary actions with the form data
        // For example, make an API request to submit the proposal
        // You can access the form data using the state variables (title, summary, methodology, conclusion, walletAddress)
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="title" className="block font-medium mb-2">
                    Proposal Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="summary" className="block font-medium mb-2">
                    Summary
                </label>
                <textarea
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="methodology" className="block font-medium mb-2">
                    Methodology
                </label>
                <textarea
                    id="methodology"
                    value={methodology}
                    onChange={(e) => setMethodology(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="conclusion" className="block font-medium mb-2">
                    Conclusion
                </label>
                <textarea
                    id="conclusion"
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="walletAddress" className="block font-medium mb-2">
                    Wallet Address or ENS name
                </label>
                <input
                    type="text"
                    id="walletAddress"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit Proposal
                </button>
            </div>
        </form>
    );
}

export default ProposalForm;
