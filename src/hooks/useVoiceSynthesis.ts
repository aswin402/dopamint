import { useState, useEffect, useCallback } from 'react';

export const useVoiceSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setActiveSpeechId(null);
  }, []);

  const speak = useCallback((text: string, id: string, pitch = 1.0, rate = 1.0) => {
    if (typeof window === 'undefined') return;

    if (!('speechSynthesis' in window)) {
      // Fallback timer simulation if speech API is unavailable
      setIsSpeaking(true);
      setActiveSpeechId(id);
      setTimeout(() => {
        setIsSpeaking(false);
        setActiveSpeechId(null);
      }, 4000);
      return;
    }

    // Cancel current speech if any
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = pitch;
    utterance.rate = rate;

    // Pick best available natural voice
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium'))) || voices[0];
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setActiveSpeechId(id);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setActiveSpeechId(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setActiveSpeechId(null);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isSpeaking,
    activeSpeechId,
    speak,
    stopSpeaking,
  };
};
