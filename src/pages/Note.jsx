import { TextArea } from "@radix-ui/themes";


function Note({
    ...props
}) {
    return (
        <div className="pt-16 h-full">
            <TextArea
                variant="classic"
                placeholder=""
                className="h-full rounded-none" />
        </div>
    );
}

export default Note;