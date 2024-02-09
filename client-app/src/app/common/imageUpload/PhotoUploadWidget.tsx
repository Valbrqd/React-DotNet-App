import { Grid, GridColumn, Header, Image } from "semantic-ui-react";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import { useState } from "react";

export default function PhotoUploadWidget() {
    const [files, setFiles] = useState<any>([]);

    return (
        <Grid textAlign="center">
            <GridColumn width={4}>
                <Header
                    subheader
                    color="teal"
                    sub
                    content="Step 1 - Add Photo"
                />
                <PhotoWidgetDropzone setFiles={setFiles} />
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header
                    subheader
                    color="teal"
                    sub
                    content="Step 2 - Resize Photo"
                />
                {files && files.length > 0 && (
                    <Image
                        src={files[0].preview}
                    />
                )}
            </GridColumn>
            <GridColumn width={1} />
            <GridColumn width={4}>
                <Header
                    subheader
                    color="teal"
                    sub
                    content="Step 3 - Preview & Upload Photo"
                />
            </GridColumn>
        </Grid>
    );
}
