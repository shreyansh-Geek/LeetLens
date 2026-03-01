import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

export default function StyleDropdown({
  styles,
  style,
  setStyle,
  selectedStyle,
}) {
  const SelectedIcon = selectedStyle.icon;

  return (
    <div>
      <label className="text-sm text-gray-400 mb-2 block">
        Thumbnail Style
      </label>

      <Dropdown placement="bottom-start" offset={10}>
        <DropdownTrigger>
          <button className="w-full h-12 px-4 rounded-xl bg-[#0F0F11] border border-white/10 flex items-center gap-3 hover:border-white/20 transition">
            <SelectedIcon size={18} className="text-pink-400" />
            <span className="text-sm text-gray-200">
              {selectedStyle.title}
            </span>
          </button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Thumbnail Style"
          onAction={(key) => setStyle(key)}
          className="mt-2 p-2 bg-[#0B0B0C]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] min-w-[260px]"
          itemClasses={{
            base: "px-4 py-3 rounded-xl flex items-start gap-3 data-[hover=true]:bg-white/5 transition",
          }}
        >
          {styles.map((s) => {
            const Icon = s.icon;
            const selected = style === s.key;

            return (
              <DropdownItem
                key={s.key}
                textValue={s.title}
                className={selected ? "bg-pink-500/10" : ""}
              >
                <div className="flex gap-3">
                  <Icon
                    size={18}
                    className={
                      selected
                        ? "text-pink-400 mt-0.5"
                        : "text-gray-300 mt-0.5"
                    }
                  />

                  <div className="flex flex-col">
                    <span
                      className={`text-sm ${
                        selected
                          ? "text-pink-400 font-medium"
                          : "text-gray-200"
                      }`}
                    >
                      {s.title}
                    </span>

                    <span
                      className={`text-xs ${
                        selected
                          ? "text-pink-400/70"
                          : "text-gray-400"
                      }`}
                    >
                      {s.desc}
                    </span>
                  </div>
                </div>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}