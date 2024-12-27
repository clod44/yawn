import { useCallback, useState } from 'react';
import { Button } from '@radix-ui/themes';
import EmojiPicker from 'emoji-picker-react';
import { useSettings } from '../../context/SettingsContext';

const FolderCardEmojiPicker = ({
    handleEmojiSelect = () => { },
    defaultEmoji = "📂",
}) => {
    const [open, setOpen] = useState(false);
    const memoizedHandleEmojiSelect = useCallback(
        (emojiObject) => {
            handleEmojiSelect(emojiObject);
            setOpen(false);
        },
        [handleEmojiSelect]
    );
    const { theme } = useSettings();

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                variant="soft"
            >
                {defaultEmoji}
            </Button>
            < EmojiPicker
                open={open}
                onEmojiClick={memoizedHandleEmojiSelect}
                theme={theme}
                lazyLoadEmojis={true}
                emojiStyle='native'
                width={"100%"}
                className='mt-3'
            />
        </>
    );
};

export default FolderCardEmojiPicker;
