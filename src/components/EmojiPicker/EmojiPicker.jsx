import { useEffect, useRef, useCallback } from "react";
import "emoji-picker-element";
import { useSettings } from "../../context/SettingsContext";

const EmojiPicker = ({ onEmojiSelect }) => {
    const pickerRef = useRef(null);
    const { theme } = useSettings();

    const handleEmojiSelect = useCallback(
        (event) => {
            const { emoji } = event.detail;
            if (onEmojiSelect) {
                onEmojiSelect(emoji);
            }
        },
        [onEmojiSelect]
    );

    useEffect(() => {
        const picker = pickerRef.current;
        if (picker) {
            picker.addEventListener("emoji-click", handleEmojiSelect);
        }

        return () => {
            if (picker) {
                picker.removeEventListener("emoji-click", handleEmojiSelect);
            }
        };
    }, [handleEmojiSelect]);

    return (
        <emoji-picker
            ref={pickerRef}
            class={theme}
            style={{
                width: "100%",
                height: "400px",
                "--border-radius": ".3em",
            }}
        ></emoji-picker >
    );
};

export default EmojiPicker;
