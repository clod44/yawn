import { useState, useEffect, useTransition } from "react";
import { ScrollArea, Stack } from '@mantine/core';
import Loading from "../Loading";
import FolderCard from "./FolderCard.jsx";


const FoldersList = () => {
    const [folders, setFolders] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        startTransition(() => {
            setFolders(Array.from({ length: 20 }, (_, index) => ({ id: index, title: `Folder ${index}`, emoji: "📁" })));
        });
        setLoading(false);
    }, []);

    return (
        (isPending || loading) ? (
            <Loading />
        ) : (

            <ScrollArea
                w={"100%"}
                h={"100%"}
                scrollbars="y"
            >
                <Stack
                    h={"100%"}
                    w={"100%"}
                    align="stretch"
                    justify="flex-start"
                    gap="md"
                    className="p-2 animate-in fade-in duration-200 pt-16 pb-64">
                    {folders.map((folder, index) => (
                        <FolderCard key={index} folder={folder} index={index} />
                    ))}
                </Stack>
            </ScrollArea >
        )
    );
};

export default FoldersList;
