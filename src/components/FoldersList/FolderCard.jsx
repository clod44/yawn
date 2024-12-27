import { Card, Text, Flex, Button, TextField, IconButton } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import * as Collapsible from "@radix-ui/react-collapsible";
import Emoji from "react-emoji-render";
import { useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
import EmojiPicker from "../EmojiPicker";




import styles from './FolderCard.module.css';
const FolderCard = ({
    _folder = {},
    ...props
}) => {
    const [folder, setFolder] = useState(_folder);
    const [openCollapsible, setOpenCollapsible] = useState(false);

    const handleEmojiSelect = (emojiObject) => {
        console.log(emojiObject);
        setFolder({ ...folder, emoji: emojiObject.unicode });
    };

    return (
        <>

            <Collapsible.Root
                className="CollapsibleRoot"
                open={openCollapsible}
                onOpenChange={setOpenCollapsible}
            >
                <Card variant="classic" className="shadow-lg  h-12">
                    <Flex gap="3" width={"100%"} height={"100%"} align={"center"} justify={"between"} >
                        {openCollapsible ? (
                            <div className="flex-grow">
                                <Flex gap="3" align={"center"}>
                                    <Emoji
                                        text={folder?.emoji ?? "📂"}
                                        className="text-md"
                                        style={{
                                            textShadow: "0 0 1em rgba(255,255,255, 1)",
                                        }}
                                    />
                                    <TextField.Root
                                        placeholder="Folder title"
                                        className="flex-grow animate-in fade-in"
                                        value={folder?.title || "Folder"}
                                        onChange={(e) => setFolder({ ...folder, title: e.target.value })}
                                    />
                                </Flex>
                            </div>
                        ) : (
                            <Link
                                to="/"
                                className="flex-grow"
                            >
                                <Flex gap="3" align={"center"}>
                                    <Emoji
                                        text={folder?.emoji ?? "📂"}
                                        className="text-md"
                                        style={{
                                            textShadow: "0 0 1em rgba(255,255,255, 1)",
                                        }}
                                    />
                                    <Text as="div" size="3" weight="bold">
                                        {folder?.title || "Folder"}
                                    </Text>
                                </Flex>
                            </Link>
                        )}


                        <Flex gap="2" align={"center"}>
                            <Collapsible.Trigger asChild>
                                <IconButton size={"2"} variant={openCollapsible ? "classic" : "soft"}>
                                    {openCollapsible ? <FaSave /> : <FaPen />}
                                </IconButton>
                            </Collapsible.Trigger>
                        </Flex>
                    </Flex>
                </Card>
                <Collapsible.Content
                    className={`${styles.CollapsibleContent}`}
                >
                    <Card variant="classic" className="shadow-lg mx-5 rounded-t-none -translate-y-2 pt-4" >
                        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                    </Card>
                </Collapsible.Content>
            </Collapsible.Root >
        </>
    );
};

export default FolderCard;
