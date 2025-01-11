import { useState, useEffect, useTransition } from "react";
import { ScrollArea, Grid } from '@mantine/core';
import Loading from "../Loading";
import NoteCard from "./NoteCard.jsx";

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        startTransition(() => {
            setNotes(Array.from({ length: 20 }, (_, index) => ({ id: index, content: `Note ${index}` })));
        });
        setLoading(false);
    }, []);

    return (
        (isPending || loading) ? (
            <Loading />
        ) : (

            <ScrollArea
                h={"100%"}
            >
                <Grid grow gutter="xs"
                    className="p-2 animate-in fade-in duration-200 pt-16 pb-64">
                    {notes.map((note, index) => (
                        <Grid.Col span={12} key={index}>
                            <NoteCard note={note} index={index} />
                        </Grid.Col>
                    ))}
                </Grid>
            </ScrollArea >

        )
    );
};

export default NotesList;
