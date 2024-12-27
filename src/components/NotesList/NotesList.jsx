import { useState, useEffect, useTransition, forwardRef } from "react";
import { ScrollArea, Spinner, Flex, Text } from "@radix-ui/themes";
import NoteCard from "./NoteCard.jsx";
import { useSettings } from "../../context/SettingsContext.jsx";
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";


const PADDING_SIZE = 60; //this gets applied both top and bottom
const NoteCardWrapper = ({
    note,
    index,
    style,
    className = "p-3 py-1",
    ...props
}) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                top: `${parseFloat(style.top) + PADDING_SIZE}px`
            }}
        >
            <NoteCard index={index} note={note} className="w-full h-full" />
        </div>
    )
}

const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
        ref={ref}
        style={{
            ...style,
            height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`
        }}
        {...rest}
    />
));

const NotesList = () => {
    const { listViewType } = useSettings();
    const [notes, setNotes] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            startTransition(() => {
                setNotes(Array.from({ length: 200 }, (_, index) => index));
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
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                height={height}
                                itemCount={notes.length}
                                innerElementType={innerElementType}
                                itemSize={100}
                                width={width}
                                className="pb-52" //here only pb-* works properly for some reason
                            >
                                {NoteCardWrapper}
                            </List>
                        )}
                    </AutoSizer>
                )}
            </ScrollArea>
        </>
    );
};

export default NotesList;
