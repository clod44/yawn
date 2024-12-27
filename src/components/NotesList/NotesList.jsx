import { useState, useEffect, useTransition, useRef } from "react";
import { Grid, ScrollArea, Spinner, Flex, Text } from "@radix-ui/themes";
import NoteCard from "./NoteCard.jsx";
import { useSettings } from "../../context/SettingsContext.jsx";


const NotesList = () => {
    const { listViewType } = useSettings();
    const [notes, setNotes] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            startTransition(() => {
                setNotes(Array.from({ length: 20 }, (_, index) => index));
            });
            setLoading(false);
        }, 200);
    }, []);

    return (
        <>
            <ScrollArea>
                {(isPending || loading) ? (
                    <Flex justify={"center"} align={"center"} height={"100%"} gap="3" direction={"column"}>
                        <Spinner />
                        <Text size={"1"} className="text-neutral-500">Artificial Delay...</Text>
                    </Flex>
                ) : (
                    <Grid
                        columns={listViewType === "list" ? "1" : "2"}
                        gap="3"
                        rows="auto"
                        width="100%"
                        p={"3"}
                        className="animate-in fade-in pt-16 pb-64"
                    >
                        {notes.map((note, index) => (
                            <NoteCard key={index} />
                        ))}
                    </Grid>
                )}
            </ScrollArea>
        </>
    );
};

export default NotesList;
