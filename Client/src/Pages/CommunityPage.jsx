import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";

import AmbientBackground from "@/Components/ui/AmbientBackground";

import Card from "@/Components/Gallery/Card";
import CardImage from "@/Components/Gallery/CardImage";
import CardBody from "@/Components/Gallery/CardBody";
import CardTags from "@/Components/Gallery/CardTags";
import CardDate from "@/Components/Gallery/CardDate";
import CardActions from "@/Components/Gallery/CardActions";
import IconButton from "@/Components/Gallery/IconButton";

export default function CommunityPage() {
  const allItems = [
    {
      id: 1,
      title: "What is Microsoft Word?",
      creator: "Eng Mohamed Dek",
      tags: ["Bold & Graphic", "ocean", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-thumbnail.png",
    },
    {
      id: 2,
      title: "Learn complete n8n in one shot",
      creator: "Shreyansh",
      tags: ["Tech/Futuristic", "sunset", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-layout.png",
    },
    {
      id: 3,
      title: "YouTube Growth Hacks",
      creator: "Riya",
      tags: ["Bold", "vibrant", "16:9"],
      date: "Mon Mar 02 2026",
      image: "/features/ai-export.png",
    },
  ];

  const LIMIT = 15;
  const [visible, setVisible] = useState(LIMIT);

  const items = allItems.slice(0, visible);
  const hasMore = visible < allItems.length;

  function loadMore() {
    setVisible((v) => v + LIMIT);
  }

  return (
    <div className="relative min-h-screen pt-38 pb-20 px-6 text-white overflow-hidden">
      <AmbientBackground />

      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">Community</h1>
          <p className="text-gray-400 text-sm mt-1">
            Explore AI-generated thumbnails from creators worldwide
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            function download(e) {
              e.stopPropagation();
              const link = document.createElement("a");
              link.href = item.image;
              link.download = `${item.title}.png`;
              link.click();
            }

            function open(e) {
              e.stopPropagation();
              window.open(item.image, "_blank");
            }

            return (
              <Card key={item.id}>
                <CardImage src={item.image} alt={item.title}>
                  {/* creator badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-pink-500/10 backdrop-blur text-xs text-white opacity-0 group-hover:opacity-100 transition">
                    {item.creator}
                  </div>

                  <CardActions>
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

        {/* LOAD MORE */}
        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={loadMore}
              className="
                px-6 py-2 rounded-full
                bg-white/5 border border-white/10
                text-sm text-gray-300
                hover:border-pink-400/40
                hover:text-white
                transition
              "
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}