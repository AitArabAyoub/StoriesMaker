"use client";
import { UploadButton } from "@/utils/uploadthing";
import { SetStateAction } from "react";
type Props = {
    setImage : React.Dispatch<SetStateAction<string>>
}
export default function UploadThing({setImage}:Props) {
    return (
        <main className="">
            <UploadButton
                className=""
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    setImage(res[0].url)
                }}
                onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
}