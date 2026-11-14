import { useEffect, useState } from "react";

export const AccessibilityPanel = () => {
  const [visible, setVisible] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [translateLoaded, setTranslateLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    document.documentElement.classList.toggle("focus-mode", focusMode);
  }, [highContrast, focusMode]);

  useEffect(() => {
    if (visible && !translateLoaded) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
      setTranslateLoaded(true);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "id", includedLanguages: "en,id" },
        "google_translate_element"
      );
    };
  }, [visible]);

  const speakText = () => {
    const selectedText = window.getSelection().toString() || document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = "id-ID";

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <>
      {/* Tombol Gambar Melayang */}
    <button
  onClick={() => setVisible(!visible)}
  className="fixed bottom-5 right-5 z-50 p-0 rounded-full shadow-lg hover:scale-105 transition-transform"
  aria-label="Accessibility Controls"
  title="Aksesibilitas"
>
  <img
    src="/img/icons/accessibility.png"
    alt="Accessibility"
    className="w-12 h-12 object-contain"
  />
</button>

{visible && (
  <div className="fixed bottom-20 right-5 z-50 bg-pink-200 text-black p-4 rounded-lg shadow-lg w-64 space-y-3 text-sm">
    <button
      onClick={() => setHighContrast(!highContrast)}
      className="w-full px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900"
    >
      High Contrast: {highContrast ? "ON" : "OFF"}
    </button>

    {!speaking ? (
      <button
        onClick={speakText}
        className="w-full px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-900"
      >
        Text to Speech
      </button>
    ) : (
      <button
        onClick={stopSpeech}
        className="w-full px-4 py-2 bg-blue-800 text-white rounded hover:bg-red-800"
      >
        STOP
      </button>
          )}

          <div id="google_translate_element" />
        </div>
      )}
    </>
  );
};
