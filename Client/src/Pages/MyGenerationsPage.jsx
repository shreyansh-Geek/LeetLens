import { useState } from "react";
import { Eye, Trash2, Download, ExternalLink, Image as ImageIcon } from "lucide-react";

import AmbientBackground from "@/Components/ui/AmbientBackground";

import Card from "@/Components/Gallery/Card";
import CardImage from "@/Components/Gallery/CardImage";
import CardBody from "@/Components/Gallery/CardBody";
import CardTags from "@/Components/Gallery/CardTags";
import CardDate from "@/Components/Gallery/CardDate";
import CardActions from "@/Components/Gallery/CardActions";
import IconButton from "@/Components/Gallery/IconButton";

export default function MyGenerationsPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn complete n8n in one shot",
      tags: ["Tech/Futuristic", "sunset", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-thumbnail.png",
    },
  ]);

  const isEmpty = items.length === 0;

  return (
    <div className="relative min-h-screen pt-38 pb-24 px-6 text-white overflow-hidden">
      <AmbientBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              My Generations
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              View and manage all your AI-generated thumbnails
            </p>
          </div>

          <div className="text-sm text-gray-400">
            Total Creations{" "}
            <span className="text-pink-400 font-medium">
              {items.length}
            </span>
          </div>
        </div>

        {/* EMPTY */}
        {isEmpty ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((item) => {
              function preview() {
                window.open(item.image, "_blank");
              }

              function remove() {
                setItems((prev) => prev.filter((x) => x.id !== item.id));
              }

              function download() {
                const link = document.createElement("a");
                link.href = item.image;
                link.download = `${item.title}.png`;
                link.click();
              }

              function open() {
                window.open(item.image, "_blank");
              }

              return (
                <Card key={item.id}>
                  <CardImage src={item.image} alt={item.title}>
                    <CardActions>
                      <IconButton onClick={preview}>
                        <Eye size={14} />
                      </IconButton>

                      <IconButton onClick={remove}>
                        <Trash2 size={14} />
                      </IconButton>

                      <IconButton onClick={download}>
                        <Download size={14} />
                      </IconButton>

                      <IconButton onClick={open}>
                        <ExternalLink size={14} />
                      </IconButton>
                    </CardActions>
                  </CardImage>

                  <CardBody title={item.title}>
                    <CardTags tags={item.tags} />
                    <CardDate date={item.date} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-32">
      <div className="w-16 h-16 rounded-2xl bg-[#0F0F11] border border-white/10 flex items-center justify-center mb-4">
        <ImageIcon className="text-gray-500" size={26} />
      </div>

      <p className="text-gray-200 font-medium">
        No thumbnails yet
      </p>

      <p className="text-gray-500 text-sm mt-1">
        Generate your first thumbnail to see it here
      </p>
    </div>
  );
}