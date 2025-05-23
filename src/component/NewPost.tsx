"use client";
import { AuthUser } from "@/model/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import PostUserAvatar from "./PostUserAvatar";
import Button from "./ui/Button";
import FilesIcon from "./ui/icons/FilesIcon";

type Props = {
    user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState<File>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target?.files;
        if (files && files[0]) {
            setFile(files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        if (e.type === "dragenter") {
            setDragging(true);
        } else if (e.type === "dragleave") {
            setDragging(false);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer?.files;
        if (files && files[0]) {
            setFile(files[0]);
        }
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const textRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;

        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("text", textRef.current?.value ?? "");

        fetch("/api/posts/", { method: "POST", body: formData }) //
            .then((res) => {
                if (!res.ok) {
                    setError(`${res.status} ${res.statusText}`);
                    return;
                }
                router.push("/");
            })
            .catch((err) => setError(err.toString()))
            .finally(() => setLoading(false));
    };
    return (
        <section className="w-full max-w-xl flex flex-col items-center mt-6">
            {loading && (
                <div className="absolute inset-0 z-20 text-center pt-[30%] bg-sky-500/20">
                    <ClipLoader color="#fa9246" />
                </div>
            )}
            {error && (
                <p className="w-full bg-red-100 text-red-600 text-center p-4 mb-4 font-bold">
                    {error}
                </p>
            )}
            <PostUserAvatar username={username} image={image ?? ""} />
            <form className="w-full flex flex-col mt-2" onSubmit={handleSubmit}>
                <input
                    name="input"
                    id="input-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleChange}
                />
                <label
                    className={`w-full h-60 flex flex-col items-center justify-center ${
                        !file && "border-2 border-sky-500 border-dashed"
                    }`}
                    htmlFor="input-upload"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {dragging && (
                        <div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none" />
                    )}
                    {!file && (
                        <div className="flex flex-col items-center pointer-events-none">
                            <FilesIcon />
                            <p>Drag and Drop your image here or click</p>
                        </div>
                    )}
                    {file && (
                        <div className="relative w-full aspect-square overflow-hidden">
                            {/* overflow-hidden */}
                            <Image
                                className="object-cover"
                                src={URL.createObjectURL(file)}
                                alt="local file"
                                fill
                                sizes="650px"
                            />
                        </div>
                    )}
                </label>
                <textarea
                    className="outline-none text-lg border border-neutral-300"
                    name="text"
                    id="input-text"
                    required
                    rows={10}
                    placeholder={"Write a caption..."}
                    ref={textRef}
                />
                <Button text="Publish" onClick={() => {}} />
            </form>
        </section>
    );
}
