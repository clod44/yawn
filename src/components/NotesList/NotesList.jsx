import { Grid, ScrollArea } from "@radix-ui/themes";
import NoteCard from "./NoteCard.jsx";
import { useSettings } from "../../context/SettingsContext.jsx";

const NotesList = () => {
    const { listViewType } = useSettings();
    return (
        <ScrollArea>
            <Grid
                columns={listViewType === "list" ? "1" : "2"}
                gap="3"
                rows="auto"
                width="auto"
                p={"4"}
                className="pb-52 pt-16"
            >
                {Array.from({ length: 20 }, (_, index) => index).map((index) => (
                    <NoteCard key={index} />
                ))}
            </Grid>
        </ScrollArea>
    );
};

export default NotesList