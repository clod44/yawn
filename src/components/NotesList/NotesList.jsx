import { useState, useEffect, useTransition } from "react";
import { ScrollArea, Spinner, Flex } from "@radix-ui/themes";
import VirtualList from "../VirtualList";
import NoteCard from "./NoteCard.jsx";

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        startTransition(() => {
            setNotes(Array.from({ length: 200 }, (_, index) => ({ id: index, content: `Note ${index}` })));
        });
        setLoading(false);
    }, []);

    return (
        <ScrollArea>
            {(isPending || loading) ? (
                <Flex justify={"center"} align={"center"} height={"100%"} gap="3" direction={"column"}>
                    <Spinner />
                </Flex>
            ) : (
                <VirtualList
                    data={notes}
                    paddingSize={60}
                    itemSize={100}
                    className="pb-52"
                    renderItem={({ index, style }) => (
                        <div key={notes[index].id} style={style} className="p-3 py-1">
                            <NoteCard note={notes[index]} index={index} className="w-full h-full" />
                        </div>
                    )}
                />
            )}
        </ScrollArea>
    );
};

export default NotesList;
