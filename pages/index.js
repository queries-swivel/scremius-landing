import React from 'react';
import { Music, Users, Sparkles, Share2 } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Scremius
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            A decentralized space for musical minds to connect, create, and evolve
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-800 bg-opacity-20 p-6 rounded-lg">
            <Sparkles className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Creative Discovery</h3>
            <p className="text-purple-200">Share sonic experiments, sketches, and fragments in a serendipitous feed</p>
          </div>
          <div className="bg-purple-800 bg-opacity-20 p-6 rounded-lg">
            <Users className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Live Jam Rooms</h3>
            <p className="text-purple-200">Join curated sessions and collaborate in real-time</p>
          </div>
          <div className="bg-purple-800 bg-opacity-20 p-6 rounded-lg">
            <Share2 className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Community Owned</h3>
            <p className="text-purple-200">No ads, no data harvesting - governed by artists, for artists</p>
          </div>
          <div className="bg-purple-800 bg-opacity-20 p-6 rounded-lg">
            <Music className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Creative Challenges</h3>
            <p className="text-purple-200">Weekly prompts and collaborative experiments</p>
          </div>
        </div>

        <div className="prose prose-invert mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <div className="text-purple-200 space-y-4">
            <p>
              Inspired by Brian Eno's concept of "Scenius," we're building a space where genius emerges 
              from scene and community rather than individuals.
            </p>
            <p>
              This platform reimagines how we connect and create music together online, free from 
              corporate gatekeeping and algorithmic control.
            </p>
            <p>
              Key features include:
              • Serendipitous discovery of sonic experiments
              • Live, curated jam sessions
              • Community-driven content curation
              • Pay-what-you-want membership model
              • Built on open protocols
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Join the MVP</h3>
          <iframe
            src="https://tally.so/embed/nrJoJl"
            width="100%"
            height="300"
            frameBorder="0"
            className="mx-auto bg-purple-800 bg-opacity-20 rounded-lg"
            title="Join Scremius MVP"
          ></iframe>
        </div>

        <footer className="text-center text-purple-200">
          <p>Created with ♪ by the community, for the community</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
