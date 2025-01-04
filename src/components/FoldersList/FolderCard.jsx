import { Text, Flex, TextField, IconButton } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import * as Collapsible from "@radix-ui/react-collapsible";
import Emoji from "react-emoji-render";
import { useState, lazy, Suspense } from "react";
import Loading from "../Loading";
import { FaPen, FaSave } from "react-icons/fa";
import Card from "../Card";

const EmojiPicker = lazy(() => import("../EmojiPicker"));



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
                <Card className={`animate-in slide-in-from-top-96 fade-in-0 duration-500`}>
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
                                        className="flex-grow"
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
                    <Card className="mx-5 rounded-t-none -translate-y-2 pt-4" >
                        <Suspense fallback={<Loading />}>
                            <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                        </Suspense>
                    </Card>
                </Collapsible.Content>
            </Collapsible.Root >
        </>
    );
};

export default FolderCard;
