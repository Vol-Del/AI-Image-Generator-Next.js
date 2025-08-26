"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Hero = () => {
    const [promt, setPromt] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImageGeneration = async () => {
        if (!promt.trim()) {
            toast.error("Please enter a prompt first!");
            return;
        }

        setLoading(true);
        try {
            // Start prediction
            const response = await axios.post(
                "https://api.replicate.com/v1/models/google/imagen-4/predictions",
                {
                    input: {
                        prompt: promt,
                    },
                },
                {
                    headers: {
                        Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`, // Store safely in .env.local
                        "Content-Type": "application/json",
                    },
                }
            );

            const predictionId = response.data.id;

            // Poll for completion
            let result;
            while (true) {
                const predictionRes = await axios.get(
                    `https://api.replicate.com/v1/predictions/${predictionId}`,
                    {
                        headers: {
                            Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
                        },
                    }
                );

                result = predictionRes.data;

                if (result.status === "succeeded" || result.status === "failed") {
                    break;
                }

                await new Promise((resolve) => setTimeout(resolve, 2000)); // wait before retry
            }

            if (result.status === "succeeded") {
                setImage(result.output[0]);
                toast.success("Image generated successfully!");
            } else {
                toast.error("Image generation failed. Try again.");
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.detail || "Replicate API error");
            } else {
                toast.error("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadImage = () => {
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = image;
        link.download = "generated-img.jpg";
        link.click();
    };

    return (
        <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
            {/* Content */}
            <div className="relative z-10 text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent">
                    Generate Beautiful Image with <br /> AI{" "}
                </h1>
                <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300">
                    Get started with our powerful AI image generation
                </p>

                {/* Prompt input box */}
                <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Generate Image"
                        className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"
                        value={promt}
                        onChange={(e) => setPromt(e.target.value)}
                    />
                    <Button
                        onClick={handleImageGeneration}
                        variant={"default"}
                        size={"lg"}
                        disabled={loading}
                    >
                        {loading ? "Generating..." : "Generate"}
                    </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center mt-6 gap-x-4 gap-y-3">
                    <p className="mb-2">Popular Tag:</p>
                    <Button variant={"secondary"} onClick={() => setPromt("Creative artwork of a futuristic city")}>
                        Creative
                    </Button>
                    <Button variant={"secondary"} onClick={() => setPromt("Ultra realistic portrait of a lion")}>
                        Realistic
                    </Button>
                    <Button variant={"secondary"} onClick={() => setPromt("Animated fantasy landscape")}>
                        Animation
                    </Button>
                    <Button variant={"secondary"} onClick={() => setPromt("Business office illustration")}>
                        Business
                    </Button>
                </div>

                {/* show loading and image */}
                {loading && (
                    <div>
                        <Loader className="animate-spin mt-6" />
                    </div>
                )}
                {image && (
                    <div className="mt-8 flex flex-col items-center">
                        <img
                            src={image}
                            alt="ai image"
                            className="max-w-full h-[500px] rounded-lg shadow-lg"
                            loading="lazy"
                        />
                        <Button
                            onClick={handleDownloadImage}
                            className="mt-4 mb-4 bg-orange-500 hover:bg-orange-800"
                        >
                            Download
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
