import { useState, useEffect, useTransition } from "react";
import { Grid, ScrollArea, Spinner, Flex, Text } from "@radix-ui/themes";
import FolderCard from "./FolderCard.jsx";
import { useSettings } from "../../context/SettingsContext.jsx";


const FoldersList = () => {
    const [folders, setFolders] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            startTransition(() => {
                setFolders(Array.from({ length: 20 }, (_, index) => index));
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
                        columns="1"
                        gap="3"
                        rows="auto"
                        width="100%"
                        p={"3"}
                        className="animate-in fade-in pt-16 pb-64"
                    >
                        {folders.map((folder, index) => (
                            <FolderCard key={index} />
                        ))}
                    </Grid>
                )}
            </ScrollArea>
        </>
    );
};

export default FoldersList;
