import { Card, Text, Flex, Button, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import FolderCardEmojiPicker from "./FolderCardEmojiPicker";
import * as Collapsible from "@radix-ui/react-collapsible";
import Emoji from "react-emoji-render";
import { useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";





import styles from './FolderCard.module.css';
const FolderCard = ({
    _folder = {},
    ...props
}) => {
    const [folder, setFolder] = useState(_folder);
    const [openCollapsible, setOpenCollapsible] = useState(false);

    const handleEmojiSelect = (emojiObject) => {
        console.log(emojiObject);
        setFolder({ ...folder, emoji: emojiObject.emoji });
    };

    return (
        <>

            <Collapsible.Root
                className="CollapsibleRoot"
                open={openCollapsible}
                onOpenChange={setOpenCollapsible}
            >
                <Card variant="classic" className="shadow-lg">
                    <Flex gap="3" align={"center"} justify={"between"} >
                        <Link
                            to="/"
                            className="flex-grow"
                        >
                            <Flex gap="3" align={"center"} >
                                <Emoji
                                    text={folder?.emoji ?? "📂"}
                                    className="text-md"
                                    style={{
                                        textShadow: "0 0 1em rgba(255,255,255, 1)",
                                    }}
                                />
                                <Text as="div" size="3" weight="bold">
                                    Quick start
                                </Text>
                            </Flex>
                        </Link>

                        <Flex gap="2" align={"center"}>
                            <Collapsible.Trigger asChild>
                                <Button size={"1"} variant={openCollapsible ? "classic" : "soft"}>
                                    {openCollapsible ? <FaSave /> : <FaPen />}
                                </Button>
                            </Collapsible.Trigger>
                        </Flex>
                    </Flex>
                </Card>
                <Collapsible.Content
                    className={`${styles.CollapsibleContent}`}
                >
                    <Card variant="classic" className="shadow-lg mx-5 rounded-t-none -translate-y-2 pt-4" >
                        <Flex gap="3" align={"center"} width={"100%"}>
                            <TextField.Root
                                placeholder="School notes"
                                className="flex-grow"
                            >
                                <TextField.Slot>
                                    Title:
                                </TextField.Slot>
                            </TextField.Root>
                            <FolderCardEmojiPicker
                                handleEmojiSelect={handleEmojiSelect}
                                defaultEmoji={folder?.emoji ?? "📂"}
                            />
                        </Flex>
                    </Card>
                </Collapsible.Content>
            </Collapsible.Root >
        </>
    );
};

export default FolderCard;
