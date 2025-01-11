import { Textarea, ScrollArea } from "@mantine/core";


function Note({
    ...props
}) {
    return (
        <ScrollArea h={"100%"}>
            <div className="pt-16 h-full">
                <Textarea
                    autosize
                    c={"blue"}
                    placeholder="Write your note here..."
                    className="w-full h-full"
                    {...props}
                />
            </div>
        </ScrollArea>
    );
}

export default Note;