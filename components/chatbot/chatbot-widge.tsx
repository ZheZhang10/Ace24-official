'use client'

import React, { useEffect } from 'react';

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    const BASE_URL = "https://ace24.xyz";
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: '1SVevT9FCNREAPKteNPZncZn',
        baseUrl: BASE_URL,
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatwootWidget;
